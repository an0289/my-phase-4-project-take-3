import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItemList from '../pages/MyReviewedItemList'
import NewItem from '../pages/NewItem'
import { Segment, Header, Divider, Image, Container, Button } from 'semantic-ui-react'
import Background from '../assets/purple_wind_waker_bg.png'

function App() {
  const {user} = useContext(UserContext)
  
  if (!user) return <Login />
  
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
    <NavBar />
    </Container>
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem />}
          />
          <Route path="/"
            element={<ItemList />}
          />
          <Route path='/my_reviewed_items'
            element={<MyReviewedItemList />}
          />
        </Routes>
      </main>
   </>
  );
}

export default App;
