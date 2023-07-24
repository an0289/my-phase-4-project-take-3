import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Segment, List, Image, Item, Divider, Form, Input, TextArea } from 'semantic-ui-react'

function NewReview({ setIsAdd, onAddReview }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                body,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newReview) => onAddReview(newReview))
                navigate("/my_reviewed_items")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <List.Item>
                <List.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                        <label>Review Title</label>
                        <input 
                        type='text'
                        name='title'
                        value={title}
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Review Body</label>
                        <textarea 
                        type='text'
                        name='body'
                        value={body}
                        placeholder='Body'
                        onChange={(e) => setBody(e.target.value)}
                        />
                        </Form.Field>
                         <Button as='submit' size='tiny' inverted color='green' floated='right' >Submit Review</Button>
                     </Form>
                </List.Content>
            <Button size='tiny' color='red' onClick={() => setIsAdd(false)}>Cancel</Button>
        </List.Item>
    )
}

export default NewReview 