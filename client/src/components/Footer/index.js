import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  // array of footer links for each column
  const companyLinks = [
    {
      name: "about",
      text: "About"
    },
    {
      name: "careers",
      text: "Careers"
    },
    {
      name: "partners",
      text: "Partners"
    },
    {
      name: "faq",
      text: "FAQs"
    },
  ];
  const socialMediaLinks = [
    {
      name: "twitter",
      symbol: "bi bi-twitter",
      text: "https://twitter.com/"
    },
    {
      name: "facebook",
      symbol: "bi bi-facebook",
      text: "https://www.facebook.com"
    },
    {
      name: "instagram",
      symbol: "bi bi-instagram",
      text: "https://www.instagram.com/"
    },
    {
      name: "linkedin",
      symbol: "bi bi-linkedin",
      text: "https://www.linkedin.com/"
    },
    {
      name: "stack-overflow",
      symbol: "bi bi-stack-overflow",
      text: "https://stackoverflow.com/"
    },
    {
      name: "github",
      symbol: "bi bi-github",
      text: "https://github.com/"
    }
  ];
  const contactLinks = [
    {
      name: "email",
      symbol: "bi bi-envelope-fill",
      text: "poseidon@gmail.com"
    },
    {
      name: "phone",
      symbol: "bi bi-telephone-fill",
      text: "555-555-5555"
    },
  ];

  return (
    // section for Footer component
    <footer className="pt-5 pb-4 bg-black text-center text-md-start text-white">
      <Container>
        <Row xs={1} md={4}>
          <Col>
            <h5 className="text-uppercase">About us</h5>
            <p>
            Made by Kyle Tang, Stephon Treadwell, Chris Nohilly, Braulio Loaiza, and Ian Zyvith
            </p>
          </Col>
          {/* company */}
          <Col>
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled d-flex flex-column">
              {companyLinks.map(companyLink => (
                <li className="mb-2">
                  <a 
                    key={companyLink.name}
                    href="/"
                    className="nav-link"
                    onclick="return false;"
                  >
                    {companyLink.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          {/* follow us */}
          <Col>
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="mb-3">
              {socialMediaLinks.map(socialMediaLink => (
                <a 
                  key={socialMediaLink.name}
                  href={`${socialMediaLink.text}`} 
                  className="btn link-light fs-2 me-3 py-0 px-0"
                >
                  <i className={`${socialMediaLink.symbol}`}></i>
                </a>
              ))}
            </div>
          </Col>
          {/* contact */}
          <Col>
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled d-flex flex-column">
              {contactLinks.map(contactLink => (
                <li className="mb-2 mx-auto mx-md-0">
                  <a 
                    key={contactLink.name}
                    href="/" 
                    className="nav-link d-flex"
                  >
                    <i className={`${contactLink.symbol} pe-2`}
                    ></i>
                    <div className="">
                      {contactLink.text}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr />
        <div>
          <ul className="list-unstyled d-flex flex-column flex-md-row">
            <li className="mb-2 order-last order-md-first">
              &copy; 2022 Poseidon, Inc. All Rights Reserved.
            </li>
            <li className="mb-2 mx-md-4">
              <a href="/" className="nav-link">Terms and Conditions</a>
            </li>
            <li className="mb-2 order-first order-md-last">
              <a href="/" className="nav-link">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;