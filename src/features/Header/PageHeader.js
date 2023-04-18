/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router';
import styles from '../../styles/home.module.css';

const PageHeader = ({ data }) => {
  const { continent } = useParams();

  return (
    <header className={styles.header}>
      <h1 className="text-center text-2xl font-bold tracking-wide">
        {continent || 'Global Information'}
      </h1>

      {data && (
        <section className="mt-3 flex flex-wrap justify-center gap-4">
          <div className={styles.card}>
            <p>Total Cases</p>
            <p className="text-green-300 font-bold">
              {data.cases.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Active Cases</p>
            <p className="text-yellow-100 font-bold">
              {data.active.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Total Deaths</p>
            <p className="text-red-500 font-bold">
              {data.deaths.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>New Cases</p>
            <p className="text-green-300 font-bold">
              {data.todayCases.toLocaleString()}
            </p>
          </div>
          <div className={styles.card}>
            <p>Critical Cases</p>
            <p className="text-yellow-500 font-bold">
              {data.critical.toLocaleString()}
            </p>
          </div>
        </section>
      )}
    </header>
  );
};

PageHeader.propTypes = {
  data: PropTypes.shape([]),
};

export default PageHeader;
