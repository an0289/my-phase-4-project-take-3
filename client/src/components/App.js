import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import MyItems from '../pages/MyItems'
import NewItem from '../pages/NewItem'
import { Header } from 'semantic-ui-react'

function App() {
  return (
   <>
   <Header textAlign='right' size='huge'>Zelda Item Shop</Header>
    <NavBar />
      <main>
        <Routes>
          <Route path="/new"
            element={<NewItem />}
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
