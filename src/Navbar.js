import { Link } from "react-router-dom";    

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>The Weather App</h1>
            <div className="links">
                <Link to="/">Today's weather</Link>
                <Link to="/3-days-forecast">3-days forecast</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;