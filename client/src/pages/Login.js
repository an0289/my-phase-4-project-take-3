import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment } from 'semantic-ui-react'

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Segment>
            <Header>Zelda Item Shop</Header>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <Divider hidden />
                <Header>Don't have an account?</Header>
                <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <Divider hidden />
                <Header>Already have an account?</Header>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
            </>
            )}
        </Segment>
    )
}

export default Login 