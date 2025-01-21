import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (

    <Router>

      <Navbar />

   <Switch>
     
    
        <Route exact path="/">
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

