import doller from '../assets/dollar-sign 1.png'
import frame from '../assets/Frame.png'
const Card = () => {
    return (
        <div className="p-4 bg-[#FFF] rounded-lg">
            <img className="w-full" src="https://i.ibb.co/nkXgYct/Rectangle-2-6.png"/>
            <h1 className="text-lg font-semibold my-3">Introduction to C++ for DSA</h1>
            <p className='text-[#1C1B1B99]'>Learn the fundamentals of Python programming language.</p>
            <div className="flex justify-between my-4">
                <div className='flex'>
                <img className='mr-1' src={doller} alt="" />
                <p className='text-[#1C1B1B99]'>Price: 10000</p>
                </div>
                <div className='flex'>
                <img className='mr-1' src={frame} alt="" />
                <p className='text-[#1C1B1B99]'>Credit: 10hr</p>
                </div>
            </div>
            <button className="py-2 bg-[#2F80ED] rounded-lg w-full text-white">Select</button>
        </div>
    );
};

export default Card;