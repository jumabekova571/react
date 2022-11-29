import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="w3-content" style={{maxWidth: '1400px'}}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};



export default App;