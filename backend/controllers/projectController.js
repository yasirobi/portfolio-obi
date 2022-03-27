const Project = require("../models/project")
const fs = require('fs');
const lodash = require("lodash");
const formidable = require("formidable");
const path = require('path');
const { errorHandler } = require("../errorHandler/AppError");

exports.projectById = async (req, res, next, id) => {
    try {
        const project = await Project.findById(id)
        .populate('category')
        if(!project) return res.status(400).json({
            err: errorHandler(err)
        });
        req.project = project;
            next();
       
    } catch (error) {
       console.log(error);
    }
    
};

exports.read = (req, res) => {
    req.project.photo = undefined;
    return res.json(req.project);
};



exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // check for all fields
        const { name, desc, link1, category, link2, body } = fields;

        if (!name || !desc || !link1|| !category || !link2 || !body) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let project = new Project(fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            project.photo.data = fs.readFileSync(files.photo.path);
            project.photo.contentType = files.photo.type;
        }

        project.save((err, result) => {
            if (err) {
                console.log('project CREATE ERROR ', err);
                return res.status(400).json({
                    err: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        let project = req.project;
        project = lodash.extend(project, fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            project.photo.data = fs.readFileSync(files.photo.path);
            project.photo.contentType = files.photo.type;
        }

        project.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === 'title') {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Project.find(findArgs)
        .select('-photo')
        .populate('category')
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Projects not found'
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};


exports.photo = (req, res, next) => {
    if (req.project.photo.data) {
        res.set('Content-Type', req.project.photo.contentType);
        return res.send(req.project.photo.data);
    }
    next();
};



exports.remove = async (req,res) => {
    try {
        let project = req.project
        const projectRemoved = await Project.findByIdAndRemove(project)
         if(!projectRemoved) return res.status(400).json({
            error: errorHandler(err)
        });
        res.status(200).json({
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error:'server error'
        })
    }
}


exports.lists = async (req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 4;
try {
    const projects = await Project.find()
        .select('-photo')
        .populate('category')
        .sort([[sortBy, order]])
        .limit(limit)
        if (!projects) {
            return res.status(400).json({
                error: 'Projects not found'
            });
        }
        res.json(projects);
} catch (error) {
    console.log(error);
}
  
}



exports.listRelated = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Project.find({ _id: { $ne: req.project }, category: req.project.category })
        .limit(limit)
        .populate('category', '_id name')
        .exec((err, projects) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(projects);
        });
};



exports.listCategories = async (req, res) => {
    try {
      const categories = await Project.distinct('category') 
      if (!categories) {
        return res.status(400).json({
            error: 'Categories not found'
        });
    }
    res.json(categories); 
    } catch (error) {
        console.log(categories);
    }
    
};


exports.listSearch = (req, res) => {
    // create query object to hold search value and category value
    const query = {};
    // assign search value to query.name
    if (req.query.search) {
        query.name = { $regex: req.query.search, $options: 'i' };
        // assigne category value to query.category
        if (req.query.category && req.query.category != 'All') {
            query.category = req.query.category;
        }
        // find the product based on query object with 2 properties
        // search and category
        Project.find(query, (err, projects) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(projects);
        }).select('-photo');
    }
};