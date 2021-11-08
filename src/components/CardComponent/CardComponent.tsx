import React, {FC, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';

interface Icard{
    direction: string;
    imageUrl: string;
    title: string;
    isLarge: boolean;
}

const Card:FC<Icard> = (props:PropsWithChildren<Icard>):JSX.Element => {
    return (
        //@ts-ignore
        <Link to={props.direction} alt={props.title} data-testid="card-id">
            <div className={props.isLarge ? 'card card-large' : 'card card-small'}>
                <img
                    className="card-placeholder"
                    src="/assets/placeholder.jpg"
                    alt="placeholder"
                />
                <div
                    className="card-image"
                    style={{ backgroundImage: 'url(' + props.imageUrl + ')' }}
                />
                <div className="card-title">
                    <span>{props.title}</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;