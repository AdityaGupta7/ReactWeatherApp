//as the data is going to be retrieved from parent directly, 'chart' does not need to talk to redux, and it is
//just a component
import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return(
    <div>
      <Sparklines width={180} height={120} data={props.data}>{/*data and color are now props in Chart*/}
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
}
