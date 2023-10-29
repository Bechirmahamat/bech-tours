import React from "react";

import Tour from "./Tour";

const Tours = ({ tours, remove }) => {
    return (
        <div className="row my-3">
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} remove={remove}></Tour>;
            })}
        </div>
    );
};

export default Tours;
