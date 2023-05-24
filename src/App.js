import logo from './logo.svg';
import './App.css';
import Router from "./router"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
