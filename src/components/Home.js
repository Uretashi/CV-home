import React from "react";
import "../Home.css";


export default function Home() {
    return (
        <div className="home">
            <div className="logo">
                <img src="/estiam_logo.png"/>
            </div>
            <span className="separator"></span>
            <div className="cv-home">
                <div className="cv-div">
                    <button>Alexandre</button>
                </div>
                <div className="cv-div">
                    <button>Gary</button>
                </div>
                <div className="cv-div">
                    <button>Mouhssine</button>
                </div>
                <div className="cv-div">
                    <button>Dylan</button>
                </div>
            </div>
        </div>
    )
}