import React, { useState } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input } from 'semantic-ui-react'

function MyReviewedItem({ review, id, onUpdateReview, onDeleteReview }) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setIsEdit(false)
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                body,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedReview) => onUpdateReview(updatedReview))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleDeleteClick() {
        fetch(`reviews/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((deletedReview) => {
            onDeleteReview(deletedReview)
        })
        
    }

    return (
        <Grid.Column stretched>
            {isEdit ? (
             <>
             <Segment color='violet'>
             <Item.Group>
                 <Item>
                 <Header as='h4'>{review.name}</Header>
                     <Item.Image size='tiny' src={review.item_image} />
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
                         <Button as='submit' size='tiny' inverted color='green' floated='right' >Submit Edit</Button>
                     </Form>
                 </Item>
             </Item.Group>
             <Button onClick={() => setIsEdit(false)} size='tiny' inverted color='red' floated='left' >Cancel Edit</Button>
             </Segment>
            </>
            ) : (
            <>
            <Segment color='violet'>
            <Item.Group>
                <Item>
                <Header as='h4'>{review.name}</Header>
                    <Item.Image size='tiny' src={review.item_image} />
                    <Item.Content>
                        <Item.Header>{review.title}</Item.Header>
                        <Item.Description>{review.body}</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Button size='tiny' inverted color='red' floated='right' >Delete Review</Button>
            <Button onClick={() => setIsEdit(true)} size='tiny' inverted color='blue' floated='right' >Edit Review</Button>
            </Segment>
            </>
            )}
           
                <Divider hidden/>
            </Grid.Column>
    )
}

export default MyReviewedItem