import React, { useState } from "react";
import "./itemDesc.css";
import { useLocation } from "react-router-dom";

const ItemDesc = () => {
    const location = useLocation();
    const item = location.state;

    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const handleImageLoad = () => {
        setImgLoaded(true);
    };

    const handleImageError = () => {
        console.error("Image failed to load");
        setImgError(true);
    };

    return (
        <div className="desc">
            <div className="desc-left">
            {imgError ? (
                    <div className="image-error">Image not available</div>
                ) : (
                    <img
                        className={`img ${imgLoaded ? "loaded" : "loading"}`}
                        src={item.item.imageUrl}
                        alt={item.item.name}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
            </div>
            <div className="desc-right">
                <div className="name">{item.item.name}</div>
                <div className="description">{item.item.description}</div>
            </div>
        </div>
    );
};

export default ItemDesc;
