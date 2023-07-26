import React, { useState, useContext } from 'react'
import { Container, Button, Form, Segment, Divider, Label, Header } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function SignUpForm() {
    const {setUser} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                username, 
                password,
                password_confirmation: passwordConfirmation, 
                image_url: imageUrl
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        <Container style={{ paddingLeft:80}}>
        <Segment style={{ height:395, width:500}} raised>
            <Form onSubmit={handleSubmit}>
            <Header style={{ fontFamily: 'Papyrus' }} textAlign='center' as='h3'>Sign Up Page</Header>
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
                    <label>Password Confirmation</label>
                        <input 
                        type='password'
                        name='password_confirmation'
                        value={passwordConfirmation}
                        placeholder='Password Confirmation'
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                    <label>Avatar</label>
                        <input 
                        type='text'
                        name='imageUrl'
                        value={imageUrl}
                        placeholder='Avatar'
                        onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
                    </Form.Field>
                <Button inverted color='blue' type='submit'>Sign Up</Button>
            </Form>
        </Segment>
        </Container>
        </>
        )
}

export default SignUpForm