import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Plans from './components/pages/Plans';
import Services from './components/pages/Services';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/plans' component={Plans} />
          <Route path='/services' component={Services} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
