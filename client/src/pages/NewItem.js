import React from 'react'
import { Button, Form, Segment, Divider } from 'semantic-ui-react'

function NewItem() {
    return (
    <>
    <Divider hidden />
    <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Segment>
    </>
    )
}

export default NewItem