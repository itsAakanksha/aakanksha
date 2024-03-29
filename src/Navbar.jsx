import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/addpost">Add Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;