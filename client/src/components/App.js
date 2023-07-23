import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItemList from '../pages/MyReviewedItemList'
import NewItem from '../pages/NewItem'
import NewRevew from '../pages/NewReview'
import { Header, Divider, Image, Container } from 'semantic-ui-react'
import Background from '../assets/whale_wind_waker_bg.jpg'

function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
   <>
   <Container fluid>
   <Divider hidden />
   <Header style={{ fontFamily: 'Papyrus' }} textAlign='right' size='huge'>
    Zelda Item Shop
    <Image src='../images/rupee.png' size='massive' centered/> 
    </Header>
   <Divider hidden />
    <NavBar user={user} setUser={setUser}/>
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
            element={<MyReviewedItemList user={user}/>}
          />
        </Routes>
      </main>
   </>
  );
}

export default App;
