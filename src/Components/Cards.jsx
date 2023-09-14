import { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const Cards = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setData(data.courses))
    },[])
    // console.log(data);
    return (
        <div className='grid grid-cols-3 gap-4 w-3/4'>
            {
                data.map(cards => <Card key={cards.id} cards={cards}></Card>)
            }
        </div>
    );
};

export default Cards;