import PropTypes from 'prop-types';
import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { HiArrowLongLeft } from 'react-icons/hi2';
import styles from '../../styles/home.module.css';

const PageHeader = ({ data }) => {
  const { continent } = useParams();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={`w-[88%] mx-auto flex items-center ${continent ? 'justify-between' : 'justify-center'}`}>
        <h1 className="text-2xl font-bold tracking-wide text-center">
          {continent || 'Global Information'}
        </h1>

        {continent && (
        <button type="button" onClick={() => navigate('/dashboard')}>
          <HiArrowLongLeft className="text-3xl" />
        </button>
        )}
      </div>

      {data && (
        <section className="flex flex-wrap justify-center gap-4 mt-3">
          <div className={styles.card}>
            <p>Total Cases</p>
            <p className="font-bold text-green-300">
              {data.cases.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Active Cases</p>
            <p className="font-bold text-yellow-100">
              {data.active.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Total Deaths</p>
            <p className="font-bold text-red-500">
              {data.deaths.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>New Cases</p>
            <p className="font-bold text-green-300">
              {data.todayCases.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Critical Cases</p>
            <p className="font-bold text-yellow-500">
              {data.critical.toLocaleString()}
            </p>
          </div>
        </section>
      )}
    </header>
  );
};

PageHeader.propTypes = {
  data: PropTypes.shape([]).isRequired,
};

export default PageHeader;
