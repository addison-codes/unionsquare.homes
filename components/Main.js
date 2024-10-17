import PropTypes from 'prop-types';
import Gallery from 'react-photo-album';
import { photos } from './photos';
import React from 'react';
import Image from 'next/image'

import nick from '/public/HeadshotNick.jpg'
import danielle from '/public/DanielleHeadshot.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article
          id="nick"
          className={`${this.props.article === 'nick' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Nick</h2>
          <span className="image main">
            <Image src={nick} alt="Union Square Nick" layout='fill' />
          </span>
          <p>
          My name is Nick and I have lived in the building since 2017. I have been in real estate for 5 years and pride myself in being the knowledgeable go-to Realtor in Union Square. If you're thinking about buying or selling in 2022, I'd love to chat. Feel free to contact me about your real estate goals!
          </p>
          {close}
        </article>

        <article
          id="danielle"
          className={`${this.props.article === 'danielle' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Danielle</h2>
          <span className="image main">
            <Image src={danielle} alt="Union Square Danielle" layout='fill' />
          </span>
          <p>
          With over 10 years' experience in finance and banking, Danielle is your local expert for all things mortgage and lending related. Her experience in lending lead her to Treadstone Funding in 2018. Danielle is backed by an incredible team that focuses on the customer experience, transparency, and quick turnaround. As a 2 year resident and owner in Union Square, Danielle is excited to continue to assist her neighbors and friends with their condo purchases and refinances.
          </p>
          {close}
        </article>

        {/* <article
          id="history"
          className={`${this.props.article === 'history' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Union Square History</h2>
          <span className="image main">
            <img src="/Union Square History.jpg" alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By
            the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra.
            Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
            fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
          </p>
          {close}
        </article>

        <article
          id="perks"
          className={`${this.props.article === 'perks' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Perks & Amenities</h2>
          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
            nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque
            condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem
            consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.
          </p>
          {close}
        </article>

        <article
          id="pics"
          className={`${this.props.article === 'pics' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Photo Gallery</h2>
          <Gallery photos={photos} layout="rows" />
          {close}
        </article> */}

        <article
          id="buy"
          className={`${this.props.article === 'buy' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Us</h2>
          <form method="POST" action="https://formsubmit.co/nicholasmcanallen@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="email">Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
