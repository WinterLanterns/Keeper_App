import React from "react";

function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {copyrightYear}</p>
    </footer>
  );
}

export default Footer;
