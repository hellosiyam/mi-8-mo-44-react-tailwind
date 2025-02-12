import PropTypes from 'prop-types';

const NavLink = ({ route }) => {
    return (
        <div>
            <li className="mr-10">
                <a href={route.path}></a>{route.name}</li>
        </div>
    );
};

NavLink.propTypes = {
    route : PropTypes.object.isRequired,
}

export default NavLink;