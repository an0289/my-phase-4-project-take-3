import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment, Container, Image } from 'semantic-ui-react'

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Container>
        <Segment>
            <Header style={{ fontFamily: 'Papyrus' }} size='huge' textAlign='center'>Zelda Item Shop</Header>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <Divider hidden />
                <Container text>
               
                <Header as='h2' style={{ fontFamily: 'Papyrus' }} textAlign='center'>
                 <Image src='../images/Tingle.png' size='massive' centered/> 
                Don't have an account?
                </Header>
                <Button attached='bottom' onClick={() => setShowLogin(false)}>Sign Up</Button>
                </Container>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <Divider hidden />
                <Header textAlign='center'>Already have an account?</Header>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
            </>
            )}
        </Segment>
        </Container>
        </>
    )
}

export default Login 