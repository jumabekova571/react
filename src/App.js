import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer';
import Title from "./components/Title";
import "./App.css";

const App = () => {
    return (
     <>  
        <div className="w3-content" style={{maxWidth: '1400px'}}>
            <Title
                text="Hello React"
                color="red"
                size="26px"
            />
            <Title
                text="Good morning"
                color="green"
                size="36px"
            />
             <Title
                text="Default Props"
                size="46px"
            />
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </>    
    );
};



export default App;