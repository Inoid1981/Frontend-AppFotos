import { Link } from "react-router-dom";
import Auth from "./Auth";

const Header = () => {
    return (
        <header>
            <h1>
            <Link to ="/" >InstaFotos</Link>
            </h1>
            <nav>
                <Auth/>
            </nav>
        </header>
    );
};
export default Header;