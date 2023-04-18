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

export default Home;
