import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);
  
  

  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold text-purple-600">Count: {count}</h2>
      <div className="space-x-4">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          ➕ Increment
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
