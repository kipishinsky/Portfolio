import React from 'react';
import './App.css';
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Slogan from "../Slogan/Slogan";
import Footer from "../Footer/Footer";

const state = {
    names: ['Skills', 'Projects', 'Telework', 'Contacts', 'Web Development'],
};

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Skills name={state.names[0]}/>
                <Projects name={state.names[1]}/>
                <Slogan name={state.names[2]}/>
                <Contacts name={state.names[3]}/>
                <Footer name={state.names[4]}/>
            </div>
        </div>
    );
}

export default App;
