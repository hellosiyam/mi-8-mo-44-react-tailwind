import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {

    const { name, price, features } = option

    return (
        <div className=" bg-green-500 p-6 text-white rounded-2xl flex flex-col gap-5">
            <h1 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl font-bold">/mon</span>
            </h1>
            <h1 className="text-center text-3xl font-bold">{name}</h1>
            <div className="flex-grow">
                {
                   features.map((feature, idx) => <Feature key={idx} feature={feature} ></Feature> ) 
                }
            </div>
            <button className="text-2xl text-green-600 bg-white p-3 font-bold rounded-xl hover:bg-gray-400">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
}

export default PriceOption;