import React from 'react'
import { Grid, Image, Item } from 'semantic-ui-react'

function ItemList() {
    return (
    <Grid columns={3} divided>
        <Grid.Row>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 