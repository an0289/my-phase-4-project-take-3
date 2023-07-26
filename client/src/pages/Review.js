import React, { useState } from 'react'
import { Button, Segment, List, Image, Item, Divider } from 'semantic-ui-react'

function Review({ review }) {

    return (
    <Segment>
        <List.Item>
                <Image avatar src={review.image_url}/>
                <List.Content>
                    <List.Header as='a'>{review.username}</List.Header>
                    <List.Header>{review.title}</List.Header>
                    <List.Description>{review.body}</List.Description>
                </List.Content>
        </List.Item>
        </Segment>
    )
}

export default Review 