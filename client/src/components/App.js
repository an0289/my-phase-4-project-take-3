import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyItems from '../pages/MyItems'
import NewReview from '../pages/NewReview'
import { Menu } from 'semantic-ui-react'

function App() {
  return (
   <>
    <NavBar />
      <main>
        <Routes>
          <Route path="/new"
            element={<NewReview />}
          />
          <Route path="/"
            element={<ItemList />}
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
