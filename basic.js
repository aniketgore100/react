// const heading1 = React.createElement(
//     "h1",
//     {
//         id : "title",
//     },
//     "Child 1"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id : "subtitle",
//     },
//     "Child 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id : "container",
//     },
//      [heading1, heading2]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);


const array = ["aniket", "sanket", "kishore"];

// Map the array to create <li> elements for each name
const listItems = array.map((name) =>
  React.createElement("li", { key: name }, name)
);

// Create the <ul> element and include the list items as children
const Un_list = React.createElement(
  "ul",
  {
    id: "list",
  },
  listItems
);

// Create the <div> container and include the <ul> as its child
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  Un_list
);

// Render the container to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
