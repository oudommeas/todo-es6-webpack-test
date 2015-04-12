'use strict';
import angular from 'angular'
import TodoList from './todolist';

var app = angular.module('Todo', []);
var todoList = new TodoList();
todoList.add('learn AngularJS', true);
todoList.add('build an AngularJS app');

app.controller('TodoCtrl', $scope => {
  $scope.todoList = todoList;

  $scope.addTodo = () => {
    todoList.add($scope.todoText);
    $scope.todoText = ''; // clears input
  };
});
