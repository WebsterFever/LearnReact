import { useState } from 'react';

function LoginPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl">
        {isLoggedIn ? 'Welcome, User! 🎉' : 'Please log in.'}
      </h2>
      <button
        onClick={toggleLogin}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default LoginPanel;
