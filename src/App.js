import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Company from './pages/Company'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (

    <Router>

      <Navbar />

   <Switch>
     
    
        <Route exact path="/Casas-Ilheus">
        <Home />
        </Route>

        <Route exact path="/company">
        <Company />
        </Route>

        <Route exact path="/contact">
        <Contact />
        </Route>




 
  </Switch>
  
      <Footer></Footer>

    </Router>



  );
}

export default App;

