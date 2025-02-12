import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {

    const [phones, setPhones] = useState([]);

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
            })
    }, [])

    return (
        <div>
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