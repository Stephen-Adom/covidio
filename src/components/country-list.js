import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const CountryList = () => {
  const countries = useSelector((state) => state.metrics.countries);

  return (
    <div className="country-list">
      <div className="px-3 py-1 bg-darkBlue">
        <h6 className="text-sm font-bold text-white"> STATS BY COUNTRY</h6>
      </div>

      <div className="grid grid-cols-1">
        {
        countries.length && countries.map((country) => (
          <div className="continent-info min-h-[60px] relative flex items-center justify-between px-3" key={country.country}>

            <h1 className="text-xl font-extrabold text-left text-white">{country.country}</h1>

            <section className="flex items-center gap-3">
              <div className="flex items-center text-center text-white text-info">
                <p className="flex items-center gap-2">
                  <span>Total Cases</span>
                  <span className="font-bold">{country.cases.toLocaleString()}</span>
                </p>
              </div>

              <button type="button" className="">
                <BsArrowRightCircle className="text-lg text-white" />
              </button>
            </section>
          </div>
        ))
      }

      </div>
    </div>
  );
};

export default CountryList;
