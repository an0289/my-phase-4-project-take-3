import React from 'react'
import { Grid, Image, Item, Icon, Card, Divider } from 'semantic-ui-react'


function ItemList({ items, setItems }) {
    return (
    <Grid columns={3} divided>
        <Grid.Row>
            {items.map((item => (
                <Grid.Column>
                <Card key={item.id}>
                    <img src={item.image_url} height={230} />

                    <Card.Content>
                        <Card.Header >{item.name}</Card.Header>
                        <Card.Description>{item.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Image size='tiny' src='../images/rupee.png'/>
                            {item.price}
                        </a>
                    </Card.Content>
                </Card>
                <Divider />
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