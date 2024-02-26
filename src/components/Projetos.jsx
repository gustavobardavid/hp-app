import PropTypes from 'prop-types';

const Projetos = ({ tipo, imagens, tamanho }) => {
  return (
    <div>
      <h2>Meus Projetos {tipo}</h2>
      <div className="portfolio-grid">
        {imagens.map((imagem, index) => (
          <div key={index} className="portfolio-item">
        <img src= {imagem.src} 
        alt={imagem.alt} 
        style={{ width: tamanho }} />
            <h3>{imagem.tipo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
Projetos.propTypes = {
    tipo: PropTypes.string.isRequired,
    imagens: PropTypes.string.isRequired,
    tamanho: PropTypes.string.isRequired
  };
export default Projetos;
