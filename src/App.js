import logo from './logo.svg';
import './App.css';
import './style/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Template } from './components/template';
import { HomeIndex } from './pages/homeindex';
import { About } from './pages/about';
import { Contact } from './pages/contacts';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Activity } from './pages/activity';
import { CurrentActivity } from './pages/currentactivity';
import { News } from './pages/news';
import { AffectedAreas } from './pages/AffectedAreas';
import { Volunteer } from './pages/volunteer';
import { TrainingCenter } from './pages/trainingcenter';
import { Aids } from './pages/aids';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        {/* <HumbergerSidenav /> */}
        <div className='container'>
          <Routes>
            
            <Route path='/' element={<HomeIndex />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/activity' element={<Activity />} />
            <Route path='/currentactivity' element={<CurrentActivity />} />
            <Route path='/news' element={<News />} />
            <Route path='/affectedares' element={<AffectedAreas />} />
            <Route path='/volunteer' element={<Volunteer />} />
            <Route path='/trainingcenter' element={<TrainingCenter />} />
            <Route path='/aids' element={<Aids />} />
            <Route path='/be/*' element={<Template />} />
          </Routes>

        </div>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
