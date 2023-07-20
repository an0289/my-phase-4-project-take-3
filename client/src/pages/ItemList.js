import React, { useState } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ items, setItems }) {
    
    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
            <ItemCard key={item.id} item={item}/>
            )))}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 

