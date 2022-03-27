const { errorHandler } = require('../errorHandler/AppError');
const Category = require('../models/category')
const Project = require('../models/project')

// exports.create = async (req,res) => {
//     const { name } = req.body
//    try {
//        const categories = await Category.findOne({name})
//        if(categories) return res.status(400).json({
//         error:'category is already created'
//     })
//        const category = new Category({name:name})
//        const savedCategory = await category.save()
     
//        res.status(201).json({
//            message:'category is created',
//            savedCategory
//        })
//    } catch (error) {
//        console.log(error);
//    } 
// }




// exports.categoryById = async (req,res,next,id) => {
//     try {
//        const category = await Category.findById(id) 
//        if(!category) return res.status(400).json({
//            error:'category does not exist'
//        })
//        req.category = category
//        next()
//     } catch (err) {
//         console.log(err);
//     }
// }

// exports.read = async (req,res) => {
//     const category = req.category
//     res.status(200).json({
//         category
//     })
// }


// exports.update = async (req,res) => {
//     const category = req.category
//     category.name = req.body.name
//     try {
//         const update = await category.save()
//         if(!update) return res.status(400).json({
//             error:'category not updated'
//         }) 
//         res.status(200).json({
//             message:'category is updated',
//             update
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }



// exports.remove = async(req,res) => {
//     const { category } = req.category
//     try {
//         const data = await Project.find({category})
//         if (data.length >= 1) {
//             return res.status(400).json({
//                 message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
//             });
//         }else{
//            const data = await Category.findOneAndRemove({category})
//         if (!data) {
//             return res.status(400).json({
//                 error: 'category is not deleted'
//             });
//         }
//         res.json({
//             message: 'Category deleted'
//         });  
//         }
       
//     } catch (error) {
//         res.status(500).json({
//             error:'server problems'
//         })
//     }
// }


// exports.lists = async (req,res) => {
//     try {
//         const categories = await Category.find()
       
//         if(!categories) return res.status(400).json({
//             error: errorHandler(err)
//         })
//         res.status(200).json(
//             categories
//     )
//     } catch (err) {
//         console.log(err);
//     }
// }



exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.category);
};

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('category update param', req.params.categoryId);

    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const category = req.category;
    Project.find({ category }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
            });
        } else {
            category.remove((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json({
                    message: 'Category deleted'
                });
            });
        }
    });
};

exports.lists = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};