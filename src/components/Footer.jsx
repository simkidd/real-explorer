import React from "react";
import "./footer.scss";
import AppStore from "../assets/Rectangle 1 + Google Play Icon + Imported Layers + Imported Layers + App Store.png";
import PlayStore from "../assets/Rectangle 1 + Google Play Icon + Imported Layers + Fill 1.png";
import Twitter from "../assets/Twitter.png";
import Facebook from "../assets/Facebook.png";
import LinkedIn from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="col-1">
              <div>
                <h4>sell your home</h4>
                <ul>
                  <li>Request an offer</li>
                  <li>How it works</li>
                  <li>Pricing</li>
                  <li>Reviews</li>
                  <li>Stories</li>
                </ul>
              </div>
              <div>
                <h4>buy a home</h4>
                <ul>
                  <li>Buy</li>
                  <li>Tour Homes</li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div>
                <h4>save to rent</h4>
                <ul>
                  <li>Our saving plans</li>
                  <li>Building a saving culture</li>
                </ul>
              </div>
              <div>
                <h4>resources</h4>
                <ul>
                  <li>Blog</li>
                  <li>Guides</li>
                  <li>FAQ</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div>
                <h4>about</h4>
                <ul>
                  <li>Company</li>
                  <li>Career</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4>agents</h4>
                <ul>
                  <li>Make an offer</li>
                  <li>Request an offer</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h4>download app</h4>
                <ul>
                  <li>
                    <img src={PlayStore} alt="playstore" />
                  </li>
                  <li>
                    <img src={AppStore} alt="app store" />
                  </li>
                </ul>
              </div>
              <div>
                <h4>social media</h4>
                <div className="socials">
                  <img src={Twitter} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={LinkedIn} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>&copy; Real-explorer</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Trust & Safety</p>
                <p>Law Enforcement</p>
            </div>
            <div className="footer-bottom-right">
                <p>Language:</p>
                <select>
                    <option>EN</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
