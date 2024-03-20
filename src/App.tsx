import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/skills';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
        </div>
    );
}

export default App;
