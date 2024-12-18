import CarCard from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import { fetchCars } from '@/utils';
import React from 'react';

const Home = async() => {
const allCars=await fetchCars();
const isDataEmpty=!Array.isArray(allCars)||allCars.length<1||!allCars;

  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
            <p>Explore ther cars you might like</p>
        


        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>

          </div>

        </div>
        {
          !isDataEmpty ?(
            <section>
              <div className='home__cars-wrapper' >
                {allCars?.map((car,key)=><CarCard key={key} car={car}/>)}
              </div>
            </section>
          ):(
            <div className='home__error-container'>
              <h2>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }

      </div>
    </main>
  );
};

export default Home;