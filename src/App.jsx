import { useState } from 'react';
import Header from './components/Header';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([book, ...books]);
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <Header />
      <AddBookForm onAdd={handleAddBook} />
      <BookList books={books} onRemove={handleRemoveBook} />
      <Footer />
    </div>
  );
}

export default App;
