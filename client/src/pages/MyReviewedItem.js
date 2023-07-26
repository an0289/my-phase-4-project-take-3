import React, { useState, useContext } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'
import { ItemContext } from '../contexts/ItemContext'

function MyReviewedItem({ review, id, originalBody, originalTitle }) {
    const {user, setUser} = useContext(UserContext)
    const {items, setItems} = useContext(ItemContext)
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(originalTitle)
    const [body, setBody] = useState(originalBody)
    const [errors, setErrors] = useState([])

    function handleUpdateReview(updatedReview) {
        const updatedUserReviews = user.reviews.map((review) => review.id === updatedReview.id ? updatedReview : review)
        const updatedUser = { ...user, reviews: updatedUserReviews}
        setUser(updatedUser)
  
        const updatedItems = items.map((item) => {
          if(item.id === updatedReview.item_id) {
            const updatedItemReviews = item.reviews.map((review) => review.id === updatedReview.id ? updatedReview : item)
            const newItem = {...item, reviews: updatedItemReviews}
            return newItem 
          }
            return item 
        })
        setItems(updatedItems)
    }

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
                r.json().then((updatedReview) => handleUpdateReview(updatedReview))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleDeleteReview(deletedReview) {
        const updatedUserReviews = user.reviews.filter((rev) => rev.id !== deletedReview.id)
        const updatedUser = {...user, reviews: updatedUserReviews} 
        setUser(updatedUser)
        
         
        const updatedItems = items.map((item) => {
          if(item.id === deletedReview.item_id) {
            const updatedReviews = item.reviews.filter((rev) => rev.id !== deletedReview.id)
            const newItem = {...item, reviews: updatedReviews}
            return newItem
  
          }
            return item 
        })
        setItems(updatedItems)
    }

    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                r.json().then((deletedReview) => handleDeleteReview(deletedReview))
            }
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
                        <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
                        </Form.Field>
                         <Button type='submit' size='tiny' inverted color='green' floated='right' >Submit Edit</Button>
                         <Button onClick={() => setIsEdit(false)} size='tiny' inverted color='red' floated='left' >Cancel Edit</Button>
                     </Form>
                     
                 </Item>
             </Item.Group>
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
            <Button onClick={handleDeleteClick} size='tiny' inverted color='red' floated='right' >Delete Review</Button>
            <Button onClick={() => setIsEdit(true)} size='tiny' inverted color='blue' floated='right' >Edit Review</Button>
            </Segment>
            </>
            )}
           
                <Divider hidden/>
            </Grid.Column>
    )
}

export default MyReviewedItem