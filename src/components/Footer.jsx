import React from "react";

// Footer with dynamic year
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Jordan Handy {year}</p>
    </footer>
  );
}

export default Footer;
