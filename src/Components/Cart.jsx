const Cart = () => {
    return (
        <div className="w-1/4 p-5 bg-white rounded-lg">
            <h1 className="text-lg text-[#2F80ED] font-bold my-4">Credit Hour Remaining 7 hr</h1>
            <hr />
            <h1 className="text-xl text-[#1C1B1B] font-bold">Course Name</h1>
            <ol className="list-decimal m-5 text-[#1C1B1B99]">
            <li>Introduction to c programming</li>
            <li>Introduction to C++ for DSA</li>
            <li>Software Engineering</li>
            </ol>
            <hr />
            <p className="font-medium my-3">Total Credit Hour : 13</p>
            <hr />
            <p className="font-medium my-3">Total Price : 48000 USD</p>
        </div>
    );
};

export default Cart;