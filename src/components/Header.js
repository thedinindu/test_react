import '../styles/Styles.css'
import logo from '../images/apple-logo.png'

function Header() {
    return (
        <nav className="navigation">
            <img src={logo} className='nav-logo' alt='logo'></img>
            <a href="/" className="brand-name">
                CardSample
            </a>
            <div
                className="navigation-menu">
                <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header