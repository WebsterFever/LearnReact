import BookCard from './BookCard';
import './BookList.css';

function BookList({ books, onRemove }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p className="empty">No books added yet.</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} onRemove={onRemove} />
        ))
      )}
    </div>
  );
}

export default BookList;
