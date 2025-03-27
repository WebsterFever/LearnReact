import Greeting from "./Greeting";
import Counter from "./Counter";
import LoginPanel from "./LoginPanel";
export default function App() {
  const name = "Alice";
  return (
    <>
      <Greeting firstName="Jean" lastName="Marc" />
      <Greeting firstName="Bob" lastName="Riviere" />
      <Counter />
      <h1>Hello, {name}</h1>
      <h1>Webster</h1>
      <p>Teacher</p>
      <LoginPanel />
    </>
  );
}
