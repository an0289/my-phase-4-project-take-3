import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items").then((r) => {
          if (r.ok) {
            r.json().then((items) => setItems(items))
          }
        })
      }, [])

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

