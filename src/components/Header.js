const Header = () => {
  const links = [
    {
      name: "Song",
      id: "https://www.youtube.com/watch?v=tyKu0uZS86Q",
    },
  ];

  return (
    <header>
      <a href="/" className="logo">
        ToonToon
      </a>
      <ul className="nav-menu">
        {links.map((link) => (
          <li className="nav-item" key={link.id}>
            <a
              href={link.id}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
