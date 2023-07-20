import React from 'react'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemList({ items, setItems }) {
    return (
    <Grid columns={3} divided>
        <Grid.Row >
            {items.map((item => (
                <Grid.Column stretched key={item.id}>
                <Segment >
                <Image centered src={item.image_url} height={350}/>
                    <Card raised fluid color='green' >
                        <Card.Content>
                            <Card.Header>
                                {item.name}
                                <Button circular color='red' icon floated='right'>
                                    <Icon  name='like' />
                                </Button>
                            </Card.Header>
                            <Card.Description>{item.description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Header>
                            <img height={25} src='../images/rupee.png'/>
                            {item.price}
                            <Button color= 'teal' floated='right'>See Reviews</Button>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Segment>
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