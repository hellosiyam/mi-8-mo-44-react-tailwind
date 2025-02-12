const NavLink = ({ route }) => {
    return (
        <div>
            <li className="mr-10">
                <a href={route.path}></a>{route.name}</li>
        </div>
    );
};

export default NavLink;