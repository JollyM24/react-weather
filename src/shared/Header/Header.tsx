import React, { useState } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select';

type Props = {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Новгород' }
  ];

const colourStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100
    }),
    singleValue: (styles: any) => ({
        ...styles,
        color: 0 ? '#FFF' : '#000', 
    })
    }

    const [theme, setTheme] = useState('light');

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme);
        const root = document.querySelector(':root') as HTMLElement;
        root.style.setProperty('--body-background-default', 'var(--body-background-${theme})');
    }

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id="header-logo" />
            </div>
            <div className={s.title}>ReactWeather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                <GlobalSvgSelector id="change-theme" /> 
            </div>
                <Select 
                  defaultValue={options[0]} 
                  styles={colourStyles} 
                  options={options} />
        </div>
    </header>
  )
}