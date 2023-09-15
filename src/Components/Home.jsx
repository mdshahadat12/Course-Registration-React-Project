import { useState } from "react";
import Cards from "./cards";
import Cart from "./cart";
import Header from "./header";

const Home = () => {
    const [data, setdata] = useState([]);
    const [credit, setCredit] = useState(0)
    const [ramain, setRamain] = useState(20)
    const [total, setTotal] = useState(0)

    const handleBtn = (cards) => {
        const exsist = data.find(element => cards.id === element.id);
        let total = cards.price;
        data.forEach(element => {
            total += element.price;
        });
        
        let credit = cards.credit;
        data.forEach(element => {
            credit += element.credit;
        });
        const ramain = 20 - credit
        if(ramain < 0){
            return alert('limit ses')
        }else 
        if(exsist){
            return alert('booked');
        }else{
            
            setTotal(total);
            setCredit(credit);
            setRamain(ramain);
            setdata([...data,cards]);
        }
    }
    return (
        <div className="bg-[#F3F3F3]">
            <div className="container max-[1200px] w-[90%]    mx-auto">
                <Header></Header>
                <div className="flex flex-col-reverse lg:flex-row gap-10">
                <Cards handleBtn={handleBtn}></Cards>
                <Cart data={data} total={total} credit={credit} ramain={ramain}></Cart>
                </div>
             </div>
        </div>
    );
};

export default Home;