import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItemList from '../pages/MyReviewedItemList'
import NewItem from '../pages/NewItem'
import NewRevew from '../pages/NewReview'
import { Header, Divider, Image, Container, Button } from 'semantic-ui-react'
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


  function handleUpdateReview(updatedReview) {
    const updatedUserReviews = user
    if(user.id === updatedReview.user_id) {
      const updatedUserReviews = user.reviews.map((review) => review.id === updatedReview.id ? updatedReview : user)
      user.reviews = updatedUserReviews
    }
      return user
      setUser(updatedUserReviews)
  }

  function handleDeleteReview(review) {
    const updatedUserReviews = user 
    if(user.id === review.user_id) {
      const updatedUserReviews = user.reviews.filter((review) => review.id !== review.id)
      user.reviews = updatedUserReviews 
    }
      return user 
      setUser(updatedUserReviews)
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem])
  }

  return (
   <>
   <Container fluid>
   <Divider hidden />
   <Header style={{ fontFamily: 'Papyrus' }} textAlign='right' size='huge'>
    Zelda Item Shop
    <Image src='../images/rupee.png' size='massive' centered/> 
    </Header>
    <Header as='h3' style={{ fontFamily: 'Papyrus', paddingRight:30 }} textAlign='right'>
    <Image circular src={user.image_url} bordered />
    {user.username}
    </Header>
   <Divider hidden />
    <NavBar user={user} setUser={setUser}/>
    </Container>
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem onAddItem={handleAddItem} setItems={setItems}/>}
          />
          <Route path="/"
            element={<ItemList items={items} setItems={setItems}/>}
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
