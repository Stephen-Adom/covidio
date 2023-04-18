import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './features';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== '/' ? (
        <>
          <Navigation />
          <main className="mt-[4rem]">
            <Outlet />
          </main>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
