/* eslint-disable react/prop-types */
const Cart = ({data,ramain,credit,total}) => {
    // console.log(data);
    // const {title} = data;
    return (
        <div className="lg:w-1/4 p-5 bg-white rounded-lg">
            <div className="lg:sticky top-8 right-0">
                <h1 className="text-lg text-[#2F80ED] font-bold my-4">Credit Hour Remaining {ramain} hr</h1>
                <hr />
                <h1 className="text-xl text-[#1C1B1B] font-bold">Course Name</h1>
                <ol className="list-decimal m-5 text-[#1C1B1B99]">
                {
                    data.map(detail =>  <li key={detail.id}>{detail.title}</li>)
                }
                </ol>
                <hr />
                <p className="font-medium my-3">Total Credit Hour : {credit}</p>
                <hr />
                <p className="font-medium my-3">Total Price : {total} USD</p>
            </div>
        </div>
    );
};

export default Cart;