import { Link } from "react-router-dom"
import "./styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header_img" src="/img/pokedex.info.png" alt="logo" />
                </Link>
            <footer className="header_footer">
                <div className="header_footer_circle">
                    <div className="header_footer_circle_center"></div>
                </div>

            </footer>
        </header>
    )
}

export default Header