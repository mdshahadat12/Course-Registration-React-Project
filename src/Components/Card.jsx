/* eslint-disable react/prop-types */
import doller from '../assets/dollar-sign 1.png'
import frame from '../assets/Frame.png'
const Card = ({cards,handleBtn}) => {
    const {title,img,description,credit,price} = cards;
    return (
        <div className="p-4 bg-[#FFF] rounded-lg">
            <img className="w-full" src={img}/>
            <h1 className="text-lg font-semibold my-3">{title}</h1>
            <p className='text-[#1C1B1B99] text-sm'>{description}</p>
            <div className="flex justify-between my-4">
                <div className='flex'>
                <img className='mr-1' src={doller} alt="" />
                <p className='text-[#1C1B1B99]'>Price: {price}</p>
                </div>
                <div className='flex'>
                <img className='mr-1' src={frame} alt="" />
                <p className='text-[#1C1B1B99]'>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={()=>handleBtn(cards)} className="py-2 bg-[#2F80ED] rounded-lg w-full text-white">Select</button>
        </div>
    );
};

export default Card;