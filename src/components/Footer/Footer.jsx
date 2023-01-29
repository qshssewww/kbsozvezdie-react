import React from 'react';
import './Footer.css'
import stars from './stars.png'
import SvgCode from "../Svg/SvgCode";
const Footer = ({isPageOpen}) => {
    return (
        <div className={'footer'} style={isPageOpen ? {} : {display: 'none'}}>
            <div className={'footer_title'}>
                <h2 className={'footer_title-text'}>2016-2023 © ООО "КБ Созвездие"</h2>
                <div className={'footer_title-line'}></div>
            </div>
            <div className={'footer_container'}>
                <div className={'footer_contacts'}>
                    <div className={'footer_contact'}>
                        <a target="_blank" href="https://www.google.ru/maps/place/%D0%9A%D0%91+%D0%A1%D0%BE%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B8%D0%B5/@55.9983187,37.1897438,17z/data=!4m10!1m2!2m1!1z0LrQsSDRgdC-0LfQstC10LfQtNC40LU!3m6!1s0x46b514f8a0a94c05:0x616dde81f4fc3d52!8m2!3d55.9975946!4d37.1908782!15sChfQutCxINGB0L7Qt9Cy0LXQt9C00LjQtZIBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11pzkkbmpl"><SvgCode nameSvg={'map'}/></a>
                        <p className={'footer_contact-text'}>124460, г. Зеленоград, Панфиловский проспект, корпус 1106e</p>
                    </div>
                    <div className={'footer_contact'}>
                        <SvgCode nameSvg={'email'}/>
                        <p className={'footer_contact-text'}>mail@kbsozvezdie.ru</p>
                    </div>
                    <div className={'footer_contact'}>
                        <SvgCode nameSvg={'phone'}/>
                        <p className={'footer_contact-text'}>+7 963 680-66-66</p>
                    </div>
                </div>
                <img width={320} height={347} src={stars} alt="stars"/>
            </div>
        </div>
    );
};

export default Footer;