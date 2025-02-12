import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ? <HiOutlineX /> : <HiMenuAlt1 />
                }

            </div>
            <ul className={`md:flex max-md:absolute duration-1000
                ${open ? '' : 'hidden'}
                    max-md:bg-green-400 p-4 max-md:ml-4 max-md:rounded-2xl`}>
                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;