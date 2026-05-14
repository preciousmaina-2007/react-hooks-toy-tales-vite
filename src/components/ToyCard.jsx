function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

  // DELETE request: remove toy from backend and update app state
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(id));
  }

  // PATCH request: increment likes on the backend and update state
  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  return (
    <div className="card" data-testid="toy-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{likes} Likes </p>

      <button onClick={handleLike}>Like &lt;3</button>

      <button onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
