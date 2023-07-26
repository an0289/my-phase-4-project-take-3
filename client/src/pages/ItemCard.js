import React, { useState } from 'react'
import ReviewList from './ReviewList'
import { Container, Grid, Image, Item, Icon, Card, Divider, Segment, Button } from 'semantic-ui-react'


function ItemCard({ item, id, onAddReview, onDeleteItem }) {
    const [showReviews, setShowReviews] = useState(false)
    const [isLike, setIsLike] = useState(false)

    // function handleDeleteClick() {
    //     fetch(`/items/${id}`, {
    //         method: "DELETE"
    //     }).then((r) => {
    //         if (r.ok) {
    //             onDeleteItem(id)
    //         }
    //     })
    //     }

    return (
        <Grid.Column stretched>
                <Segment >
                <Image centered src={item.image_url} height={350}/>
                    <Card raised fluid color='violet' >
                        <Card.Content>
                            <Card.Header>
                                {item.name}
                                {isLike ? (
                                <Button onClick={() => setIsLike((isLike) => !isLike)} circular  color='red' icon floated='right'>
                                    <Icon  name='like' />
                                </Button>
                                ) : (
                                <Button onClick={() => setIsLike((isLike) => !isLike)} circular color='black' icon floated='right'>
                                    <Icon  name='like' />
                                </Button>
                                )}
                                
                            </Card.Header>
                            <Card.Description>{item.description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Header>
                            <img height={30} src='../images/rupee.png'/>
                            {item.price}
                            {showReviews ? (
                            <ReviewList onAddReview={onAddReview} showReviews={showReviews} setShowReviews={setShowReviews} itemId={id} reviews={item.reviews} />
                            ) : (
                            <>
                            <Button inverted color= 'violet' floated='right' onClick={() => setShowReviews((showReviews) => !showReviews)}>See Reviews</Button>
                            {/* <Button onClick={handleDeleteClick} color='red' floated='right'>Delete Item</Button> */}
                            </>
                             )}
                            
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Segment>
                <Divider />
            </Grid.Column>
    )
}

export default ItemCard 