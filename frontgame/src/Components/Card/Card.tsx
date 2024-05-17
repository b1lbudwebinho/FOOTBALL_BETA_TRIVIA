import React from "react";
import "./Card.css";

// type Props = {};
interface Props {
    playerName: string;
    club: string;
    jerseyNumber: number;
}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img
                src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/7912/production/_119149903_gettyimages-1313925694.jpg"
                alt="Image"
            />
            <div className="details">
                <h2>MESSI</h2>
                <p>Inter Miami</p>
            </div>
            <p className="info">
                WALKING LIVING LEGEND GOAT
            </p>
        </div>
    );
};

export default Card;