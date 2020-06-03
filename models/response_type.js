const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    response_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "response_type_id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "response_type",
    comment: "",
    indexes: []
  };
  const ResponseTypeModel = sequelize.define("response_type_model", attributes, options);
  return ResponseTypeModel;
};