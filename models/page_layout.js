const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    page_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "page_layout_id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false,
      unique: "uniq_page_layout_name"
    },
    definition: {
      type: bytea,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "definition",
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
    tableName: "page_layout",
    comment: "",
    indexes: []
  };
  const PageLayoutModel = sequelize.define("page_layout_model", attributes, options);
  return PageLayoutModel;
};