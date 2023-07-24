import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ items, setItems }) {
    

    function handleAddReview(review) {
      const updatedItems = items.map((item) => {
        if(item.id === review.item_id) {
          const newReviews = [...item.reviews, review]
          item.reviews = newReviews
        }
          return item
      })
      setItems(updatedItems)
    }

    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
            <ItemCard key={item.id} item={item} onAddReview={handleAddReview} /> 
            )))}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 

