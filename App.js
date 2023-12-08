{
  /* <div id="parent">
  <div id="child1">
    <h1>I am h1 child1</h1>
    <h2>I am h2 child1</h2>
  </div>
  <div id="child2">
    <h1>I am h1 child2</h1>
    <h2>I am h2 child2</h2>
  </div>
</div>; */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 child1"),
    React.createElement("h2", {}, "I am h2 child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 child2"),
    React.createElement("h2", {}, "I am h2 child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
