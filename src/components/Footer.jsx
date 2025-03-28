import './Footer.css';

function Footer() {
  const year = new Date().getFullYear(); // Obtenir l'année actuelle

  return (
    <footer className="footer">
      <p>© {year} Personal Library Manager. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
