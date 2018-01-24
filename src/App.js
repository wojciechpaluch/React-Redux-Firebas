import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import TasksContainer from './components/TasksContainer';

const App = () => (
  <Paper>
    <Grid container>
        <Grid item xs={12}>
            <TasksContainer/>
        </Grid>
    </Grid>
  </Paper>
);

export default App;