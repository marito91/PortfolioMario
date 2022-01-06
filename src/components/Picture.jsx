import React from 'react'

// Images
import Figure from 'react-bootstrap/Figure'
import profilepic from '../static/img/profilePic.JPG'

export default function Picture() {
    return (
        <>
            <Figure>
                <Figure.Image
                    width={210}
                    height={190}
                    alt="210x190"
                    src={profilepic}
                    roundedCircle={true}
                />
                <Figure.Caption>
                    <h3 id="name">MARIO GOMEZ</h3>
                    <h4 id="name">WEB DEVELOPER</h4>
                </Figure.Caption>
            </Figure>
        </>
    )
}
