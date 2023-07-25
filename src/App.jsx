import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpencePage';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/income" component={IncomePage} />
          <Route path="/expenses" component={ExpensePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
