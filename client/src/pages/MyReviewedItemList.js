import React from 'react'
import MyReviewedItem from './MyReviewedItem'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'

function MyReviewedItemList({ user }) {
    return (
        <Grid columns={3} divided>
        <Grid.Row >
            {user.reviews.map((review => (
            <MyReviewedItem key={review.id} review={review}/> 
            )))}
        </Grid.Row>
  </Grid>
        )
}

export default MyReviewedItemList