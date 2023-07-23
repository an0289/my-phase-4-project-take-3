import React, { useState } from 'react'
import { Button, Segment, List, Image, Item, Divider } from 'semantic-ui-react'

function Review({ review }) {

    return (
        <Item>
                <Item.Image size='tiny' src={review.image_url}/>
                <Item.Content>
                    <Item.Header>{review.username}</Item.Header>
                    <Item.Meta>
                        <span>{review.title}</span>
                    </Item.Meta>
                    <Item.Description>{review.body}</Item.Description>
                </Item.Content>
                <Divider />
        </Item>
    )
}

export default Review 