import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

/*
2 components: class component / function component (arrow function / function thường)
*/

function App() {
  //App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes >

            <Route exact path="/" element={<Home />} />
            <Route exact path="/todos" element={<ListTodo />} />
            <Route exact path="/about" element={<MyComponent />} />
            <Route exact path='/user' element={<ListUser />} />
            <Route exact path='/user/:id' element={<DetailUser />} />
          </Routes >
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router >
  );
}

export default App;
