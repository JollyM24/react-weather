import React from 'react';
import s from './ThisDay.module.scss';
import Select from 'react-select';
import { readBuilderProgram } from 'typescript';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

type Props = {}

export const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <div className={s.this__img}>
          <GlobalSvgSelector id="sun"  />
        </div>
      </div>

      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          City: <span>Spb</span>
        </div>
      </div>
    </div>
  )
}