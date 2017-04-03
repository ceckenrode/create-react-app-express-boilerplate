import axios from 'axios';

const BASEURL = '/api/todo';

export const API = {
  getTodos: function() {
    return axios.get(BASEURL);
  },
  createTodo: function(text) {
    const newTodo = { text, complete: false };
    return axios.post(BASEURL, newTodo);
  },
  toggleTodoComplete: function(todo) {
    const updatedTodo = Object.assign({}, todo, { complete: !todo.complete });
    return axios.put(`${BASEURL}/${todo.id}`, updatedTodo);
  },
  deleteTodo: function(id) {
    return axios.delete(`${BASEURL}/${id}`);
  }
};
