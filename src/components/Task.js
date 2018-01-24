import React, { Component } from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';


const style = {
  checked: {
    color: 'green',
    textDecoration: 'line-through'
  },
  unChecked: {}
};

class Task extends Component {

  state = {
    checked: false
  }

  handleChange = (event) => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <ListItem>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <ListItemText primary={this.props.name} style={this.state.checked ? style.checked : style.unChecked}/>
          <ListItemSecondaryAction>
              <IconButton aria-label="Delete">

              </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );
  }

}

export default Task;