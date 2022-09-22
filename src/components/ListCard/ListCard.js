import React from 'react';
import './ListCard.css'
import UpArrow from '../../media/arrow-up.png'
import DownArrow from '../../media/down-filled-triangular-arrow.png'
import Close from '../../media/close.png'

const ListCard = () => {
    return (
        <div>
            <div className='listCard'>
            <h1 className='heading'>List card</h1>
                <div className='SingleList'>
                    <div className='text-section'>Sani.js</div>
                    <div className='butto-section'>
                        <img className='icon' src={UpArrow} alt="" />
                        <img className='icon' src={DownArrow} alt="" />
                        <img className='icon' src={Close} alt="" />
                    </div>
                </div>
                <div className='SingleList'>
                    <div className='text-section'>Sani.js</div>
                    <div className='butto-section'>
                        <img className='icon' src={UpArrow} alt="" />
                        <img className='icon' src={DownArrow} alt="" />
                        <img className='icon' src={Close} alt="" />
                    </div>
                </div>
                <div className='SingleList'>
                    <div className='text-section'>Sani.js</div>
                    <div className='butto-section'>
                        <img className='icon' src={UpArrow} alt="" />
                        <img className='icon' src={DownArrow} alt="" />
                        <img className='icon' src={Close} alt="" />
                    </div>
                </div>
                <div className='SingleList'>
                    <div className='text-section'>Sani.js</div>
                    <div className='butto-section'>
                        <img className='icon' src={UpArrow} alt="" />
                        <img className='icon' src={DownArrow} alt="" />
                        <img className='icon' src={Close} alt="" />
                    </div>
                </div>
            </div>
            <div className="input">
                 
            </div>
        </div>
    );
};

export default ListCard;