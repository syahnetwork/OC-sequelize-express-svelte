const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_group_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_group_metadata_id",
      autoIncrement: true
    },
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_group_id",
      autoIncrement: false,
      references: {
        key: "item_group_id",
        model: "item_group_model"
      }
    },
    header: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "header",
      autoIncrement: false
    },
    subheader: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subheader",
      autoIncrement: false
    },
    layout: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "layout",
      autoIncrement: false
    },
    repeat_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeat_number",
      autoIncrement: false
    },
    repeat_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeat_max",
      autoIncrement: false
    },
    repeat_array: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeat_array",
      autoIncrement: false
    },
    row_start_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "row_start_number",
      autoIncrement: false
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: false,
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    borders: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "borders",
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
    repeating_group: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeating_group",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_group_metadata",
    comment: "",
    indexes: [{
      name: "i_item_group_metadata_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_item_group_metadata_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_item_group_metadata_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_item_group_metadata_item_group_id",
      unique: false,
      fields: ["item_group_id"]
    }, {
      name: "i_item_group_metadata_item_group_id",
      unique: false,
      fields: ["item_group_id"]
    }, {
      name: "i_item_group_metadata_item_group_id",
      unique: false,
      fields: ["item_group_id"]
    }, {
      name: "i_item_group_metadata_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_item_group_metadata_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_item_group_metadata_item_id",
      unique: false,
      fields: ["item_id"]
    }]
  };
  const ItemGroupMetadataModel = sequelize.define("item_group_metadata_model", attributes, options);
  return ItemGroupMetadataModel;
};