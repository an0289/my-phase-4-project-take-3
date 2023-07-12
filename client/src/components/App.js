import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../pages/Login'
import ItemList from '../pages/ItemList'
import NewReview from '../pages/NewReview'

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
        </Routes>
      </main>
   </>
  );
}

export default App;
