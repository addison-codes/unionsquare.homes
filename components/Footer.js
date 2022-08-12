import PropTypes from 'prop-types';
import Image from 'next/image';

import nick from '../public/Headshot Nick.jpg'
import danielle from '../public/Danielle Headshot.png'


const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
              <a className='contact-button shimmerbutton'
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('buy');
            }}
          >
            Contact Us <i></i>
          </a>
    <h2>Your Union Square Team:</h2>
    <div className="imagebox">
    <a href="javascript:;" onClick={() => { props.onOpenArticle('nick'); }}>
      <div className="bio">
        <Image className='img' src={nick} alt="Nick Headshot" objectFit='contain' />
        <p>Nicholas McAnallen<br />Realtor</p>
      </div>
    </a>
    <a href="javascript:;" onClick={() => { props.onOpenArticle('danielle'); }}>
      <div className="bio">
        <Image className='img' src={danielle} alt="Danielle Headshot" objectFit='contain' />
        <p>Danielle Crilley<br />Lender</p>
      </div>
    </a>
    </div>
    <p className="copyright">
      &copy;2022 | Built by: <a href="https://polyp.dev">Polyp</a>
    </p>
  </footer>
);

Footer.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Footer;
