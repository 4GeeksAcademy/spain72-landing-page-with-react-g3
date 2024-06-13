import React from "react";
import propTypes from "prop-types";

export const Card = (props) => {
    return (
        <div className="col">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.textButton}</a>
                </div>
            </div>

        </div>

    )
}

Card.propTypes = {
    tittle: propTypes.string,
    description: propTypes.string,
    textButton: propTypes.string,
    image: propTypes.string
}