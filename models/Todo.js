module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    text: DataTypes.TEXT,
    complete: DataTypes.BOOLEAN
  })
  return Todo;
}
