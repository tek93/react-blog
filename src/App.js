
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetials';
import NotFound from './NotFound';


function App() {


  // const person ={name:'yousi', age :30}
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
         <Switch>
         <Route exact path="/">
              <Home/>

            </Route>
         
            <Route path="/create">
              <Create/>

            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>

            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
           
         </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
