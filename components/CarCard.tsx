'use client'
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { calculatorCarRent } from '@/utils';
import CardDetails from './CardDetails';
export  interface CarProps{
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;

}
export interface CarCardProps{
    car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive}=car
const [isOpen,setIsOpen]=useState(false)

    const carRent=calculatorCarRent(city_mpg,year)
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 car-card__content-title>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>
   <div className='relative w-full h-40 my-3 object-contain'>
    <Image src='/hero.png' alt='car model' fill priority className='object-contain'/>

   </div>
   <div className='relative flex w-full mt-2'>
    <div className='flex group-hover:invisible w-full justify-between text-gray'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' alt='wheel' width={20}  height={20}/>
            <p className='text-[14px]'>
                {transmission==='a'?'Automatic':'Manual'}
            </p>

        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='wheel' width={20}  height={20}/>
            <p className='text-[14px]'>
                {
                    drive.toUpperCase()
                }
            </p>

        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='wheel' width={20}  height={20}/>
            <p className='text-[14px]'>
                {
                city_mpg
                } MPG
            </p>

        </div>

    </div>
    <div className='car-card__btn-container'>
        <CustomButton
        title='view More'
        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
        rightIcon='/right-arrow.svg'
        textStyles='text-white text-[14px] leading-[17px] font-bold'
        handleClick={()=>setIsOpen(true)}
        />

    </div>

 <CardDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
   </div>
            
        </div>
    );
};

export default CarCard;