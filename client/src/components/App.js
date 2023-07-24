import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItemList from '../pages/MyReviewedItemList'
import NewItem from '../pages/NewItem'
import { Segment, Header, Divider, Image, Container, Button } from 'semantic-ui-react'
import Background from '../assets/whale_wind_waker_bg.jpg'

function App() {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/items").then((r) => {
      if (r.ok) {
        r.json().then((items) => setItems(items))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />

  function handleAddItem(newItem) {
    setItems([...items, newItem])
  }

  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }
  
  function handleUpdateReview(updatedReview) {
      const updatedUserReviews = user.reviews.map((review) => review.id === updatedReview.id ? updatedReview : review)
      const updatedUser = { ...user, reviews: updatedUserReviews}
      setUser(updatedUser)

      const updatedItems = items.map((item) => {
        if(item.id === updatedReview.item_id) {
          const updatedItemReviews = item.reviews.map((review) => review.id === updatedReview.id ? updatedReview : item)
          item.reviews = updatedItemReviews 
        }
          return item 
      })
      setItems(updatedItems)
  }

  function handleDeleteReview(review) {
      const updatedUserReviews = user.reviews.filter((review) => review.id !== review.id)
      const updatedUser = {...user, reviews: updatedUserReviews} 
      setUser(updatedUser)

      const updatedItems = items.map((item) => {
        if(item.id === review.item_id) {
          const updatedItemReviews = item.reviews.filter((review) => review.id !== review.id)
          item.reviews = updatedItemReviews
        }
          return item
      })
      setItems(updatedItems)
  }


  return (
   <>
   <Container fluid>
   <Header style={{ fontFamily: 'Papyrus' }} textAlign='right' size='huge'>
    Zelda Item Shop
    <Image src='../images/rupee.png' size='massive' centered/> 
    </Header>
    <Header as='h3' style={{ fontFamily: 'Papyrus', paddingLeft:15 }} textAlign='right'>
    Welcome, {user.username}
    <Image circular src={user.image_url} bordered />
    </Header>
    <NavBar user={user} setUser={setUser}/>
    </Container>
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem onAddItem={handleAddItem} setItems={setItems}/>}
          />
          <Route path="/"
            element={<ItemList items={items} setItems={setItems} onDeleteItem={handleDeleteItem}/>}
          />
          <Route path='/my_reviewed_items'
            element={<MyReviewedItemList user={user} onUpdateReview={handleUpdateReview} onDeleteReview={handleDeleteReview}/>}
          />
        </Routes>
      </main>
   </>
  );
}

export default App;
