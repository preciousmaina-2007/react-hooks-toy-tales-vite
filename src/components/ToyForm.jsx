import { useState } from "react";

function ToyForm({ onAddToy }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", image: "" });

  function handleToggleForm() {
    setShowForm((show) => !show);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: 0,
    };

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((createdToy) => {
        onAddToy(createdToy);
        setFormData({ name: "", image: "" });
      });
  }

  return (
    <div className="toy-form-wrapper">
      <button onClick={handleToggleForm}>Add a Toy</button>

      {showForm ? (
        <form className="container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            value={formData.image}
            onChange={handleChange}
          />
          <button type="submit">Create New Toy</button>
        </form>
      ) : null}
    </div>
  );
}

export default ToyForm;
