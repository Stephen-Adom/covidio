import { Outlet } from 'react-router-dom';
import { Navigation } from './features';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
