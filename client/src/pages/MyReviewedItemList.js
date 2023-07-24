import React, { useState } from 'react'
import MyReviewedItem from './MyReviewedItem'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'

function MyReviewedItemList({ user, onUpdateReview, onDeleteReview }) {

    return (
        <Grid columns={3} divided>
        <Grid.Row >
            {user.reviews.map((review => (
            <MyReviewedItem onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} key={review.id} id={review.id} review={review} /> 
            )))}
        </Grid.Row>
  </Grid>
        )
}

export default MyReviewedItemList