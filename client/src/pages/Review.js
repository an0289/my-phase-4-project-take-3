import React, { useState } from 'react'
import { Button, Segment, List, Image } from 'semantic-ui-react'

function Review({review}) {
    return (
        <List.Item>
                <Image avatar/>
                <List.Content>
                    <List.Header as='a'>Username</List.Header>
                    <List.Description>{review.title}</List.Description>
                    <List.Description>{review.body}</List.Description>
                </List.Content>
        </List.Item>
    )
}

export default Review 