import React from 'react'
import { Button, Segment, List, Image, Item, Divider, Form, Input, TextArea } from 'semantic-ui-react'

function NewReview({ setIsAdd }) {
    return (
        <List.Item>
                <List.Content>
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
                </List.Content>
            <Button size='tiny' color='red' onClick={() => setIsAdd(false)}>Cancel</Button>
        </List.Item>
    )
}

export default NewReview 