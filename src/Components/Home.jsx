import Cards from "./cards";
import Cart from "./cart";
import Header from "./header";

const Home = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="container max-[1200px] w-[90%]    mx-auto">
                <Header></Header>
                <div className="flex gap-10">
                <Cards></Cards>
                <Cart></Cart>
                </div>
             </div>
        </div>
    );
};

export default Home;