import React from "react";
import ReactDOM from "react-dom/client";
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
    React.createElement("h1", {}, "I am h1 child1🧨"),
    React.createElement("h2", {}, "I am h2 child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 child2"),
    React.createElement("h2", {}, "I am h2 child2"),
  ]),
]);

console.log(heading);
const jsxHeading = <h1 style={{ color: "tomato" }}>Jsx Heading</h1>;

const Title = () => <h1>Title🚀</h1>;
const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <h1>Heading Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

export default heading;
