import react from "react";
import Review from './Review'
import { Button, Segment, List, Image, Item, Divider } from 'semantic-ui-react'

function ReviewList({ reviews, showReviews, setShowReviews }) {
    return (
        <Segment raised>
            <List divided relaxed >
                {reviews.map((review) => (
                <Review key={review.id} review={review} />
                ))}
            </List>
            <Button color= 'red' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>Hide Reviews</Button>
        </Segment>
    )
    }       

export default ReviewList 