import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid'

const data = [
  { region: 'Asia', val: 311923454 },
  { region: 'Europe', val: 27082222 },
  { region: 'Oceania', val: 47082222 },
];

export default class Demo1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
            
        <Chart
          data={chartData} palette="Soft"
        >
          <PieSeries
            valueField="val"
            argumentField="region" style={{height:'268px'}}
            innerRadius={0.6}
          />
          <Title
            text="Yearly Report"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
