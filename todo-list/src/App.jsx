import ListContainer from "./container/ListContainer";

function App() {
  const mockData = [
    {
      id: 1,
      text: "sadf asdf asdf asdf asdf",
    },
    {
      id: 2,
      text: "sadf asdf asdf asdf asdf",
    },
  ];
  return <ListContainer todos={mockData} />;
}

export default App;
