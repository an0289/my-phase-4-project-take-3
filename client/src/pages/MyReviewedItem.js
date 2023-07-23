import React from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header } from 'semantic-ui-react'

function MyReviewedItem({ review }) {
    return (
        <Grid.Column stretched>
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
                </Segment>
                <Divider hidden/>
            </Grid.Column>
    )
}

export default MyReviewedItem