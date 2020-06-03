const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "workflow_id",
      autoIncrement: false
    },
    workflow_status: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "workflow_status",
      autoIncrement: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
      autoIncrement: false
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_data_flag_workflow",
    comment: "",
    indexes: []
  };
  const ItemDataFlagWorkflowModel = sequelize.define("item_data_flag_workflow_model", attributes, options);
  return ItemDataFlagWorkflowModel;
};