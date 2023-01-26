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
        <h2>Exampes of tasks:</h2>
        <ul>
          <li>[ ] Shuffle items when pressing shuffle button</li>
          <li>[ ] Add marking tasks as done</li>
          <li>[ ] Pin items on top of list when pressing pin</li>
          <li>[ ] Enable editing of Todo item</li>
          <li>[ ] Add another button in todo item to open more details</li>
          <li>
            [ ] Load items from backend. The backend can just load the JSON
          </li>
          <li>
            [ ] Update the style in anyway you like. https://picocss.com/ is
            avaiable from _app.js but you can scrap that and start from scratch
            or update using inline styles for example
          </li>
          <li>[ ] Add Subsections based on some criteria</li>
          <li>
            [ ] Add majestic cover photo
            (https://unsplash.com/photos/uqEkjnLGW9Y)
          </li>
          <li>
            [ ] Add a unit test to a backend function. You do not need to add a
            framework for this, use vanilla functions instead
          </li>
          <li>
            [ ] Filter available todos in the backend based on a query paramer
          </li>
        </ul>
      </div>
    </div>
  );
}
