import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {

    const [phones, setPhones] = useState([]);

    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phoneWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    };
                    return obj
                });
                setPhones(phoneWithFakeData)
                setSpinner(false)
            })
    }, [])

    return (
        <div>
            <div>
                {spinner && <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />}
            </div>
            <h1 className="text-4xl ">Phones : {phones.length}</h1>
            <div>
                <BarChart width={1050} height={300} data={phones}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;