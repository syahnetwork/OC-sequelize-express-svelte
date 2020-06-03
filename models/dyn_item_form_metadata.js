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
    item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_form_metadata_id",
      autoIncrement: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_id",
      autoIncrement: false
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false
    },
    show_item: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_item",
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
    },
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_data_id",
      autoIncrement: false
    },
    passed_dde: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "passed_dde",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dyn_item_form_metadata",
    comment: "",
    indexes: [{
      name: "i_difm_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_difm_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_difm_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_difm_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }, {
      name: "i_difm_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }, {
      name: "i_difm_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }, {
      name: "i_difm_item_form_metadata_id",
      unique: false,
      fields: ["item_form_metadata_id"]
    }, {
      name: "i_difm_item_form_metadata_id",
      unique: false,
      fields: ["item_form_metadata_id"]
    }, {
      name: "i_difm_item_form_metadata_id",
      unique: false,
      fields: ["item_form_metadata_id"]
    }, {
      name: "i_difm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_difm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_difm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_difm_show_item",
      unique: false,
      fields: ["show_item"]
    }, {
      name: "i_difm_show_item",
      unique: false,
      fields: ["show_item"]
    }, {
      name: "i_difm_show_item",
      unique: false,
      fields: ["show_item"]
    }]
  };
  const DynItemFormMetadataModel = sequelize.define("dyn_item_form_metadata_model", attributes, options);
  return DynItemFormMetadataModel;
};