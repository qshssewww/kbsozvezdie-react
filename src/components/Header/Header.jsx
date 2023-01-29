import SvgCode from "../Svg/SvgCode";
import './Header.css'
import logo from  './logotip.png'
const Header = ({setIsPageOpen, bottomRef, isPageOpen}) => {
    const handleClick = async  () => {
        await setIsPageOpen(true)
        await bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className={'header'}>
            <div className={isPageOpen ? 'header_container-none' : 'header_container'}>
                <img className={'header_logo'} src={logo} alt="logo"/>
                <div className={'header_line'}></div>
                <p className={'header_subtitle'}>Интегральные решения для специальных применений</p>
            </div>
            <div className={'header_arrows'} style={isPageOpen ? {display: "none"} : {}}>
                <SvgCode onClick={handleClick} pulsiveUp={true} nameSvg={'arrowD'}/>
                <SvgCode onClick={handleClick} nameSvg={'arrowD'}/>
                <SvgCode onClick={handleClick} pulsiveDawn={true} nameSvg={'arrowD'}/>
            </div>
        </div>
    );
};

export default Header;