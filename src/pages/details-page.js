import React, {
  Suspense, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PageHeader from '../features/Header/PageHeader';
import ComponentLoader from '../features/Loader/ComponentLoader';
import { getAllCountries, getContinent } from '../redux/metrics/metricSlice';
import { CountryList } from '../components';

const Continent = () => {
  const [continentData, setContinent] = useState(null);
  const allCountries = useSelector((state) => state.metrics.countries);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { continent } = useParams();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [continent]);

  useEffect(() => {
    dispatch(getContinent(continent)).then((res) => {
      if (res.meta.requestStatus === 'pending') {
        setIsLoading(true);
      }

      if (res.meta.requestStatus === 'fulfilled') {
        setIsLoading(false);
        setContinent(res.payload);
      }
    });
  }, [continent, dispatch]);

  useEffect(() => {
    if (!allCountries.length) {
      dispatch(getAllCountries());
    }
  }, [allCountries, dispatch]);

  return (
    <section>
      {isLoading ? (
        <ComponentLoader />
      ) : (
        <section>
          <PageHeader data={continentData} />

          <Suspense fallback={<ComponentLoader />}>
            <CountryList />
          </Suspense>
        </section>
      )}
    </section>
  );
};

export default Continent;
