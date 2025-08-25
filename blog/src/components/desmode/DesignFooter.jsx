import React from 'react';
import icon38 from '../../assets/social/38.png';
import icon39 from '../../assets/social/39.png';

const DesignFooter = () => {
  const footerStyle = {
    background: '#000000',
    color: '#ffffff',
    padding: '60px 0',
    marginTop: '80px',
    fontFamily: "'Alta Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    borderRadius: '0'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px'
  };

  const leftSectionStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  const quoteStyle = {
    fontFamily: "'Alta Regular', sans-serif",
    fontSize: '36px',
    fontWeight: '400',
    color: '#ffffff',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: '1.2'
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const socialIconStyle = {
    width: '50px',
    height: '50px',
    background: '#ffffff',
    border: '2px solid #000000',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 0 0 rgba(255, 255, 255, 0)',
    outline: 'none'
  };

  const socialIconHoverStyle = {
    background: '#000000',
    borderColor: '#ffffff',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)',
    outline: 'none'
  };

  const socialIconFocusStyle = {
    outline: 'none',
    border: '2px solid #000000'
  };

  const imgStyle = {
    width: '28px',
    height: '28px',
    objectFit: 'contain',
    transition: 'filter 0.3s ease'
  };

  const actionBtnStyle = {
    background: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
    borderRadius: '0',
    padding: '12px 24px',
    fontFamily: "'Alta Regular', sans-serif",
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100px'
  };

  const rightSectionStyle = {
    flex: '0 0 auto',
    textAlign: 'right'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const contactTextStyle = {
    fontFamily: "'Alta Regular', sans-serif",
    fontSize: '18px',
    fontWeight: '400',
    color: '#ffffff',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: '1.4'
  };

  // Simplified responsive styles using CSS classes
  const mobileContainerStyle = {
    ...containerStyle
  };

  const mobileQuoteStyle = {
    ...quoteStyle
  };

  const mobileSocialIconsStyle = {
    ...socialIconsStyle
  };

  const mobileSocialIconStyle = {
    ...socialIconStyle
  };

  const mobileImgStyle = {
    ...imgStyle
  };

  const mobileActionBtnStyle = {
    ...actionBtnStyle
  };

  const mobileRightSectionStyle = {
    ...rightSectionStyle
  };

  const mobileContactTextStyle = {
    ...contactTextStyle
  };

  const [hoveredIcon, setHoveredIcon] = React.useState(null);
  const [hoveredBtn, setHoveredBtn] = React.useState(null);

  return (
    <>
      <style>
        {`
          .design-footer-icon:focus,
          .design-footer-icon:active,
          .design-footer-icon:visited {
            outline: none !important;
            border: 2px solid #000000 !important;
            box-shadow: none !important;
          }
          .design-footer-icon:focus-visible {
            outline: none !important;
          }
          
          /* Mobile-specific footer styles */
          @media (max-width: 768px) {
            .design-footer-container {
              flex-direction: column !important;
              gap: 30px !important;
              padding: 0 20px !important;
            }
            
            .design-footer-quote {
              font-size: 28px !important;
            }
            
            .design-footer-social-icons {
              display: flex !important;
              flex-direction: row !important;
              gap: 8px !important;
              align-items: center !important;
              width: 100% !important;
              flex-wrap: nowrap !important;
              justify-content: flex-start !important;
            }
            
            .design-footer-social-icons > * {
              flex-shrink: 1 !important;
            }
            
            .design-footer-social-icons button {
              padding: 8px 12px !important;
              font-size: 12px !important;
              min-width: 60px !important;
              flex: 1 !important;
              max-width: none !important;
              height: 40px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .design-footer-social-icons a {
              width: 40px !important;
              height: 40px !important;
              flex-shrink: 0 !important;
            }
            
            .design-footer-social-icons img {
              width: 24px !important;
              height: 24px !important;
            }
            
            .design-footer-right {
              text-align: left !important;
            }
            
            .design-footer-contact-text {
              font-size: 16px !important;
            }
          }
          
          @media (max-width: 480px) {
            .design-footer-quote {
              font-size: 24px !important;
            }
            
            .design-footer-social-icons {
              gap: 6px !important;
            }
            
            .design-footer-social-icons button {
              padding: 6px 8px !important;
              font-size: 11px !important;
              min-width: 50px !important;
              height: 35px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .design-footer-social-icons a {
              width: 35px !important;
              height: 35px !important;
            }
            
            .design-footer-social-icons img {
              width: 20px !important;
              height: 20px !important;
            }
          }
        `}
      </style>
      <footer style={footerStyle}>
        <div className="design-footer-container" style={mobileContainerStyle}>
        {/* Left Section - Quote and Social Icons */}
        <div style={leftSectionStyle}>
          <div>
            <h2 className="design-footer-quote" style={mobileQuoteStyle}>from sketch to screen</h2>
          </div>
          
          {/* Social Media Icons in squared sharp boxes */}
          <div className="design-footer-social-icons" style={mobileSocialIconsStyle}>
            {/* Icon 38 */}
            <a 
              href="https://www.behance.net/eswaranand1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="design-footer-icon"
              style={{
                ...mobileSocialIconStyle,
                ...(hoveredIcon === 'linkedin' ? socialIconHoverStyle : {}),
                ...socialIconFocusStyle
              }}
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img 
                src={icon38} 
                alt="LinkedIn" 
                style={{
                  ...mobileImgStyle,
                  filter: hoveredIcon === 'linkedin' ? 'invert(1)' : 'none'
                }}
              />
            </a>
            
            {/* Icon 39 */}
            <a 
              href="https://in.pinterest.com/eswar_nandha_13/_created/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="design-footer-icon"
              style={{
                ...mobileSocialIconStyle,
                ...(hoveredIcon === 'github' ? socialIconHoverStyle : {}),
                ...socialIconFocusStyle
              }}
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img 
                src={icon39} 
                alt="GitHub" 
                style={{
                  ...mobileImgStyle,
                  filter: hoveredIcon === 'github' ? 'invert(1)' : 'none'
                }}
              />
            </a>
            
            {/* Videos Button */}
            <button 
              style={{
                ...mobileActionBtnStyle,
                ...(hoveredBtn === 'videos' ? {
                  background: '#000000',
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
                } : {})
              }}
              onMouseEnter={() => setHoveredBtn('videos')}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => {
                window.open('https://drive.google.com/drive/folders/1nSkH_GYRbJwZN38YHTPS8lU0fDWAZ4V6?usp=sharing', '_blank', 'noopener,noreferrer');
              }}
            >
              Videos
            </button>
            
            {/* Resume Button */}
            <a 
              href="https://drive.google.com/drive/folders/1dY0nm7V7qG6tjTDRKPYzU9JQcogPLFph?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                ...mobileActionBtnStyle,
                ...(hoveredBtn === 'resume' ? {
                  background: '#000000',
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
                } : {})
              }}
              onMouseEnter={() => setHoveredBtn('resume')}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="design-footer-right" style={mobileRightSectionStyle}>
          <div style={contactInfoStyle}>
            <p className="design-footer-contact-text" style={mobileContactTextStyle}>Eswar Nandha A</p>
            <p className="design-footer-contact-text" style={mobileContactTextStyle}>eswaranand1999@gmail.com</p>
            <p className="design-footer-contact-text" style={mobileContactTextStyle}>6369489951</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default DesignFooter;