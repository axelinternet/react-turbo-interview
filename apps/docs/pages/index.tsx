export default function Docs() {
  return (
    <div className="row site">
      <link
        rel="stylesheet"
        href="https://unpkg.com/papercss@1.9.1/dist/paper.min.css"
      />
      <div className="paper container container-lg">
        <h1>React interview</h1>
        <p>Start with:</p>
        <ul>
          <li>Display items from todo object in the DOM</li>
        </ul>
        <h2>Exampes of features to add:</h2>
        <p>
          Pick a couple you think would be interesting to solve. They do not be{" "}
        </p>
        <ul>
          <li>[ ] Reverse items when pressing Reverse button</li>
          <li>[ ] Mark tasks as done</li>
          <li>[ ] Pin items on top of list when pressing pin</li>
          <li>[ ] Enable editing of Todo item</li>
          <li>[ ] Add another button in todo item to open more details</li>
          <li>
            [ ] Serve items from backend instead and load into React. There is
            no database, you can create a object on the backend and serve as
            json.
          </li>
          <li>
            [ ] Update the style in anyway you like. https://picocss.com/ is
            avaiable from _app.js but you can scrap that and start from scratch
            or update using inline styles for example
          </li>
          <li>
            [ ] Add subsections in the todo list. Split tasks into hard, medium
            and easy.
          </li>
          <li>
            [ ] Add a majestic cover photo over the todo list
            (https://unsplash.com/photos/uqEkjnLGW9Y)
          </li>
          <li>
            [ ] Add a unit test to a backend function. You do not need to add a
            framework for this, use vanilla functions instead
          </li>
          <li>
            Add create, update and delete todo-items funcionality to the
            backend. They can be in the same endpoint.
          </li>
          <li>
            [ ] Filter available todos in the backend based on a query paramer
          </li>
        </ul>
      </div>
    </div>
  );
}
