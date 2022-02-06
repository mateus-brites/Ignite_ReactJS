import { GlobalStyles } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';



function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}

export { App };
