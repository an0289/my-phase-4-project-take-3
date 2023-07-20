import react from "react";
import { Button, Segment, List, Image } from 'semantic-ui-react'

function ReviewList({ reviews, showReviews, setShowReviews }) {
    return (
        <Segment raised>
            <List divided relaxed>
                {reviews.map((review) => (
                <List.Item>
                <Image avatar/>
                <List.Content>
                    <List.Header as='a'>Username</List.Header>
                    <List.Description>{review.title}</List.Description>
                    <List.Description>{review.body}</List.Description>
                </List.Content>
            </List.Item>
                ))}
            </List>
            <Button color= 'red' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>Hide Reviews</Button>
        </Segment>
    )
    }       

export default ReviewList 