import React, { useState } from 'react'
import { Container, Button, Form, Segment, Divider, Label } from 'semantic-ui-react'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        <Divider hidden />
        <Container>
        <Segment raised>
            <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input 
                        type='text'
                        name='username'
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input 
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
                    </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>
        </Segment>
        </Container>
        </>
        )
}

export default LoginForm 