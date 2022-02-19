import React from 'react';

export default function Cards (props) {
    return (
        <div className="card-divmain">
            <div className="card-contents">
                <img src={`${props.coverImg}`} alt="coverImg" className="card-coverImg"/>
                <div className="card-info">
                    <div className="card-location">
                        <img src="./tag.png" alt="tag" className="card-tagImg"/>
                        <p>{props.location}</p>
                        <a href={props.link}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.title}</h1>
                    <div className="card-date">
                        <p>{props.startDate}-{props.endDate}</p>
                    </div>
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}