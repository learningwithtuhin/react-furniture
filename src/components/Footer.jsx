import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footer-logo.png";
import footerCard from "../assets/images/Social Links.png";

const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="container">
        <div className="row upper-row">
          <div className="col-md-6">
            <h4>Subscribe to Updates</h4>
            <p>Stay informed about our latest products and offers!</p>
          </div>
          <div className="col-md-6">
            <div className="newsletter-wrap">
              <form
                className="newsletter-form"
                style={{ display: "flex", gap: "10px", justifyContent: "end" }}
              >
                <input type="email" placeholder="Your Email Here" required />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <div className="footer-logo">
              <img src={footerLogo} alt="Footer Logo" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-wrap">
                  <h3>Quick Links</h3>
                  <ul className="footer-link">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Support</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/return-policy">Return Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-wrap">
                  <h3>Legal Information</h3>
                  <ul className="footer-link">
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Use</Link></li>
                    <li><Link to="/cookies">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-wrap">
                  <h3>Stay Connected</h3>
                  <ul className="footer-link">
                    <li><Link to="/community">Join Our Community</Link></li>
                    <li><Link to="/offers">Get Exclusive Offers</Link></li>
                    <li><Link to="/blog">Latest Blogs Here</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-wrap">
                  <h3>Connect With Us</h3>
                  <ul className="footer-link">
                    <li><Link to="/facebook">Facebook</Link></li>
                    <li><Link to="/instagram">Instagram</Link></li>
                    <li><Link to="/twitter">Twitter</Link></li>
                    <li><Link to="/youtube">YouTube</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bottom-row">
          <div className="col-md-6">
            <p>© 2025 Hexafurn. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="footer-card">
              <img src={footerCard} alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
