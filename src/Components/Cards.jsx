/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const Cards = ({handleBtn}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setData(data.courses))
    },[])
    // console.log(data);
    return (
        <div className='grid lg:grid-cols-3 gap-4 lg:w-3/4'>
            {
                data.map(cards => <Card key={cards.id} handleBtn={handleBtn} cards={cards}></Card>)
            }
        </div>
    );
};

export default Cards;