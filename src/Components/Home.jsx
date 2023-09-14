import { useState } from "react";
import Cards from "./cards";
import Cart from "./cart";
import Header from "./header";

const Home = () => {
    const [data, setdata] = useState([]);
    const handleBtn = (cards) => {
        setdata([...data,cards]);
    }
    return (
        <div className="bg-[#F3F3F3]">
            <div className="container max-[1200px] w-[90%]    mx-auto">
                <Header></Header>
                <div className="flex flex-col-reverse lg:flex-row gap-10">
                <Cards handleBtn={handleBtn}></Cards>
                <Cart data={data}></Cart>
                </div>
             </div>
        </div>
    );
};

export default Home;