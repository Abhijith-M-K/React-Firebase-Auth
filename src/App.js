import './App.css';
import AuthDetails from './components/Auth/AuthDetails';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
     <Login/>
     <AuthDetails/>
     <Signup/>
    </div>
  );
}

export default App;
