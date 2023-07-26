import React, { useState, useContext } from 'react'
import MyReviewedItem from './MyReviewedItem'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function MyReviewedItemList() {
    const {user} = useContext(UserContext)

    return (
        <Grid columns={3} divided>
        <Grid.Row >
            {user.reviews.map((review => (
            <MyReviewedItem originalTitle={review.title} originalBody={review.body} key={review.id} id={review.id} review={review} /> 
            )))}
        </Grid.Row>
  </Grid>
        )
}

export default MyReviewedItemList