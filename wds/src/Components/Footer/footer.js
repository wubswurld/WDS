import React, { Component } from 'react';

class foot extends Component {
    render () {
        return (
            <>
            <footer id="footer">
            <a href="https://www.instagram.com/?hl=en" id="insta" className="fab fa-instagram fa-2x"></a>
            <a href="https://www.linkedin.com" className="fab fa-linkedin fa-2x" id="linked"></a>
            <a href="https://www.facebook.com" className="fab fa-facebook-square fa-2x" id="face"></a>
            <br></br>
            <i id="copyright">© 2019 Scalable Solutions llc</i>
          </footer>
          </>
        )
    }
}

export default foot;