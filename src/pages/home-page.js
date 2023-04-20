import React, {
  Suspense, useEffect, useState, useTransition,
} from 'react';
import { useDispatch } from 'react-redux';
import { PageHeader } from '../features';
import ComponentLoader from '../features/Loader/ComponentLoader';
import { GridList } from '../components';
import { getAllCountries, globalInfo, getAllContinents } from '../redux/metrics/metricSlice';

const Home = () => {
  const [data, setData] = useState(null);
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
      dispatch(getAllCountries());
    });
  };

  const fetchContinents = () => {
    startTransition(() => {
      dispatch(getAllContinents());
    });
  };

  useEffect(() => {
    fetchData();
    fetchCountries();
    fetchContinents();
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
                <GridList />
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
