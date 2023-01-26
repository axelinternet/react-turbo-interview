const Todos = () => {
  const value = false;
  return (
    <fieldset>
      <label htmlFor="a">
        <input
          type="checkbox"
          id="a"
          name="a"
          onChange={(e) => console.log(e, "log")}
          checked={value}
        />
        {"Todo 1"}
      </label>
      <label htmlFor="b">
        <input
          type="checkbox"
          id="b"
          name="b"
          onChange={(e) => console.log(e, "log")}
          checked={value}
        />
        {"Todo 2"}
      </label>
    </fieldset>
  );
};
export default Todos;
