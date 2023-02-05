import React from 'react';
import './SvgCode.css'
const SvgCode = ({nameSvg, onClick, pulsiveDawn, pulsiveUp}) => {
    return (
        <>
            {
                nameSvg === 'arrowD' &&
                <svg onClick={onClick} className={pulsiveUp ? 'arrowD-pulsiveUp' : 'arrowD' && pulsiveDawn ? 'arrowD-pulsiveDawn' : 'arrowD'} width="130" height="38" viewBox="0 0 156 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L78 43L153 3" stroke="#FCFCFC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {
                nameSvg === 'map' &&
                <svg className={'map'}  viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 20V20.033" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M60.0003 43.3334L48.3337 26.6667C47.2106 24.6368 46.6365 22.349 46.6682 20.0294C46.7 17.7097 47.3364 15.4385 48.5146 13.4401C49.6928 11.4417 51.372 9.78523 53.3864 8.63447C55.4007 7.4837 57.6805 6.87842 60.0003 6.87842C62.3202 6.87842 64.5999 7.4837 66.6143 8.63447C68.6286 9.78523 70.3078 11.4417 71.4861 13.4401C72.6643 15.4385 73.3007 17.7097 73.3324 20.0294C73.3641 22.349 72.7901 24.6368 71.667 26.6667L60.0003 43.3334Z" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M35 15.8335L30 13.3335L10 23.3335V66.6668L30 56.6668L50 66.6668L70 56.6668V50.0002" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 13.3335V56.6668" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M50 50V66.6667" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            }
            {
                nameSvg === 'email' &&
                <svg className={'email'}  viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <path d="M40.0003 53.3332C47.3641 53.3332 53.3337 47.3636 53.3337 39.9998C53.3337 32.636 47.3641 26.6665 40.0003 26.6665C32.6365 26.6665 26.667 32.636 26.667 39.9998C26.667 47.3636 32.6365 53.3332 40.0003 53.3332Z" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M53.3333 40V45C53.3333 47.2101 54.2113 49.3297 55.7741 50.8925C57.3369 52.4553 59.4565 53.3333 61.6667 53.3333C63.8768 53.3333 65.9964 52.4553 67.5592 50.8925C69.122 49.3297 70 47.2101 70 45V40C70.0083 33.5537 67.9399 27.2761 64.1013 22.0973C60.2627 16.9185 54.858 13.1138 48.688 11.247C42.5179 9.38013 35.9105 9.55039 29.8448 11.7325C23.779 13.9147 18.5775 17.9926 15.0107 23.3622C11.4439 28.7319 9.70157 35.1076 10.0418 41.545C10.3821 47.9823 12.7868 54.1388 16.8998 59.1025C21.0128 64.0662 26.6153 67.5731 32.8773 69.1036C39.1393 70.6341 45.7278 70.1069 51.6667 67.6" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            }
            {
                nameSvg === 'phone' &&
                <svg className={'phone'}  viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 13.3335H30L36.6667 30.0002L28.3333 35.0002C31.9032 42.2386 37.7616 48.097 45 51.6668L50 43.3335L66.6667 50.0002V63.3335C66.6667 65.1016 65.9643 66.7973 64.714 68.0475C63.4638 69.2978 61.7681 70.0002 60 70.0002C46.9975 69.21 34.7338 63.6885 25.5228 54.4774C16.3117 45.2663 10.7902 33.0026 10 20.0002C10 18.2321 10.7024 16.5364 11.9526 15.2861C13.2029 14.0359 14.8986 13.3335 16.6667 13.3335" stroke="#FCFCFC" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </>
    );
};

export default SvgCode;