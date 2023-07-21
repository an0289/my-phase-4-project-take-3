import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyReviewedItems from '../pages/MyReviewedItems'
import NewItem from '../pages/NewItem'
import NewRevew from '../pages/NewReview'
import { Header, Divider } from 'semantic-ui-react'

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
   <Divider hidden />
   <Header textAlign='right' size='huge'>Zelda Item Shop</Header>
   <Divider hidden />
    <NavBar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem />}
          />
          <Route path="/"
            element={<ItemList />}
          />
          <Route path='/my_reviewed_items'
            element={<MyReviewedItems />}
          />
        </Routes>
      </main>
   </>
  );
}

export default App;
