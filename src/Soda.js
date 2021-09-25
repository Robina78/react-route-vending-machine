import React from "react";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import './Soda.css';
import Message from "./Message";

const Soda = () => {
    return (
        <div className="Soda">
            <img src={sodaImg} alt="coca cola can" />
            <Message>
                <h1>OMG SUGARRRR</h1>
                <h1><Link to="/">go back</Link></h1>
            </Message>
            <img src={sodaImg} alt="coca cola can"/>
        </div>
    );
};

export default Soda;