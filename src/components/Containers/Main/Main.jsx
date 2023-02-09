import React from 'react';
import './Main.css'
import moon from './moon.png'
import scheme from './scheme.png'
import micro from './micro.png'
import Satellite from "../../Satellite/Satellite";
const Main = ({isPageOpen, arrowRef}) => {
    return (
        <div ref={arrowRef} style={isPageOpen ? {} : {display: 'none'}} className={'main'}>
            <div className={'main_about-comp'}>
                <h2  className={'main_title'}>О компании</h2>
                <div className={'main_text'}>
                    <p>
                        ООО «КБ Созвездие» — российский разработчик интегральных микросхем. Основанная в 2016 году компания предлагает полный спектр услуг в области разработки и производства интегральных микросхем специального и коммерческого применения.
                    </p>
                    <p>
                        Опыт успешной реализации задач сотрудниками компании для предприятий ракетно-космической отрасли позволяет рассчитывать на успешную реализацию будущих проектов, используя возможности отечественных предприятий и лучшие мировые достижения в микроэлектронике.
                    </p>
                    <p>
                        Отработанные маршруты проектирования на основе аналоговых и цифровых СФ-блоков, необходимых заказчику конфигураций и функционала, позволяют создавать интегральные микросхемы, а так же контролировать их изготовление на кремниевых технологиях с проектными нормами от 350 нм до 28 нм.
                    </p>
                </div>
                <img className={'main_moon'} style={{zIndex: -1}} src={moon} alt="moon"/>
            </div>
                <div style={isPageOpen ? {} : {display: "none"}} className={'satellite'} id={'sal'}></div>
                <Satellite/>
            <div className={'main_services services'}>
                <h2 className={'services_title'}>Компания ООО «КБ Созвездие» оказывает услуги по разработке РЭА</h2>
                <div className={'services_block'}>
                    <img className={'services_scheme'} src={scheme} alt="scheme"/>
                    <ul className={'services_text'}>
                        <li className={'services_text-item'}>УСТРОЙСТВ СОПРЯЖЕНИЯ С КАНАЛАМИ ARINC-429 (ГОСТ 18977-79), MIL-STD-1553B (ГОСТ 26765.52-87, ГОСТ Р 52070-2003), CAN-BUS (ISO11898), RS485, RS232 и ETHERNET-СТАНДАРТЫ. </li>
                        <li className={'services_text-item'}>ВСТРАИВАЕМЫХ СИСТЕМ НА ОСНОВЕ МИКРОКОНТРОЛЛЕРОВ, ПРОЦЕССОРОВ И ПЛИС СЛЕДУЮЩИМИ ИНТЕРФЕЙСАМИ СВЯЗИ С ВНЕШНЕЙ АППАРАТУРОЙ: RS485, RS232, MIL-STD-1553B, CAN-BUS, SPI, I2C, ARINC-429, ЦАП, АЦП, ETHERNET 10/100/1000, СКВТ, А ТАКЖЕ ЛЮБЫЕ ДРУГИЕ ДЛЯ КОНКРЕТНОЙ ЗАДАЧИ.</li>
                        <li className={'services_text-item'}>ОТЛАДОЧНЫХ ПЛАТ ДЛЯ ЛЮБЫХ ТИПОВ МИКРОСХЕМ.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;