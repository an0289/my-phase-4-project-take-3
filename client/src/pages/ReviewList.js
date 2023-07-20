import react from "react";
import Review from './Review'
import { Button, Segment, List, Image } from 'semantic-ui-react'

function ReviewList({ reviews, showReviews, setShowReviews }) {
    return (
        <Segment raised>
            <List divided relaxed>
                {reviews.map((review) => (
                <Review key={review.id} review={review} user={review.user}/>
                ))}
            </List>
            <Button color= 'red' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>Hide Reviews</Button>
        </Segment>
    )
    }       

export default ReviewList 