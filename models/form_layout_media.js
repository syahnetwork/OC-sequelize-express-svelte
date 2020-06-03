const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    form_layout_media_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "form_layout_media_id",
      autoIncrement: true
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "form_layout_id",
      autoIncrement: false,
      references: {
        key: "form_layout_id",
        model: "form_layout_model"
      }
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_id",
      autoIncrement: false
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    path: {
      type: DataTypes.CHAR(4000),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "path",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "form_layout_media",
    comment: "",
    indexes: []
  };
  const FormLayoutMediaModel = sequelize.define("form_layout_media_model", attributes, options);
  return FormLayoutMediaModel;
};