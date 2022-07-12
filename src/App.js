import './App.css';
import MovieDetail from './View/MovieDetail';
import MovieList from "./View/MovieList.js";
import ListTable from "./View/ListTable.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>      
        <Route exact path="/" component={ListTable} />
        <Route exact path="/movieDetail/:movieId" component={MovieDetail} />                
      </Switch>
    </Router>
  );
}

export default App;
