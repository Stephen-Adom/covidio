import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './features';

function App() {
  const location = useLocation();

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
