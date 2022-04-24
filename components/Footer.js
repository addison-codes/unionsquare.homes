import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <h2>Your Union Square Team:</h2>
    <div className="imagebox">
      <img src="/static/images/Headshot Nick.jpg" alt="Nick Headshot" />
      <img src="/static/images/Screen Shot 2022-03-14 at 12.13.19 PM.png" alt="Danielle Headshot" />
    </div>
    <p className="copyright">
      &copy; Union Square | Built by: <a href="https://polyp.dev">Polyp</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
