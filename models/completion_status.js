const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    completion_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "completion_status_id",
      autoIncrement: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status_id",
      autoIncrement: false,
      references: {
        key: "status_id",
        model: "status_model"
      }
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
    tableName: "completion_status",
    comment: "",
    indexes: [{
      name: "i_completion_status_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_completion_status_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_completion_status_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const CompletionStatusModel = sequelize.define("completion_status_model", attributes, options);
  return CompletionStatusModel;
};