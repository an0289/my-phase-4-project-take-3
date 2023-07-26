import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Segment, List, Image, Item, Divider, Form, Input, TextArea, Label } from 'semantic-ui-react'

function NewReview({ setIsAdd, onAddReview }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               title,
               body
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newReview) => onAddReview(newReview))
                console.log('here I am')
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <Segment>
        <Form onSubmit={handleSubmit}>
            <Form.Field>
            <label>Review Title</label>
            <input 
            type='text'
            name='title'
            value={title}
            placeholder='Review Title'
            onChange={(e) => setTitle(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Review Body</label>
            <textarea 
            type='text'
            name='body'
            value={body}
            placeholder='Review Body'
            onChange={(e) => setBody(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
            </Form.Field>
            <Form.Field>
            <Button as='submit' size='tiny' inverted color='green' floated='right' >Submit Review</Button>
            </Form.Field>
            <Form.Field>
            <Button size='tiny' color='red' onClick={() => setIsAdd(false)}>Cancel</Button>
            </Form.Field>
        </Form>
        </Segment>
    )
}

export default NewReview 