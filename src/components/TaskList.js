import React from 'react';
import List from 'material-ui/List';

import Task from './Task';

const TasksList = (props) => (
    <List>
        {props.tasks
            .filter(task => task.name.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map(task => (
                <Task
                    key={`task-${task.id}`}
                    name={task.name}
                    onDelete={() => props.onDelete(task.id)}
                />
            ))}
    </List>
);

export default TasksList;