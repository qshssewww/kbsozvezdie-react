import React from 'react';
import './Footer.css'
import stars from './stars.png'
import SvgCode from "../../Svg/SvgCode";
const Footer = ({isPageOpen, footerRef}) => {
    return (
        <div className={'footer'} style={isPageOpen ? {} : {display: 'none'}}>
            <div className={'footer_title'}>
                <h2 className={'footer_title-text'}>2016-2023 © ООО "КБ Созвездие"</h2>
                <div className={'footer_title-line'}></div>
            </div>
            <div className={'footer_container'}>
                <div className={'footer_contacts'}>
                    <div className={'footer_contact'}>
                        <a rel={'noreferrer'} target="_blank" href="https://www.google.ru/maps/place/%D0%9A%D0%91+%D0%A1%D0%BE%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B8%D0%B5/@55.9983187,37.1897438,17z/data=!4m10!1m2!2m1!1z0LrQsSDRgdC-0LfQstC10LfQtNC40LU!3m6!1s0x46b514f8a0a94c05:0x616dde81f4fc3d52!8m2!3d55.9975946!4d37.1908782!15sChfQutCxINGB0L7Qt9Cy0LXQt9C00LjQtZIBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11pzkkbmpl"><SvgCode nameSvg={'map'}/></a>
                        <a rel={'noreferrer'} target="_blank" href="https://www.google.ru/maps/place/%D0%9A%D0%91+%D0%A1%D0%BE%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B8%D0%B5/@55.9983187,37.1897438,17z/data=!4m10!1m2!2m1!1z0LrQsSDRgdC-0LfQstC10LfQtNC40LU!3m6!1s0x46b514f8a0a94c05:0x616dde81f4fc3d52!8m2!3d55.9975946!4d37.1908782!15sChfQutCxINGB0L7Qt9Cy0LXQt9C00LjQtZIBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11pzkkbmpl"><p className={'footer_contact-text'}>124460, г. Зеленоград, Панфиловский проспект, корпус 1106e</p></a>
                    </div>
                    <div className={'footer_contact'}>
                        <a itemProp='email' href='mailto:mail@kbsozvezdie.ru'><SvgCode nameSvg={'email'}/></a>
                        <a itemProp='email' href='mailto:mail@kbsozvezdie.ru' className={'footer_contact-text'}>mail@kbsozvezdie.ru</a>
                    </div>
                    <div className={'footer_contact'}>
                        <a href='tel: +7 963 680-66-66'><SvgCode nameSvg={'phone'}/></a>
                        <a href='tel: +7 963 680-66-66' className={'footer_contact-text'}>+7 963 680-66-66</a>
                    </div>
                </div>
                <img onClick={() => footerRef.current.scrollIntoView({ behavior: "smooth" })} className={'footer_icon'}  src={stars} alt="stars"/>
            </div>
        </div>
    );
};

export default Footer;