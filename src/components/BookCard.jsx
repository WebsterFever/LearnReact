import './BookCard.css';

function BookCard({ book, onRemove }) {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p className="description">{book.description}</p>
      </div>
      <button onClick={() => onRemove(book.id)}>🗑 Remove</button>
    </div>
  );
}

export default BookCard;
