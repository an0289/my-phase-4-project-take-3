import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ items, setItems, onDeleteItem, onAddReview }) {

    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
            <ItemCard key={item.id} id={item.id} item={item} onAddReview={onAddReview} onDeleteItem={onDeleteItem} /> 
            )))}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 

