import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGem from '@fortawesome/fontawesome-free-regular/faGem';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('history');
            }}
          >
            History
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('perks');
            }}
          >
            Perks
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('pics');
            }}
          >
            Pics
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('buy');
            }}
          >
            Buy
          </a>
        </li>
      </ul>
    </nav> */}

    <div className="content">
      <div className="inner">
        <h1 className='site-title'>Live at Union Square</h1>
        <h2>Grand Rapids, MI</h2>
        <p>
          Union Square offers the best downtown living experience in Grand Rapids. Historic building, rooftop pool, and incredible location on the
          west side will make sure you're always happy to be home at Union Square Grand Rapids.
        </p>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
