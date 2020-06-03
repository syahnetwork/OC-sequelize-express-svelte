const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dc_event_id",
      autoIncrement: true,
      references: {
        key: "dc_event_id",
        model: "dc_event_model"
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
    value: {
      type: DataTypes.CHAR(1000),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_substitution_event",
    comment: "",
    indexes: [{
      name: "i_dc_substitution_event_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_substitution_event_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_substitution_event_item_id",
      unique: false,
      fields: ["item_id"]
    }]
  };
  const DcSubstitutionEventModel = sequelize.define("dc_substitution_event_model", attributes, options);
  return DcSubstitutionEventModel;
};