import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, remove }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="items">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <h5 className="bg-primary price">${price}</h5>
            <h4 className="my-1 mt-2 weight-500 text-center">{name}</h4>
            <p className="info">
                {show ? info : `${info.substring(0, 200)}...`}{" "}
                <button className="btn seeMore" onClick={() => setShow(!show)}>
                    {!show ? "seeMore" : "showLess"}
                </button>
            </p>
            <button
                className="btn btn-outline-dark remove"
                onClick={() => {
                    remove(id);
                }}
            >
                Remove Tour
            </button>
        </div>
    );
};

export default Tour;
