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
                    <button><a href="https://helpful-pasca-ac9bb9.netlify.app/">Alexandre</a></button>
                </div>
                <div className="cv-div">
                    <button><a href="https://loquacious-squirrel-c39fee.netlify.app/">Gary</a></button>
                </div>
                <div className="cv-div">
                    <button><a href="https://clinquant-youtiao-a1b441.netlify.app/">Mouhssine</a></button>
                </div>
                <div className="cv-div">
                    <button><a href="https://sunny-cucurucho-81ccd1.netlify.app">Dylan</a></button>
                </div>
            </div>
        </div>
    )
}