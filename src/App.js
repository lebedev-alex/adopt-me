const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, 
  [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me"),
      React.createElement(Pet, { name: 'Carrie', animal: 'Dog', breed: 'Labrador'}),
      React.createElement(Pet, { name: 'Chirik', animal: 'Cat', breed: 'Stray'}),
      React.createElement(Pet, { name: 'Viva', animal: 'Dog', breed: 'Cane Corso'})
    ]
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);