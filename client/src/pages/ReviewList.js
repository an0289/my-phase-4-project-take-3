import react from "react";
import Review from './Review'
import { Button, Segment, List, Image, Item } from 'semantic-ui-react'

function ReviewList({ reviews, showReviews, setShowReviews }) {
    return (
        <Segment raised>
            <Item.Group >
                {reviews.map((review) => (
                <Review key={review.id} review={review} />
                ))}
            </Item.Group>
            <Button color= 'red' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>Hide Reviews</Button>
        </Segment>
    )
    }       

export default ReviewList 