const Navbar = ({ show }) => {
  return (
    <div className={show ? "nav-active" : "nav"}>
      <ul className="ul">
        <li className="li">
          <a href="otherPage.html">ContactPage</a>
        </li>
        <li className="li">
          <a href="AboutPage.html">AboutPage</a>
        </li>
        <li className="li">
          <a href="index.html">HomePage</a>
        </li>
        <li className="li">
          <a href="#">Menu</a>
        </li>
        <li className="li">
          <a href="#">Modal</a>
        </li>
        <li className="li">
          <a href="#">Footer</a>
        </li>
        <li className="li">
          <a href="#">Services</a>
        </li>
        <li className="li">
          <a href="https://google.com">Data</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;