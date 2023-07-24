import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ items, setItems, onDeleteItem }) {
    

  function handleAddReview(newReview) {
    const updatedItems = items.map((item) => {
      if(item.id === newReview.item_id) {
        const updatedItemReviews = [...item.reviews, newReview]
        item.reviews = updatedItemReviews 
      }
        return item 
    })
    setItems(updatedItems)
  }

    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
            <ItemCard key={item.id} id={item.id} item={item} onAddReview={handleAddReview} onDeleteItem={onDeleteItem} /> 
            )))}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 

