import { useState } from 'react';
import './AddBookForm.css';

function AddBookForm({ onAdd }) {
  // Controlled input states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !description.trim()) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      description,
    };

    onAdd(newBook); // Call the parent function
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">➕ Add Book</button>
    </form>
  );
}

export default AddBookForm;
