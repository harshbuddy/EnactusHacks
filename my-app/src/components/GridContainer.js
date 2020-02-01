import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
import { Sparkline } from '@progress/kendo-react-charts';

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem}/></td>
const processData = (data) => {
  data.forEach((item) => {
    return item;
  })
  return data;
}

export const GridContainer = () => (
  <div>
    <Grid style={{ height: '255px' }} data={processData(gridData)}>
      <Column field="PatientFirstName" title="First Name" width="200px" />
      <Column field="PatientLastName" title="Last Name" width="200px" />
      <Column field="Severity" title="Severity" width="200px" />
      <Column field="Reason" title="Reason for Visit" width="200px" />
    </Grid>
  </div>
);
