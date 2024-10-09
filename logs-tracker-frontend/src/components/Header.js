import { NavLink } from 'react-router-dom';


const Header = () => {
    return ( 
        <header className="header">
            <div className="header-block">
                <nav className="header-nav">
                    <ul>
                        <li><NavLink className="header-link" to="/">Список логов</NavLink></li>
                        <li><NavLink className="header-link" to="/publish">Публикация логов</NavLink></li>
                        <li><NavLink className="header-link" target='_blank' to="https://github.com/RuslanAl1mov/logs_tracker">GitHub</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;