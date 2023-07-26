import React, { useState, useEffect, createContext } from "react";

// create the context
const ItemContext = createContext();

// create a provider component
function ItemProvider({ children }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items").then((r) => {
          if (r.ok) {
            r.json().then((items) => setItems(items))
          }
        })
      }, [])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <ItemContext.Provider value={{ items, setItems }}>{children}</ItemContext.Provider>;
}

export { ItemContext, ItemProvider };