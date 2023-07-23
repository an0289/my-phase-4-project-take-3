import React from 'react'
import { Grid, Image, Item, Icon, Card, Segment } from 'semantic-ui-react'

function MyReviewedItem({ review }) {
    return (
        <Grid.Column stretched>
                <Segment >
                <Image centered src={review.item_image} height={350}/>
                    <Card raised fluid color='green' >
                        <Card.Content>
                            <Card.Header>
                                {review.name}
                            </Card.Header>
                            <Card.Description>{review.title}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Header>{review.body}</Card.Header>
                        </Card.Content>
                    </Card>
                </Segment>
            </Grid.Column>
    )
}

export default MyReviewedItem