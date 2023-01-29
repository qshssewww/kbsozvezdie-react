import React, {useRef, useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Stars from "./components/Stars/Stars";
import Footer from "./components/Footer/Footer";
const App = () => {
    const [isPageOpen, setIsPageOpen] = useState(false)
    const bottomRef = useRef()
    return (
        <div>
            <Stars>
                <Header bottomRef={bottomRef} setIsPageOpen={setIsPageOpen} isPageOpen={isPageOpen}/>
                <Main bottomRef={bottomRef} isPageOpen={isPageOpen}/>
                <Footer isPageOpen={isPageOpen}/>
            </Stars>
        </div>
    );
};

export default App;