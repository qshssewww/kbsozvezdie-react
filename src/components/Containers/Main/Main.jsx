import React, {useState} from 'react';
import './Main.css'
import moon from './moon.png'
import scheme from './scheme.png'
import micro from './micro.png'
import silterra from './silterra.png'
import angstrem from './angstrem.png'
import mikron from './mikron.png'
import microchip from './microchip.png'
import Satellite from "../../Satellite/Satellite";
import SvgCode from "../../Svg/SvgCode";
const Main = ({isPageOpen, arrowRef}) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
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
            <div className={isProductsOpen ? 'main_products products open' : 'main_products products close'}>
                <h1 className={'products_title'}>Предоставление полного комплекта средств проектирования по доступным процессам</h1>
                <div className={'products_silterra'}>
                    <img className={'products_silterra-img'} src={silterra} alt="silterra"/>
                    <SvgCode isProductsOpen={isProductsOpen} onClick={() => setIsProductsOpen(!isProductsOpen)} nameSvg={'arrowBlue'}/>
                    <div className={'products_silterra-text'}>
                        <div className={'products_silterra_block'}>
                            <p className={'products_silterra-item'}>C15G: Стандартные КМОП процесс 153нм</p>
                            <p className={'products_silterra-item'}>C16G: Стандартные КМОП процесс 160нм</p>
                            <p className={'products_silterra-item'}>C16H32: Высоковольтный КМОП процесс 160нм</p>
                            <p className={'products_silterra-item'}>C18G: Стандартные КМОП процесс 180нм</p>
                            <p className={'products_silterra-item'}>C18GH5: Стандартные КМОП процесс 180нм с повышенным напряжением питания ячеек ввода/вывода</p>
                            <p className={'products_silterra-item'}>C18G eFlash: Стандартные КМОП процесс 180нм с возможностью использования eFlash</p>
                            <p className={'products_silterra-item'}>C18LP: КМОП процесс 180нм с низким потреблением</p>
                            <p className={'products_silterra-item'}>C18MR: КМОП процесс для радиочастоных схем 180нм</p>
                            <p className={'products_silterra-item'}>CL180BCDA: Процесс позволяют использовать три типа транзисторов на одном кристалле</p>
                            <p className={'products_silterra-item'}>(Биполяр/КМОП/ДМОП) 180нм</p>
                            <p className={'products_silterra-item'}>C18H32: Высоковольтный КМОП процесс 180нм</p>
                        </div>
                        <div className={'products_silterra_block'}>
                            <p className={'products_silterra-item'}>CL11AL: КМОП процесс 110нм с использованием Al верхнего слоя межсоединения.</p>
                            <p className={'products_silterra-item'}>C11AL eFlash: КМОП процесс 110нм с использованием Al верхнего слоя межсоединения и возможностью использования eFlash.</p>
                            <p className={'products_silterra-item'}>C11H32: Высоковольтный КМОП процесс 110нм.</p>
                            <p className={'products_silterra-item'}>C11ALMR: КМОП процесс для радиочастоных схем 110нм.</p>
                            <p className={'products_silterra-item'}>C11G: Стандартный КМОП процесс 110нм.</p>
                            <p className={'products_silterra-item'}>C13AL: КМОП процесс 130нм с использованием Al верхнего слоя межсоединения</p>
                            <p className={'products_silterra-item'}>C13G: Стандартный КМОП процесс 130нм</p>
                            <p className={'products_silterra-item'}>C13H32: Высоковольтный КМОП процесс 130нм</p>
                            <p className={'products_silterra-item'}>C13MR: КМОП процесс для радиочастоных схем 130нм</p>
                        </div>
                    </div>
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
            <div className={'main_microchip microchip'}>
                <h1 className={'microchip_title'}>МИКРОСХЕМА KB S101</h1>
                <div className={'microchip_block'}>
                    <img className={'microchip_img'} src={microchip} alt="microchip"/>
                    <div className={'microchip_text-block'}>
                        <div className={'microchip_functions'}>
                            <h3 className={'microchip_functions-title'}>Функции:</h3>
                            <ul className={'microchip_functions-block'}>
                                <li className={'microchip_functions-li'}>Переключение потоков данных интерфейса I2C.</li>
                                <li className={'microchip_functions-li'}>Контроль температуры кристалла.</li>
                                <li className={'microchip_functions-li'}>Аналого-цифровое преобразование внешних сигналов.</li>
                                <li className={'microchip_functions-li'}>Считывание цифровых сигналов с внешних цепей и/или управление внешними цепями при помощи выводов общего назначения</li>
                            </ul>
                        </div>
                        <div className={'microchip_specifications'}>
                            <h3 className={'microchip_specifications-title'}>Характеристики:</h3>
                            <ul className={'microchip_specifications-ul'}>
                                <li className={'microchip_specifications-li'}>Порты для подключения к I2C Master.</li>
                                <li className={'microchip_specifications-li'}>Независимые порты для подключения I2C Slave.</li>
                                <li className={'microchip_specifications-li'}>АЦП.</li>
                                <li className={'microchip_specifications-li'}>Цифровой термодатчик.</li>
                                <li className={'microchip_specifications-li'}>GPIO.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className={'microchip_p'}>Полное техническое описание предоставляется по запросу</p>
            </div>
        </div>
    );
};

export default Main;