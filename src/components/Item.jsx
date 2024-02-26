import { Link } from 'react-router-dom';
import '../App.css'
import PropTypes from 'prop-types';

const item = ({ items }) => {
    if (!items || !items.length) {
        return <div>Nenhum livro disponível.</div>;
      }
    
  return (
    <>
        <section className="section-container">
            <div className="section-content">
                <div className="card-container">
            {items.map((item) => (
                    <div className="card-section" key={item.id}>
                        <div className="card-content">
                            <h2 className="card-title">{item.attributes.title}</h2>
                            <img src={item.attributes.cover} alt={item.attributes.title} />
                        </div>
                        <Link className="nav-link" to={`/detalhesLivro/${item.id}`}>Ver mais</Link>
                    </div>
            ))}
        </div>
        </div>
        </section>
    </>
  );
}
item.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default item;
