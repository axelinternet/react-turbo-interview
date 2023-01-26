import Todos from "ui/Todos";
import { Button } from "ui";

export default function Web() {
  const todos = [
    {
      id: 1,
      heading: "Ipsum",
      body: "Buy sausage",
    },
    {
      id: 2,
      heading: "Lorem",
      body: "Buy more sausage",
    },
  ];

  return (
    <main className="container">
      <section>
        <h1>Web</h1>
        <Todos />
        <Button />
      </section>
    </main>
  );
}
