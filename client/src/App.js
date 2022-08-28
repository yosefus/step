import styles from './App.module.css';
import { BrowserRouter } from "react-router-dom"
import MainRoutes from './routes';

const App = () => {

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
