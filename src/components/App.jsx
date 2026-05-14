import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  // GET request
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST request
  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  // DELETE request
  function handleDelete(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  // PATCH request
  function handleUpdate(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );

    setToys(updatedToys);
  }

  return (
    <div>
      <ToyForm onAddToy={addToy} />

      <ToyContainer
        toys={toys}
        onDeleteToy={handleDelete}
        onUpdateToy={handleUpdate}
      />
    </div>
  );
}

export default App;