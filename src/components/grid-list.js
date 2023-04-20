/* eslint-disable no-unused-vars */
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GridList = () => {
  const continents = useSelector((state) => state.metrics.allContinents);

  return (
    <div className="continent-list">
      <div className="px-3 py-1 bg-darkBlue">
        <h6 className="text-sm font-bold text-white"> STATS BY CONTINENTS</h6>
      </div>

      <div className="grid grid-cols-2">
        {
        continents.length && continents.map((continent) => (
          <div className="continent-info min-h-[180px] relative flex flex-col items-center justify-center" key={continent.continent}>
            <button type="button">
              <BsArrowRightCircle className="absolute text-lg text-white top-1 right-3" />
            </button>

            <h1 className="text-2xl font-extrabold text-center text-white">{continent.continent}</h1>

            <div className="flex items-center mt-2 text-center text-white text-info">
              <p className="flex flex-col">
                <span>Total Cases</span>
                <span className="font-bold">{continent.cases.toLocaleString()}</span>
              </p>
            </div>
          </div>
        ))
      }

      </div>
    </div>
  );
};

export default GridList;
