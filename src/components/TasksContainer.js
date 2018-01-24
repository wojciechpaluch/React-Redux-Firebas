import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import TaskList from './TaskList';
import { add, search, remove, init } from './state';

const mapStateToProps = state => ({
    tasksList: state.tasks.tasks,
    query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
    addNewTask: task => dispatch(add(task)),
    searchTask: value => dispatch(search(value)),
    removeTask: taskId => dispatch(remove(taskId)),
    initTasks: () => dispatch(init())
});

class TasksContainer extends Component {

    state = {
        task: ''
    }

    componentWillMount() {
        this.props.initTasks();
    }

    handleChange = event => {
        this.setState({ task: event.target.value });
    }

    handleSearchChange = event => {
        this.props.searchTask(event.target.value);
    }

    handleClick = event => {
        this.props.addNewTask(this.state.task);
    }

    handleRemove = task => {
        this.props.removeTask(task);
    }

    render() {
        return (
            <div>
                <div>
                    <TextField placeholder="Please Add Task" value={this.state.task} onChange={this.handleChange}/>
                    <Button raised color="primary" onClick={this.handleClick}>Add task</Button>
                </div>
                <div>
                    <TextField placeholder="Search" onChange={this.handleSearchChange}/>
                </div>
                <TaskList
                    tasks={this.props.tasksList}
                    query={this.props.query}
                    onDelete={this.handleRemove}
                />
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksContainer);
