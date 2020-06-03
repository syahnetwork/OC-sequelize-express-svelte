const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false,
      references: {
        key: "crf_version_id",
        model: "crf_version_model"
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_id",
      autoIncrement: false,
      references: {
        key: "item_id",
        model: "item_model"
      }
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    item_order_in_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_order_in_form",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "versioning_map",
    comment: "",
    indexes: [{
      name: "duplicate_item_form_layout_item_in_form_ordinal_uniqueness_key",
      unique: true,
      fields: ["form_layout_id", "item_id", "item_order_in_form"]
    }, {
      name: "duplicate_item_form_layout_item_in_form_ordinal_uniqueness_key",
      unique: true,
      fields: ["form_layout_id", "item_id", "item_order_in_form"]
    }, {
      name: "duplicate_item_form_layout_item_in_form_ordinal_uniqueness_key",
      unique: true,
      fields: ["form_layout_id", "item_id", "item_order_in_form"]
    }, {
      name: "i_versioning_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_versioning_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_versioning_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_versioning_map_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_versioning_map_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_versioning_map_item_id",
      unique: false,
      fields: ["item_id"]
    }]
  };
  const VersioningMapModel = sequelize.define("versioning_map_model", attributes, options);
  return VersioningMapModel;
};