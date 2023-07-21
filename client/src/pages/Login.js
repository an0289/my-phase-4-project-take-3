import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment, Container, Image } from 'semantic-ui-react'
import Background from '../assets/whale_wind_waker_bg.jpg'


function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }} >
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Container>
        <Segment>
            <Header style={{ fontFamily: 'Papyrus' }} size='huge' textAlign='center'>
                Zelda Item Shop
                <Image src='../images/rupee.png' size='massive' centered/> 
                </Header>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <Divider hidden />
                <Container text>
               
                <Header as='h2' style={{ fontFamily: 'Papyrus' }} textAlign='center'>
                 <Image src='../images/Tingle.png' size='massive' centered/> 
                Don't have an account?
                </Header>
                <Button color='orange' attached='bottom' onClick={() => setShowLogin(false)}>Sign Up</Button>
                </Container>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <Divider hidden />
                <Header textAlign='center'>Already have an account?</Header>
                <Button color='teal' onClick={() => setShowLogin(true)}>Sign In</Button>
            </>
            )}
        </Segment>
        </Container>
        </div>
    )
}

export default Login 