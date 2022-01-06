
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
import Picture from './Picture'

// CSS
import '../static/css/Home.css';
import '../static/css/Main.css';

// Images
import Figure from 'react-bootstrap/Figure'
import profilepic from '../static/img/profilePic.JPG'
import macbook from '../static/img/macbookpro.svg'
import boxing from '../static/img/boxing.svg'
import gaming from '../static/img/gaming.svg'
import programming from '../static/img/programming.svg'
import instagram from '../static/img/instagram.svg'
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
export default function Resume() {
    return (
        <>
            <Header />
            <section>
                <div className="background">
                    <Container>
                        <Row>
                            <Col>
                                <div className="background">
                                <Card style={{ width: '18rem', backgroundColor: "#189AB4", border: "0px", boxShadow: "0 2.5rem 3.125rem rgb(103 118 128 / 10%)", margin: "auto"}}>
                                    <img src={profilepic} alt="Profile Picture" id="cardImage" style={{ backgroundColor: "#84BBDB", marginTop: "15px" }} />
                                    <Card.Body style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,.125)", borderTopLeftRadius: "calc(3.25rem - 15px)", borderTopRightRadius: "calc(3.25rem - 15px)"}}>
                                        <Card.Title><h2 style={{ textAlign: "center", color: "#05445E" }}>Mario<strong> Gomez</strong></h2></Card.Title>
                                        <Card.Text>
                                        <h5 style={{ marginTop: "2%", textAlign: "center", color: "#189AB4", backgroundColor: "#75E6DA", border: "1px solid #75E6DA", borderTopLeftRadius: "calc(3.25rem - 15px)", borderTopRightRadius: "calc(3.25rem - 15px)", borderBottomLeftRadius: "calc(3.25rem - 15px)", borderBottomRightRadius: "calc(3.25rem - 15px)" }}>Web Developer</h5>
                                        </Card.Text>
                                        <table className="table" style={{ textAlign: "center" }}>
                                            <thead>
                                                <tr>
                                                    <td><a href="https://github.com/marito91"><img className="icons" src={github} alt="Github" /></a></td>
                                                    <td><a href="https://www.instagram.com/mariogomez91/"><img className="icons" src={instagram} alt="Instagram" /></a></td>
                                                    <td><a href="https://discordapp.com/users/Marito91#5958/"><img className="icons" src={discord} alt="Discord" /></a></td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush" style={{ backgroundColor: "#D4F1F4", border: "2px", borderBottom: "hidden"}}>
                                        <ListGroupItem style={{ color: "#05445E", textAlign: "left", display: "inline", padding: "10px"}}><img className="data" src={calendar} alt="Birth Date" /><h6 style={{ display: "inline", marginLeft: "5%" }}>October 18th, 1991</h6></ListGroupItem>
                                        <ListGroupItem style={{ color: "#05445E", textAlign: "left", display: "inline", padding: "10px"}}><img className="data" src={location} alt="Location" /><h6 style={{ display: "inline", marginLeft: "5%" }}>Barranquilla, Colombia</h6></ListGroupItem>
                                        <ListGroupItem style={{ color: "#05445E", textAlign: "left", display: "inline", padding: "10px"}}><img className="data" src={email} alt="Email Address" /><h6 style={{ display: "inline", marginLeft: "5%" }}>magv181091@gmail.com</h6></ListGroupItem>
                                        <ListGroupItem style={{ color: "#05445E", textAlign: "left", display: "inline", padding: "10px"}}><img className="data" src={phone} alt="Phone Number" /><h6 style={{ display: "inline", marginLeft: "5%" }}>+57(301)782-3403</h6></ListGroupItem>
                                    </ListGroup>
                                    <Card.Body style={{ backgroundColor: "#D4F1F4", textAlign: "center", borderTop: "hidden", borderBottomLeftRadius: "calc(3.25rem - 15px)", borderBottomRightRadius: "calc(3.25rem - 15px)" }}>
                                        <Button onClick={"#"} variant="info">Download CV</Button>{' '}
                                    </Card.Body>
                                </Card>
                                </div>
                            </Col>
                            <Col className="information" style={{ backgroundColor: "#189AB4" }} xs={6}>
                                <Card style={{ margin: "auto", backgroundColor: "#189AB4", borderTop: "hidden", border: "hidden", borderBottomLeftRadius: "calc(3.25rem - 15px)", borderBottomRightRadius: "calc(3.25rem - 15px)" }}>
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
                                    <Card.Body style={{ backgroundColor: "white", border: "hidden", borderBottomLeftRadius: "calc(3.25rem - 15px)", borderBottomRightRadius: "calc(3.25rem - 15px)"}}>
                                        <Card.Title style={{ border: "hidden", color: "#05445E" }} as="h3">Pricing</Card.Title>
                                        <Card.Text style={{ color: "#05445E" }}>
                                            <Row xs={1} md={2} className="g-4">
                                                <Col>
                                                <Card className="pricecards" >
                                                    <Card.Img variant="top" src={webdesign} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Web Design</Card.Title>
                                                    <Card.Text>
                                                        High-quality designs that will make your page look modern and professional.
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                    </Card.Body>
                                                </Card>
                                                </Col>
                                                <Col>
                                                <Card className="pricecards">
                                                    <Card.Img variant="top" src={coding} className="cardimgs" />
                                                    <Card.Body>
                                                    <Card.Title>Development</Card.Title>
                                                    <Card.Text>
                                                        Back-end services going through Python and Javascript.
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
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
