import React from "react";
import "./Card.css";

// type Props = {};
interface Props {
    playerName: string;
    club: string;
    jerseyNumber: number;
}

// const Card = ({ playerName, club, jerseyNumber }: Props) => {
const Card: React.FC<Props> = ({
    playerName, club, jerseyNumber, 
}: Props): JSX.Element => {
    return (
        <div className="card">
            <img
                src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/7912/production/_119149903_gettyimages-1313925694.jpg"
                alt="Image"
            />
            <div className="details">
                <h2>{playerName}</h2>
            </div>
            <p>{club} ({jerseyNumber})</p>
            <p className="info">
                WALKING LIVING LEGEND GOAT
            </p>
        </div>
    );
};

export default Card;