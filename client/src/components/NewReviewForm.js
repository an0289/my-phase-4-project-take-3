import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Segment, List, Image, Item, Divider, Form, Input, TextArea, Label } from 'semantic-ui-react'
import { ItemContext } from '../contexts/ItemContext'
import { UserContext } from '../contexts/UserContext'

function NewReviewForm({ setIsAdd, itemId }) {
    const {items, setItems} = useContext(ItemContext)
    const {user, setUser} = useContext(UserContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleAddReview(newReview) {
        const updatedUserReviews = [...user.reviews, newReview]
        const updatedUser = {...user, reviews: updatedUserReviews}
        setUser(updatedUser)
      
        const updatedItems = items.map((item) => {
          if(item.id === newReview.item_id) {
            const updatedItemReviews = [...item.reviews, newReview]
            const newItem = {...item, reviews: updatedItemReviews}
            return newItem 
          }
            return item 
        })
        setItems(updatedItems)
      }

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
                item_id: itemId 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newReview) => handleAddReview(newReview))
                navigate("/my_reviewed_items")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
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
            <Button type='submit' size='tiny' inverted color='green' floated='right' >Submit Review</Button>
            </Form.Field>
            <Form.Field>
            <Button size='tiny' color='red' onClick={() => setIsAdd(false)}>Cancel</Button>
            </Form.Field>
        </Form>
    )
}

    export default NewReviewForm 