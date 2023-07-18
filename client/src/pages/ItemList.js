import React from 'react'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'

function ItemList({ items, setItems }) {
    return (
    <Grid columns={3} divided>
        <Grid.Row>
            {items.map((item => (
                <Grid.Column>
                <Item>
                    <Item.Image size='small' src={item.image_url} />

                    <Item.Content>
                        <Item.Header as='a'>{item.name}</Item.Header>
                        <Item.Description>{item.description}</Item.Description>
                        <Item.Extra>{item.price}</Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            )))}
            
            {/* <Grid.Column>
                <Item>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Cute Dog</Item.Header>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Icon color='green' name='check' /> 121 Votes
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            <Grid.Column>
                <Item>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Cute Dog</Item.Header>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Icon color='green' name='check' /> 121 Votes
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <Item>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Cute Dog</Item.Header>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Icon color='green' name='check' /> 121 Votes
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            <Grid.Column>
                <Item>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Cute Dog</Item.Header>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Icon color='green' name='check' /> 121 Votes
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            <Grid.Column>
                <Item>
                    <Item.Image size='small' src='/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>Cute Dog</Item.Header>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Icon color='green' name='check' /> 121 Votes
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column> */}
        </Grid.Row>
  </Grid>
    )
}

export default ItemList 