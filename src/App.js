import logo from 'C:/Users/hewaw/OneDrive/Desktop/Portfolio/my-portfolio/src/assets/img/logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from './components/Skills';
import{Project} from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
