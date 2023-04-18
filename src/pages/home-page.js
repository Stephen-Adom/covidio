import React from 'react';
import React, {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { useDispatch } from 'react-redux';
import { getAllCountries, globalInfo } from '../redux/metrics/metricSlice';
import styles from '../styles/home.module.css';

const Countries = lazy(() => import('../features/Countries/countries'));

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(globalInfo()).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setData(res.payload);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    startTransition(() => {
      fetchData();
    });
  }, [dispatch, fetchData, fetchCountries]);

  return (
    <section className="text-red-600">
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          <header className={styles.header}>
            <h1 className="text-center text-2xl font-bold tracking-wide">
              Global Information
            </h1>

            {data && (
              <section className="mt-3 flex flex-wrap justify-center gap-4">
                <div className={styles.card}>
                  <p className="text-green-300 font-bold">
                    {data.cases.toLocaleString()}
                  </p>
                  <p>Total Cases</p>
                </div>
                <div className={styles.card}>
                  <p className="text-yellow-100 font-bold">
                    {data.active.toLocaleString()}
                  </p>
                  <p>Active Cases</p>
                </div>
                <div className={styles.card}>
                  <p className="text-red-500 font-bold">
                    {data.deaths.toLocaleString()}
                  </p>
                  <p>Total Deaths</p>
                </div>
                <div className={styles.card}>
                  <p className="text-green-300 font-bold">
                    {data.todayCases.toLocaleString()}
                  </p>
                  <p>New Cases</p>
                </div>
                <div className={styles.card}>
                  <p className="text-yellow-500 font-bold">
                    {data.critical.toLocaleString()}
                  </p>
                  <p>Critical Cases</p>
                </div>
              </section>
            )}
          </header>

        </>
      )}
    </section>
  );
};

export default Home;
