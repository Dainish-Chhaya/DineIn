import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //Allows client side Routing in your React application
import {Toaster} from "react-hot-toast";
import Home from './WebPages/Home';
import Success from './WebPages/Success';
import NotFound from './WebPages/NotFound';
import './App.css'

const App = () => {
  
  return <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/success" element = {<Success/>}/>
        <Route path="*" element = {<NotFound/>}/>      
      </Routes>
      <Toaster/>
    </Router>;
}

export default App;