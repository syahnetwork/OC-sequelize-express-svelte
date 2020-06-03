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
    item_group_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_group_metadata_id",
      autoIncrement: false
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_group_id",
      autoIncrement: false
    },
    show_group: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_group",
      autoIncrement: false
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_id",
      autoIncrement: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dyn_item_group_metadata",
    comment: "",
    indexes: []
  };
  const DynItemGroupMetadataModel = sequelize.define("dyn_item_group_metadata_model", attributes, options);
  return DynItemGroupMetadataModel;
};