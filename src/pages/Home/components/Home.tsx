import React from 'react';
import s from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
       <ThisDay />
       <ThisDayInfo />
       {/* in footer<a target="_blank" href="https://icons8.com/icon/96379/climate-care">Climate Care</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
    </div>
  )
}