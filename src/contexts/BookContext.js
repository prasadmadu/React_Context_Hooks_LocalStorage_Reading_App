import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const localData = localStorage.getItem('books');

const BookContextProvider = (props) => {
  const [ books, setBooks ] = useState(
    JSON.parse(localData)
)

  const bid = () => {
    Math.random();
  }

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: {bid} }])
  }

  const removeBook = (id) => {
    setBooks( books.filter( book => book.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;