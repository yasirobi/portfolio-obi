import React from "react";
import { API } from "../configUrl";


const ShowImage = ({ item, url }) => (
    <div className="header-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
        />
    </div>
);

export default ShowImage;