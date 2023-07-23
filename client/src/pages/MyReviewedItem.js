import React from 'react'
import { Grid, Image, Item, Icon, Card, Segment } from 'semantic-ui-react'

function MyReviewedItem({ item, review }) {
    return (
        <Grid.Column stretched>
                <Segment >
                <Image centered src={item.image_url} height={350}/>
                    <Card raised fluid color='green' >
                        <Card.Content>
                            <Card.Header>
                                {item.name}
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