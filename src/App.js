import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import TasksContainer from './components/TasksContainer';

const App = () => (

    <Grid container>
        <Grid item xs={6}>
            <Paper>
            <TasksContainer/>
            </Paper>
        </Grid>

    </Grid>

);

export default App;