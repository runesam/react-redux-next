import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

const average = arr => Math.round(arr.reduce((b, a) => b + a, 0) / arr.length);
export default props => (
    <div className='chart-container'>
        <Sparklines limit={20} data={props.data} width={200} height={200}>
            <SparklinesLine color={props.color} style={{ stroke: 'black', fill: '#8fc638' }} />
            <SparklinesSpots style={{ fill: 'orange' }} />
            <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <div>{average(props.data)}</div>
    </div>
);
