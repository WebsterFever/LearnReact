// On importe useState depuis React pour gérer les états internes du composant
import { useState } from 'react';

// Déclaration du composant fonctionnel BookList
function BookList() {
  // Déclaration de l'état "books" avec une liste initiale de 3 livres
  // Chaque livre a un id, un titre et un auteur
  const [books, setBooks] = useState([
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin' },
  ]);

  // Déclaration de l'état "title" pour le champ du titre dans le formulaire
  const [title, setTitle] = useState('');

  // Déclaration de l'état "author" pour le champ de l'auteur dans le formulaire
  const [author, setAuthor] = useState('');

  // Fonction appelée lorsque l'utilisateur soumet le formulaire pour ajouter un livre
  const handleAddBook = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

    // Vérifie que les champs ne sont pas vides (trim enlève les espaces)
    if (title.trim() === '' || author.trim() === '') return;

    // Crée un nouveau livre avec un id unique (basé sur le timestamp)
    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    // Ajoute le nouveau livre en haut de la liste (spread des anciens livres)
    setBooks([newBook, ...books]);

    // Réinitialise les champs du formulaire après ajout
    setTitle('');
    setAuthor('');
  };

  // Fonction pour supprimer un livre de la liste à partir de son id
  const removeBook = (id) => {
    // Filtre les livres pour garder seulement ceux qui n'ont pas l'id donné
    setBooks(books.filter((book) => book.id !== id));
  };

  // JSX retourné par le composant
  return (
    <div className="p-6 space-y-6 w-full max-w-md">
      {/* Titre principal */}
      <h1 className="text-2xl font-bold text-center">📚 Book List</h1>

      {/* Formulaire pour ajouter un livre */}
      <form onSubmit={handleAddBook} className="space-y-4 bg-white p-4 rounded shadow">
        {/* Champ texte pour le titre du livre */}
        <input
          type="text"
          placeholder="Book Title"
          className="w-full border px-3 py-2 rounded"
          value={title} // Contrôlé par le state "title"
          onChange={(e) => setTitle(e.target.value)} // Met à jour le state "title"
        />

        {/* Champ texte pour l'auteur du livre */}
        <input
          type="text"
          placeholder="Author"
          className="w-full border px-3 py-2 rounded"
          value={author} // Contrôlé par le state "author"
          onChange={(e) => setAuthor(e.target.value)} // Met à jour le state "author"
        />

        {/* Bouton pour ajouter le livre */}
        <button
          type="submit"
          className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition"
        >
          ➕ Add Book
        </button>
      </form>

      {/* Affichage de la liste des livres */}
      {books.length === 0 ? (
        // Message si la liste est vide
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        // Sinon, on affiche chaque livre dans une carte
        books.map((book) => (
          <div
            key={book.id} // Clé unique requise par React
            className="bg-white shadow-md rounded p-4 flex justify-between items-center"
          >
            {/* Détails du livre */}
            <div>
              <p className="text-lg font-semibold">📘 {book.title}</p>
              <p className="text-sm text-gray-600">✍️ {book.author}</p>
            </div>

            {/* Bouton pour supprimer le livre */}
            <button
              onClick={() => removeBook(book.id)} // Supprime ce livre
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

// Exporte le composant pour l'utiliser dans App.jsx
export default BookList;



/*import { useState } from 'react';

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

export default BookList;*/
