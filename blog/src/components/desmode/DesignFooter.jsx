import React from 'react';

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

  // Mobile responsive styles
  const mobileContainerStyle = {
    ...containerStyle,
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '30px' : '40px',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 40px'
  };

  const mobileQuoteStyle = {
    ...quoteStyle,
    fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '28px' : '36px'
  };

  const mobileSocialIconsStyle = {
    ...socialIconsStyle,
    flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
    alignItems: window.innerWidth <= 480 ? 'flex-start' : 'center',
    gap: window.innerWidth <= 480 ? '12px' : window.innerWidth <= 768 ? '15px' : '20px'
  };

  const mobileSocialIconStyle = {
    ...socialIconStyle,
    width: window.innerWidth <= 768 ? '45px' : '50px',
    height: window.innerWidth <= 768 ? '45px' : '50px'
  };

  const mobileImgStyle = {
    ...imgStyle,
    width: window.innerWidth <= 768 ? '24px' : '28px',
    height: window.innerWidth <= 768 ? '24px' : '28px'
  };

  const mobileActionBtnStyle = {
    ...actionBtnStyle,
    padding: window.innerWidth <= 768 ? '10px 20px' : '12px 24px',
    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
    minWidth: window.innerWidth <= 768 ? '80px' : '100px'
  };

  const mobileRightSectionStyle = {
    ...rightSectionStyle,
    textAlign: window.innerWidth <= 768 ? 'left' : 'right'
  };

  const mobileContactTextStyle = {
    ...contactTextStyle,
    fontSize: window.innerWidth <= 768 ? '16px' : '18px'
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
        `}
      </style>
      <footer style={footerStyle}>
        <div style={mobileContainerStyle}>
        {/* Left Section - Quote and Social Icons */}
        <div style={leftSectionStyle}>
          <div>
            <h2 style={mobileQuoteStyle}>from sketch to screen</h2>
          </div>
          
          {/* Social Media Icons in squared sharp boxes */}
          <div style={mobileSocialIconsStyle}>
            {/* Icon 38 */}
            <a 
              href="https://in.linkedin.com/in/eswar-anand13" 
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
                src="/src/assets/social/38.png" 
                alt="LinkedIn" 
                style={{
                  ...mobileImgStyle,
                  filter: hoveredIcon === 'linkedin' ? 'invert(1)' : 'none'
                }}
              />
            </a>
            
            {/* Icon 39 */}
            <a 
              href="https://github.com/eswarnandha-a" 
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
                src="/src/assets/social/39.png" 
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
                const videosSection = document.getElementById('videos');
                if (videosSection) {
                  videosSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Videos
            </button>
            
            {/* Resume Button */}
            <a 
              href="https://drive.google.com/drive/folders/1fRZithJMrjCdi0fbbvswZq7F1YGwzb_O?usp=drive_link" 
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
        <div style={mobileRightSectionStyle}>
          <div style={contactInfoStyle}>
            <p style={mobileContactTextStyle}>Eswar Nandha A</p>
            <p style={mobileContactTextStyle}>eswaranand1999@gmail.com</p>
            <p style={mobileContactTextStyle}>6369489951</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default DesignFooter;