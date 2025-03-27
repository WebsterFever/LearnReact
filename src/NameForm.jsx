import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Hello, ${name}!`);
    setName('')
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NameForm;
