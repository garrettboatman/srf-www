const Footer = () => (
  <footer
    style={{
      marginTop: `145px`,
      marginBottom: `60px`,
      textAlign: `center`,
      fontWeight: `900`,
    }}
  >
    © {new Date().getFullYear()} |{' '}
    <a href="mailto:hello@seekrefugeproductions.com">
      hello@seekrefugeproductions.com
    </a>
    {` `}
  </footer>
);

export default Footer;
