import PropTypes from 'prop-types';

const Logos = ({ logosData }) => {
  return (
    <>
      <div className="logos">
        <div className="logos-container">
          <div className="logos-wrapper">
            {logosData.map((logo, index) => (
              <div key={index} className="logo">
                <img style={{ width: logo.width }} src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
Logos.propTypes = {
    logosData: PropTypes.string.isRequired
  };
export default Logos;
