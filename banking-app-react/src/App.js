import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
import Login from './Components/Login'


function App() {
  return (
    <div>
      <Login />
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/Users' component={ListUser}></Route>
          <Route path='/add-Users' component={CreateUser}></Route>
          <Route path='/update-Users' component={UpdateUser}></Route>
          <Route path='/' component={Login}></Route>
        </Routes>
        <Footer />
      </Router> */}
    </div>
        
     );
}

export default App;
