import React, { useState } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input } from 'semantic-ui-react'

function MyReviewedItem({ review }) {

    const [isEdit, setIsEdit] = useState(false)
    return (
        <Grid.Column stretched>
            {isEdit ? (
             <>
             <Segment color='violet'>
             <Item.Group>
                 <Item>
                 <Header as='h4'>{review.name}</Header>
                     <Item.Image size='tiny' src={review.item_image} />
                     <Form>
                         <Form.Field
                         control={Input} 
                         label='Review Title'
                         placeholder='Title'
                         />
                         <Form.Field 
                         control={TextArea} 
                         label='Review Body'
                         placeholder='Body'
                         />
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