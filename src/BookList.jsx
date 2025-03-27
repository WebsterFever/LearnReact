import { useState } from 'react';

function BookList() {
  // Liste initiale des livres
  const [books, setBooks] = useState([
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin' },
  ]);

  // Supprimer un livre selon son id
  const removeBook = (id) => {
    const filtered = books.filter((book) => book.id !== id);
    setBooks(filtered);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">📚 Book List</h1>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">📘 {book.title}</p>
              <p className="text-sm text-gray-600">✍️ {book.author}</p>
            </div>

            <button
              onClick={() => removeBook(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
