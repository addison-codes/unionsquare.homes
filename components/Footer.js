import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
              <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('buy');
            }}
          >
            Contact Us
          </a>
    <h2>Your Union Square Team:</h2>
    <div className="imagebox">
    <a href="javascript:;" onClick={() => { props.onOpenArticle('nick'); }}>
      <div className="bio">
        <img src="/Headshot Nick.jpg" alt="Nick Headshot" />
        <p>Nicholas McAnallen</p>
      </div>
    </a>
    <a href="javascript:;" onClick={() => { props.onOpenArticle('danielle'); }}>
      <div className="bio">
        <img src="/Danielle Headshot.png" alt="Danielle Headshot" />
        <p>Danielle Crilley</p>
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
