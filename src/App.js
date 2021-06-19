import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
  );
}

export default App;
