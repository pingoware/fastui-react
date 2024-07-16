import React, { useMemo } from 'react'
import './Footer.css'
import Header from '../header/Header';

const Footer = ({
  className = "",
  aboutTextDecoration,
  servicesTextDecoration,
  twitterTextDecoration,
  linkedInTextDecoration,
  privacyPolicyTextDecoration,
}) => {
  const aboutStyle = useMemo(() => {
    return {
      textDecoration: aboutTextDecoration,
    };
  }, [aboutTextDecoration]);

  const servicesStyle = useMemo(() => {
    return {
      textDecoration: servicesTextDecoration,
    };
  }, [servicesTextDecoration]);

  const twitterStyle = useMemo(() => {
    return {
      textDecoration: twitterTextDecoration,
    };
  }, [twitterTextDecoration]);

  const linkedInStyle = useMemo(() => {
    return {
      textDecoration: linkedInTextDecoration,
    };
  }, [linkedInTextDecoration]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      textDecoration: privacyPolicyTextDecoration,
    };
  }, [privacyPolicyTextDecoration]);

  return (
    <footer className={`footer ${className}`}  id="about-us">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left-parent">
            <div className="footer-left">
            <div className="worklink">
        <div className="parent">
            <div className="navi" />
            <div className="men" />
          </div> 
            <div className="pingoware2">Pingoware</div>
          </div>
            </div>
            <div className="address">
              <div className="address-here">Address here</div>
              <div className="post-code-or">Post code or complete address</div>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-list">
              <div className="about" style={aboutStyle}>
                About
              </div>
              <div className="services2" style={servicesStyle}>
                Services
              </div>
              <div className="works">Works</div>
            </div>
            <div className="link-list1">
              <div className="instagram">Instagram</div>
              <a className="twitter" style={twitterStyle}>
                Twitter
              </a>
              <div className="linkedin" style={linkedInStyle}>
                LinkedIn
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-child" />
          <div className="legal">
            <div className="rights">
              <div className="agency-name-2023">
                ©️ Agency name 2023. All Right Reserved
              </div>
            </div>
            <div className="rights1">
              <div className="privacy-policy" style={privacyPolicyStyle}>
                Privacy Policy
              </div>
            </div>
            <div className="label">Label</div>
          </div>
        </div>
      </div>
    </footer>
 );
};
export default Footer
