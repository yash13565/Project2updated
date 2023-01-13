import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import WholeTeam from './Section/WholeTeam';
import Activity from './Pages/Activity';
import Activity1 from './Pages/Activity1';
import { RecoilRoot } from 'recoil';

function App() {
  return (
   <RecoilRoot>
   <Router>
   <Navbar/>
   
   <div className="pages">
   <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/registration' component={Registration}></Route>
    <Route exact path='/wholeteam' component={WholeTeam}></Route>
    <Route exact path='/activity' component={Activity}></Route>
    <Route exact path='/activity1' component={Activity1}></Route>
   </Switch>
   </div>
   </Router>
   
   </RecoilRoot>
   
  );
}

export default App;
