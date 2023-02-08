import React, {useRef, useState} from 'react';
import Header from "./components/Containers/Header/Header";
import Main from "./components/Containers/Main/Main";
import Stars from "./components/Stars/Stars";
import Footer from "./components/Containers/Footer/Footer";
import Satellite from "./components/Satellite/Satellite";
const App = () => {
    const [isPageOpen, setIsPageOpen] = useState(false)
    const arrowRef = useRef()
    const footerRef = useRef()
    return (
        <div className={'App'}>
            <Stars>
                <Header footerRef={footerRef} arrowRef={arrowRef} setIsPageOpen={setIsPageOpen} isPageOpen={isPageOpen}/>
                <Main arrowRef={arrowRef} isPageOpen={isPageOpen}/>
                <div style={isPageOpen ? {} : {display: "none"}} className={'satellite'} id={'sal'}></div>
                <Satellite/>
                <Footer footerRef={footerRef} isPageOpen={isPageOpen}/>
            </Stars>
        </div>
    );
};

export default App;