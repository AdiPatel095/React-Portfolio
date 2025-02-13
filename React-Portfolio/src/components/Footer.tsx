import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/adipatel095"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/095-Adi-Patel"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/AdiPatel095"
          target="_blank"
        >
          Twitter
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Adi Patel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;