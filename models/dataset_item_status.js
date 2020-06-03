const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dataset_item_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dataset_item_status_id",
      autoIncrement: true
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
    }
  };
  const options = {
    tableName: "dataset_item_status",
    comment: "",
    indexes: []
  };
  const DatasetItemStatusModel = sequelize.define("dataset_item_status_model", attributes, options);
  return DatasetItemStatusModel;
};