import "./Header.css";
const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="title">{props.children}</h1>
      </header>
    </div>
  );
};

export default Header;
