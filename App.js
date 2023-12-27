import ReactDom from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
ReactDOM.render(<App />, document.getElementById("root"));
