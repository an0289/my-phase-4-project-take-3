import react, { useState } from "react";
import Review from './Review'
import NewReview from './NewReview'
import { Button, Segment, List, Image, Item, Divider } from 'semantic-ui-react'

function ReviewList({ reviews, showReviews, setShowReviews, onAddReview }) {
    const [isAdd, setIsAdd] = useState(false)

    return (
        <>
        {isAdd ? ( <NewReview onAddReview={onAddReview} setIsAdd={setIsAdd}/>
        ) : (
        <Segment raised>
        <List divided relaxed >
            {reviews.map((review) => (
            <Review key={review.id} review={review} />
            ))}
        </List>
        <Button color= 'orange' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>Hide Reviews</Button>
        <Button onClick={() => setIsAdd(true)}color= 'blue' floated='left'>Add Review</Button>
        </Segment>
        )}
        </>
        
    )
    }       

export default ReviewList 