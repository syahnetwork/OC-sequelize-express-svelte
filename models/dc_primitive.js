const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_primitive_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dc_primitive_id",
      autoIncrement: true
    },
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "decision_condition_id",
      autoIncrement: false,
      references: {
        key: "decision_condition_id",
        model: "decision_condition_model"
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
    dynamic_value_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dynamic_value_item_id",
      autoIncrement: false,
      references: {
        key: "item_id",
        model: "item_model"
      }
    },
    comparison: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "comparison",
      autoIncrement: false
    },
    constant_value: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "constant_value",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_primitive",
    comment: "",
    indexes: [{
      name: "i_dc_primitive_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_dc_primitive_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_dc_primitive_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_dc_primitive_dynamic_value_item_id",
      unique: false,
      fields: ["dynamic_value_item_id"]
    }, {
      name: "i_dc_primitive_dynamic_value_item_id",
      unique: false,
      fields: ["dynamic_value_item_id"]
    }, {
      name: "i_dc_primitive_dynamic_value_item_id",
      unique: false,
      fields: ["dynamic_value_item_id"]
    }, {
      name: "i_dc_primitive_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_primitive_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_dc_primitive_item_id",
      unique: false,
      fields: ["item_id"]
    }]
  };
  const DcPrimitiveModel = sequelize.define("dc_primitive_model", attributes, options);
  return DcPrimitiveModel;
};