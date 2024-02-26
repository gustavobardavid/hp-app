import { Link } from 'react-router-dom';

const Navbar = () => {
    return (    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Biboca Diagonal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/livros">Livros</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Filmes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Personagens</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Procurar</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;