const Card = ({ character }) => {
  return (
    <div className="card mb-3">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.house}</p>
        <p className="card-text">{character.role}</p>
        <p className="card-text">{character.description}</p>
      </div>
    </div>
  );
}

export default Card;
