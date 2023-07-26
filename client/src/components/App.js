import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItemList from '../pages/MyReviewedItemList'
import NewItem from '../pages/NewItem'
import { Segment, Header, Divider, Image, Container, Button } from 'semantic-ui-react'
import Background from '../assets/purple_wind_waker_bg.png'

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

  function handleAddReview(newReview) {
    const updatedUserReviews = [...user.reviews, newReview]
    const updatedUser = {...user, reviews: updatedUserReviews}
    setUser(updatedUser)

    const updatedItems = items.map((item) => {
      if(item.id === newReview.item_id) {
        const updatedItemReviews = [...item.reviews, newReview]
        const newItem = {...item, reviews: updatedItemReviews}
        return newItem 
      }
        return item 
    })
    setItems(updatedItems)
  }
  
  function handleUpdateReview(updatedReview) {
      const updatedUserReviews = user.reviews.map((review) => review.id === updatedReview.id ? updatedReview : review)
      const updatedUser = { ...user, reviews: updatedUserReviews}
      setUser(updatedUser)

      const updatedItems = items.map((item) => {
        if(item.id === updatedReview.item_id) {
          const updatedItemReviews = item.reviews.map((review) => review.id === updatedReview.id ? updatedReview : item)
          const newItem = {...item, reviews: updatedItemReviews}
          return newItem 
        }
          return item 
      })
      setItems(updatedItems)
  }

  function handleDeleteReview(deletedReview) {
      const updatedUserReviews = user.reviews.filter((rev) => rev.id !== deletedReview.id)
      const updatedUser = {...user, reviews: updatedUserReviews} 
      setUser(updatedUser)
      
       
      const updatedItems = items.map((item) => {
        if(item.id === deletedReview.item_id) {
          const updatedReviews = item.reviews.filter((rev) => rev.id !== deletedReview.id)
          const newItem = {...item, reviews: updatedReviews}
          return newItem

        }
          return item 
      })
      setItems(updatedItems)

      
  }


  return (
   <>
   <Container fluid style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
   <Header style={{ fontFamily: 'Papyrus', color:'white', paddingLeft:15 }} textAlign='left' size='huge'>
    Zelda Item Shop
    <Image src='../images/rupee.png' size='massive' centered/> 
    </Header>
    <Divider hidden />
    <Header as='h3' style={{ fontFamily: 'Papyrus', color:'white' }} textAlign='right'>
    Welcome, {user.username}
    <Image circular src={user.image_url} bordered />
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
            element={<ItemList items={items} setItems={setItems} onAddReview={handleAddReview} onDeleteItem={handleDeleteItem}/>}
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
