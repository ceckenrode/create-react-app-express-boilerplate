import React, { Component } from 'react';
import './List.css';
import { API } from '../../utils';
import ListItem from '../ListItem';
import Button from '../Button';
import ListInput from '../ListInput';

class List extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewTodoClick = this.handleNewTodoClick.bind(this);
  }
  componentWillMount() {
    this.getTodos();
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value.substring(0, 60) });
  }
  handleNewTodoClick() {
    API.createTodo(this.state.inputValue).then(() => this.getTodos());
  }
  handleDeleteButtonClick(id) {
    API.deleteTodo(id).then(() => this.getTodos());
  }
  handleCompleteButtonClick(todo) {
    API.toggleTodoComplete(todo).then(() => this.getTodos());
  }
  getTodos() {
    API.getTodos().then(res => this.setState({ todos: res.data, inputValue: '' }));
  }
  renderList() {
    return this.state.todos.map(todo => {
      return (
        <ListItem className="list-group-item" key={todo.id}>
          <span className={`list-text${todo.complete ? " completed": ""}`}>
            {todo.text}
          </span>
          <Button
            onClick={() => this.handleCompleteButtonClick(todo)}
            className="float-right m-5"
            type="primary"
          >
            <i className="fa fa-check" aria-hidden="true"></i>
          </Button>
          <Button
            onClick={() => this.handleDeleteButtonClick(todo.id)}
            className="float-right m-5"
            type="danger"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
        </ListItem>
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        <ListItem>
          <ListInput
            formStyle={{
              marginTop: '10px',
              width: '75%',
              display: 'inline-block'
            }}
            value={this.state.inputValue}
            type="text"
            onChange={this.handleInputChange}
          />
          <Button
            onClick={this.handleNewTodoClick}
            className="float-right m-5"
            type="success"
          >
            Add Todo
          </Button>
        </ListItem>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
