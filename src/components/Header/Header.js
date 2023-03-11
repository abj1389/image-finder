import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import ChangeTheme from "../ChangeTheme/ChangeTheme";

const Header = () => {


    return (
        <div className="header">
            <SearchBar></SearchBar>
            <ChangeTheme></ChangeTheme>
        </div>
    );
}

export default Header;