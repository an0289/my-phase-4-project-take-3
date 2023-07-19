import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyItems from '../pages/MyItems'
import NewItem from '../pages/NewItem'
import NewRevew from '../pages/NewReview'
import { Header } from 'semantic-ui-react'

function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/items").then((r) => {
      if (r.ok) {
        r.json().then((items) => setItems(items))
      }
    })
  }, [])

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user))
  //     }
  //   })
  // }, [])

  // if (!user) return <Login />

  return (
   <>
   <Header textAlign='right' size='huge'>Zelda Item Shop</Header>
    <NavBar />
    <img src='./images/spoils_bag.png' />
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem />}
          />
          <Route path="/"
            element={<ItemList items={items} setItems={setItems}/>}
          />
          <Route path='/my_items'
            element={<MyItems />}
          />
        </Routes>
      </main>
   </>
  );
}

export default App;
