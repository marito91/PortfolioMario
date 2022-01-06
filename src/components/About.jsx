import React from 'react'

// Components
import Header from './Header'

// CSS
import '../static/css/About.css';
import '../static/css/Main.css';

// Images
import macbook from '../static/img/macbookpro.svg'
import boxing from '../static/img/boxing.svg'
import gaming from '../static/img/gaming.svg'
import programming from '../static/img/programming.svg'

export default function About() {
    return (
        <>
            <Header />
            <section>
                <div className="background">
                    <h1 className="title" >Interests</h1>
                    <div id="computer">
                        <img src={macbook} style={{ maxWidth: "100%", maxHeight: "auto" }} alt="" />
                    </div>
                    <div id="box">
                        <img src={boxing} style={{ maxWidth: "100%", maxHeight: "auto" }} alt="" />
                    </div>
                    <div id="game">
                        <img src={gaming} style={{ maxWidth: "100%", maxHeight: "auto" }} alt="" />
                    </div>
                    <div id="programming">
                        <img src={programming} style={{ maxWidth: "100%", maxHeight: "auto" }} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
