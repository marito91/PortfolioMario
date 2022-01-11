
// Libraries
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// Components
import Header from './Header'

// CSS
import '../static/css/Home.css';
import '../static/css/Main.css';

// Images
import profilepic from '../static/img/profilePic.JPG'
/*
import Figure from 'react-bootstrap/Figure'
import macbook from '../static/img/macbookpro.svg'
import boxing from '../static/img/boxing.svg'
import gaming from '../static/img/gaming.svg'
import programming from '../static/img/programming.svg'
*/
import instagram from '../static/img/instagram.svg'
import linkedin from '../static/img/linkedin.svg'
import github from '../static/img/github.svg'
import discord from '../static/img/discord.svg'
import calendar from '../static/img/calendar.svg'
import email from '../static/img/email.svg'
import location from '../static/img/location.svg'
import phone from '../static/img/phone.svg'
import line from '../static/img/line.svg'
import coding from '../static/img/coding.svg'
import webdesign from '../static/img/webdesign.svg'
import database from '../static/img/database.svg'
import training from '../static/img/training.svg'
import pricing from '../static/img/pricing.svg'
import tree from '../static/img/tree.png'



export default function Home() {

    return (
        <>
            <Header />
            <section>
                <div className="background img-tree">
                    <Container>
                        <Row>
                            <Col>
                                <div className="profilePositon">
                                <Card className="profileCard">
                                    <img src={profilepic} alt="Profile Picture" id="cardImage" style={{ backgroundColor: "transparent", marginTop: "15px" }} />
                                    <Card.Body style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,.125)", borderTopLeftRadius: "calc(3.25rem - 15px)", borderTopRightRadius: "calc(3.25rem - 15px)"}}>
                                        <Card.Title><h2 style={{ textAlign: "center", color: "#05445E" }}>Mario<strong> Gomez</strong></h2></Card.Title>
                                        <Card.Text>
                                        <h5 id="role">Web Developer</h5>
                                        </Card.Text>
                                        <table className="table" style={{ textAlign: "center" }}>
                                            <thead>
                                                <tr>
                                                    <td><a href="https://github.com/marito91"><img className="icons" src={github} alt="Github" /></a></td>
                                                    <td><a href="https://www.linkedin.com/in/mario-gomez-a5b131187/"><img className="icons" src={linkedin} alt="LinkedIn" /></a></td>
                                                    <td><a href="https://www.instagram.com/mariogomez91/"><img className="icons" src={instagram} alt="Instagram" /></a></td>
                                                    <td><a href="https://discordapp.com/users/Marito91#5958/"><img className="icons" src={discord} alt="Discord" /></a></td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush data-list-group">
                                        <ListGroupItem className="groupItems">
                                            <img className="data" src={calendar} alt="Birth Date" />
                                            <h6 className="groupInfo">October 18th, 1991</h6>
                                        </ListGroupItem>
                                        <ListGroupItem className="groupItems">
                                            <img className="data" src={location} alt="Location" />
                                            <h6 className="groupInfo">Barranquilla, Colombia</h6>
                                        </ListGroupItem>
                                        <ListGroupItem className="groupItems">
                                            <img className="data" src={email} alt="Email Address" />
                                            <h6 className="groupInfo">magv181091@gmail.com</h6>
                                        </ListGroupItem>
                                        <ListGroupItem className="groupItems">
                                            <img className="data" src={phone} alt="Phone Number" />
                                            <h6 className="groupInfo">+57(301)782-3403</h6>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <Card.Body style={{ backgroundColor: "#D4F1F4", textAlign: "center", borderTop: "hidden", borderBottomLeftRadius: "calc(3.25rem - 15px)", borderBottomRightRadius: "calc(3.25rem - 15px)" }}>
                                        <form method="GET" action='../static/docs/Resumes.zip'>
                                            <Button variant="info">Download CV</Button>{' '}
                                        </form>
                                    </Card.Body>
                                </Card>
                                </div>
                            </Col>
                            <Col className="information" style={{ backgroundColor: "transparent", marginBottom: "2%" }} xs={6}>
                                <Card className="phoneCard" id="top-card">
                                    <Card.Header style={{ border: "hidden", color: "#05445E", backgroundColor: "white", borderTopLeftRadius: "calc(3.25rem - 15px)", borderTopRightRadius: "calc(3.25rem - 15px)" }} as="h3">About Me <br/>
                                        <img src={line} alt="Separation" style={{ transform: "rotate(90deg)", width: "32px" }}/>
                                        <h6>
                                            I'm a former Psychologist, now Developer from Barranquilla, Colombia working in web development and programming. I really like working on
                                            webpages and truly enjoy participating on both the front-end and back-end side of projects.
                                            <br/>
                                            <br/>
                                            I'm always looking forward to building new websites that offer a functional and user-friendly experience. I like adding a personal touch to each one of my projects
                                            always thinking in the user experience. More than that, I'm constantly looking forward to learning new technologies and things in general. Feel free to check
                                            my projects and GitHub portfolio. 
                                        </h6> 
                                    </Card.Header>
                                    <Card.Body style={{ backgroundColor: "#D4F1F4", border: "hidden" }}>
                                        <Card.Title style={{ border: "hidden", color: "#05445E" }} as="h3">Services</Card.Title>
                                        <Card.Text style={{ color: "#05445E" }}>
                                            <Row xs={1} md={2} className="g-4">
                                                <Col>
                                                <Card className="groupcards">
                                                    <Card.Img variant="top" src={webdesign} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Web Design</Card.Title>
                                                    <Card.Text>
                                                        High-quality designs that will make your page look modern and professional.
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                                <Col>
                                                <Card className="groupcards">
                                                    <Card.Img variant="top" src={coding} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Development</Card.Title>
                                                    <Card.Text>
                                                        Back-end services going through Python and Javascript.
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                            </Row>
                                            <Row xs={1} md={2} className="g-4" style={{ marginTop: "2%" }}>
                                                <Col>
                                                <Card className="groupcards">
                                                    <Card.Img variant="top" src={database} className="cardimgs"/>
                                                    <Card.Body>
                                                    <Card.Title>Database</Card.Title>
                                                    <Card.Text>
                                                        Use of relational and non relational databases such as MySQL and MongoDB.
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                                <Col>
                                                <Card className="groupcards">
                                                    <Card.Img variant="top" src={training} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Training</Card.Title>
                                                    <Card.Text>
                                                        Professional training for your employees in all ranges of tools.
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body style={{ backgroundColor: "#D4F1F4", border: "hidden" }}>
                                        <Card.Text style={{ color: "#05445E" }}>
                                            <Row xs={1} md={2} className="g-4">
                                                <Col>
                                                <Card.Title style={{ border: "hidden", color: "#05445E" }} as="h3">Coding Skills</Card.Title>
                                                <Card className="groupcards">
                                                    <Card.Body>
                                                        <p>Python</p>
                                                        <div class="skill-container">
                                                            <div class="skills python">90%</div>
                                                        </div>
                                                        <br />
                                                        <p>JavaScript</p>
                                                        <div class="skill-container">
                                                            <div class="skills js">80%</div>
                                                        </div>
                                                        <br />
                                                        <p>HTML</p>
                                                        <div class="skill-container">
                                                            <div class="skills html">100%</div>
                                                        </div>
                                                        <br />
                                                        <p>CSS</p>
                                                        <div class="skill-container">
                                                            <div class="skills css">70%</div>
                                                        </div>
                                                        <br />  
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                                <Col>
                                                <Card.Title style={{ border: "hidden", color: "#05445E" }} as="h3">Soft Skills</Card.Title>
                                                <Card className="groupcards">
                                                    <Card.Body>
                                                        <p>Adaptability</p>
                                                        <div class="skill-container">
                                                            <div class="skills adapt">100%</div>
                                                        </div>
                                                        <br />
                                                        <p>Innovation</p>
                                                        <div class="skill-container">
                                                            <div class="skills innovate">80%</div>
                                                        </div>
                                                        <br />
                                                        <p>Dedication</p>
                                                        <div class="skill-container">
                                                            <div class="skills dedication">90%</div>
                                                        </div>
                                                        <br />
                                                        <p>Organization</p>
                                                        <div class="skill-container">
                                                            <div class="skills org">85%</div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body id="bottom-card">
                                        <Card.Title style={{ border: "hidden", color: "#05445E" }} as="h3">Pricing</Card.Title>
                                        <Card.Text style={{ color: "#05445E" }}>
                                            <Row xs={1} md={2} className="g-4">
                                                <Col>
                                                <Card className="pricecards" >
                                                    <Card.Img variant="top" src={pricing}  style={{ marginTop: "2%" }} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Web Design</Card.Title>
                                                    <Card.Text>
                                                        Up to 5 navigational sections <br />
                                                        Contacts <br />
                                                        Personalized designs <br />
                                                        Responsive designs <br />
                                                        WhatsApp Chat <br />
                                                        Social Media links <br />
                                                        <s style={{ color: "#75E6DA" }}>Hosting and Domain</s> <br />
                                                        <s style={{ color: "#75E6DA" }}>Content administration </s> <br />
                                                    </Card.Text>
                                                    <Button variant="info">Learn more</Button>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                                <Col>
                                                <Card className="pricecards">
                                                    <Card.Img variant="top" src={pricing} style={{ marginTop: "2%" }} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Development</Card.Title>
                                                    <Card.Text>
                                                        Up to 10 navigational sections <br />
                                                        Contact Forms <br />
                                                        Personalized designs <br />
                                                        Responsive designs <br />
                                                        WhatsApp Chat <br />
                                                        Social Media links <br />
                                                        Hosting and Domain <br />
                                                        Content administration <br />
                                                    </Card.Text>
                                                    <Button variant="info">Learn more</Button>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
