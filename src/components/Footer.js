function Footer() {
  return (
    <footer className="footer sec-p">
      <a href="#top" className="footer__logo">
        <img
          src="/img/testLogo4.svg"
          alt="Writing Renovations"
          className="footer__logo-img"
        />
        <img
          src="/img/testLogo2.svg"
          alt="Writing Renovations"
          className="footer__logo-img footer__logo-img--sm"
        />
      </a>

      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/laura-grand-copywriter"
          className="footer__link"
          target="blank"
        >
          <img
            src="/img/linkedin.svg"
            alt="Linked In"
            className="footer__link-img"
          />
        </a>
        <a
          href="https://www.facebook.com/WritingRenovations"
          className="footer__link"
          target="blank"
        >
          <img
            src="/img/facebook.svg"
            alt="Facebook"
            className="footer__link-img"
          />
        </a>
        <a href="#" className="footer__link">
          <img
            src="/img/tiktok.svg"
            alt="tiktok"
            className="footer__link-img"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
