import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'
import { ItemContext } from '../contexts/ItemContext'

function ItemList() {
  const {items} = useContext(ItemContext)

    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
            <ItemCard key={item.id} id={item.id} item={item} /> 
            )))}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 

