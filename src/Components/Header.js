import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <Header>
      <div className="header__logo">
        <div className="header__logoName">Amazon-Clone</div>
      </div>
      <div className="header__Search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__firstLine">HelloGuest</span>
          <span className="header__nav__secondLine">Sign In</span>
        </div>
        <div className="header__nav__itemBasket">Cart</div>
      </div>
    </Header>
  );
};
export default Header;
