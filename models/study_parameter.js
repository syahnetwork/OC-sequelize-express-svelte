const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_parameter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_parameter_id",
      autoIncrement: true
    },
    handle: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "handle",
      autoIncrement: false,
      unique: "study_parameter_handle_key"
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    default_value: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "default_value",
      autoIncrement: false
    },
    inheritable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "inheritable",
      autoIncrement: false
    },
    overridable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "overridable",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_parameter",
    comment: "",
    indexes: []
  };
  const StudyParameterModel = sequelize.define("study_parameter_model", attributes, options);
  return StudyParameterModel;
};