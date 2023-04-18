/* eslint-disable import/extensions */
import React, {
  Suspense, useEffect, useState, useTransition,
} from 'react';
import { useDispatch } from 'react-redux';
import { PageHeader, Countries } from '../features';
import ComponentLoader from '../features/Loader/ComponentLoader';
import { getAllCountries, globalInfo } from '../redux/metrics/metricSlice';

const Home = () => {
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();

  const fetchData = () => {
    startTransition(() => {
      dispatch(globalInfo()).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setData(res.payload);
        }
      });
    });
  };

  const fetchCountries = () => {
    startTransition(() => {
      dispatch(getAllCountries()).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setCountries(res.payload);
        }
      });
    });
  };

  useEffect(() => {
    fetchData();
    fetchCountries();
  }, [dispatch]);

  return (
    <section className="text-red-600">
      {isPending ? (
        <ComponentLoader />
      ) : (
        <div>
          {data ? (
            <>
              <PageHeader data={data} />

              <Suspense fallback={<ComponentLoader />}>
                {countries && <Countries countries={countries} />}
              </Suspense>
            </>
          ) : (
            <ComponentLoader />
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
