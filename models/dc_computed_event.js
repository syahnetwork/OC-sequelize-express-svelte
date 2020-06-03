const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_summary_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dc_summary_event_id",
      autoIncrement: true
    },
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dc_event_id",
      autoIncrement: false,
      references: {
        key: "dc_event_id",
        model: "dc_event_model"
      }
    },
    item_target_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_target_id",
      autoIncrement: false
    },
    summary_type: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "summary_type",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_computed_event",
    comment: "",
    indexes: [{
      name: "i_dc_computed_event_dc_event_id",
      unique: false,
      fields: ["dc_event_id"]
    }, {
      name: "i_dc_computed_event_dc_event_id",
      unique: false,
      fields: ["dc_event_id"]
    }, {
      name: "i_dc_computed_event_dc_event_id",
      unique: false,
      fields: ["dc_event_id"]
    }, {
      name: "i_dc_computed_event_item_target_id",
      unique: false,
      fields: ["item_target_id"]
    }, {
      name: "i_dc_computed_event_item_target_id",
      unique: false,
      fields: ["item_target_id"]
    }, {
      name: "i_dc_computed_event_item_target_id",
      unique: false,
      fields: ["item_target_id"]
    }]
  };
  const DcComputedEventModel = sequelize.define("dc_computed_event_model", attributes, options);
  return DcComputedEventModel;
};