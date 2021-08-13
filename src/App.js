import './App.scss';
import Loadable from 'react-loadable';

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import('../src/components/pages/Home'),
  loading: loader,
});

function App() {
  return (
    <>
      <HomeLazy />
    </>
  );
}

export default App;
