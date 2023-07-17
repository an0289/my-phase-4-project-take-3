import React from 'react'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'

function MyItems() {
    return (
        <Grid columns={3} divided>
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
                </Grid.Column>
            </Grid.Row>
      </Grid>
        )
}

export default MyItems