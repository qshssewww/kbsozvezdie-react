import React from 'react';
import './Main.css'
import moon from './moon.png'
import scheme from './scheme.png'
import micro from './micro.png'
import silterra from './silterra.png'
import angstrem from './angstrem.png'
import mikron from './mikron.png'
import Satellite from "../../Satellite/Satellite";
import SvgCode from "../../Svg/SvgCode";
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
            <div className={'main_micro micro'}>
                <h2 className={'micro_title'}>Микросхемы</h2>
                <div className={'micro_block'}>
                    <div className={'micro_text-block'}>
                        <p className={'micro_text'}>Разработка СБИС, в том числе типа «cистема-на-кристалле». Мы предлагаем своим клиентам полный комплект услуг по подготовке и сопровождению мелкосерийного и массового производства микросхем на базе широкого спектра современных технологий. В зависимости от потребностей клиентов мы готовы работать в разных форматах:</p>
                        <ul className={'micro_ul-text'}>
                            <li className={'micro_text-item'}>полный цикл разработки сбис</li>
                            <li className={'micro_text-item'}>разработка топологии сбис по схемотехнике или rtl коду заказчика</li>
                            <li className={'micro_text-item'}>разработка сф-блоков</li>
                            <li className={'micro_text-item'}>перевод имеющихся проектов из реализации на плис в сбис</li>
                            <li className={'micro_text-item'}>выполнение работ по проверке топологии заказчика</li>
                            <li className={'micro_text-item'}>запуск и сопровождение изготовления кристаллов по всем возможным маршрутам фабрик, с которыми сотрудничаем (mpw/mlm/full mask set);</li>
                            <li className={'micro_text-item'}>разработка и изготовление контактирующих устройств интегральных микросхем (в корпусах любых типов, в том числе, отечественных).</li>
                            <li className={'micro_text-item'}>поставка различных типов корпусов для микросхем как отечественных, так и зарубежных.</li>
                        </ul>
                    </div>
                    <img className={'micro_img'} src={micro} alt="micro"/>
                </div>
            </div>
            <div className={'main_products products'}>
                <h1 className={'products_title'}>Предоставление полного комплекта средств проектирования по доступным процессам</h1>
                <div className={'products_silterra'}>
                    <img className={'products_silterra-img'} src={silterra} alt="silterra"/>
                    <SvgCode nameSvg={'arrowBlue'}/>
                </div>
                <div className={'products_mikron'}>
                    <img className={'products_mikron-img'} src={mikron} alt="mikron"/>
                    <p className={'products_text'}>HCMOS10LP: КМОП процесс 90нм с пониженным потреблением <br/> HCMOS8D: Высоковольтный КМОП процесс 180нм <br/> SOI180: КМОП КНИ процесс 180нм</p>
                </div>
                <div className={'products_angstrem'}>
                    <img className={'products_angstrem-img'} src={angstrem} alt="angstrem"/>
                    <p className={'products_text'}>250нм технология: Стандартный КМОП процесс 250нм</p>
                </div>
            </div>
        </div>
    );
};

export default Main;