import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGem from '@fortawesome/fontawesome-free-regular/faGem';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faGem} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Live at Union Square</h1>
        <h2>Grand Rapids, MI</h2>
        <p>
          Union Square offers the best downtown living experience in Grand Rapids. Historic building, rooftop pool, and incredible location on the
          west side will make sure you're always happy to be home at Union Square Grand Rapids.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro');
            }}
          >
            Why Union Square
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work');
            }}
          >
            Amenities
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Send Message
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
