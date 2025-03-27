function FruitList() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
  const fruity = "orange";

  return (
    <div className="text-center">
      <h2>{fruity}</h2>
      <ul className="list-disc pl-6 text-lg">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
