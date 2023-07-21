import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment, Container, Image, Grid } from 'semantic-ui-react'
import Background from '../assets/whale_wind_waker_bg.jpg'


function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '99vh' }} >
        <Divider hidden />
        <Container style={{ paddingLeft:260 }}>
        {/* <Segment  style={{ height:520, width:700 }}raised>
            <Header style={{ fontFamily: 'Papyrus' }} size='huge' textAlign='center'>
                Zelda Item Shop
                <Image src='../images/rupee.png' size='massive' centered/> 
                </Header> */}
            {showLogin ? (
            <>
            <Segment  style={{ height:520, width:700 }}raised>
            <Header style={{ fontFamily: 'Papyrus' }} size='huge' textAlign='center'>
                Zelda Item Shop
                <Image src='../images/rupee.png' size='massive' centered/> 
                </Header>
                <LoginForm onLogin={onLogin} />
                <Divider hidden />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'Papyrus' }} textAlign='center'> 
                <Image size='massive' src='../images/Tingle.png' centered />
                Don't have an account?
                </Header>
                <Button inverted color='green' attached='bottom' onClick={() => setShowLogin(false)}>Sign Up</Button>
                </Container>
            </Segment>
            </>
            ) : (
            <>
            <Segment  style={{ height:650, width:700 }}raised>
            <Header style={{ fontFamily: 'Papyrus' }} size='huge' textAlign='center'>
                Zelda Item Shop
                <Image src='../images/rupee.png' size='massive' centered/> 
                </Header>
                <SignUpForm onLogin={onLogin} />
                <Divider hidden />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'Papyrus' }} textAlign='center'>
                <Image size='massive' src='../images/Tingle.png' centered />
                    Already have an account?</Header>
                <Button inverted color='green' attached='bottom' onClick={() => setShowLogin(true)}>Sign In</Button>
                </Container>
            </Segment>
            </>
            )}
        {/* </Segment> */}
        </Container>
        </div>
    )
}

export default Login 