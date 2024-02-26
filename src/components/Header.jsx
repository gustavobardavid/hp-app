import '../styles/gallery.css';
import '../styles/card.css';

const Header = () => {
  return (  
    <span className="btn">
        <a
            href="#"
            className='button'
        >
            <svg>
                <rect
                    x="0" y="0" 
                    fill="none"
                    width="100%"
                    height="100%"
                />
            </svg>
            Logo
        </a>            
    </span> 
  );
}

export default Header;