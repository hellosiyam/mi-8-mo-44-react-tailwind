import NavLink from "../NavLink/NavLink";

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];

    return (
        <nav>
            <ul className="md:flex">
                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;