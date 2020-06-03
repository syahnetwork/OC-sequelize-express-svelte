const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_summary_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dc_summary_event_id",
      autoIncrement: false,
      references: {
        key: "dc_summary_event_id",
        model: "dc_computed_event_model"
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_summary_item_map",
    comment: "",
    indexes: [{
      name: "i_dc_summary_item_map_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_summary_item_map_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_summary_item_map_item_id",
      unique: false,
      fields: ["item_id"]
    }]
  };
  const DcSummaryItemMapModel = sequelize.define("dc_summary_item_map_model", attributes, options);
  return DcSummaryItemMapModel;
};