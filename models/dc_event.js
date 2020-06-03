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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    type: {
      type: DataTypes.CHAR(256),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_event",
    comment: "",
    indexes: []
  };
  const DcEventModel = sequelize.define("dc_event_model", attributes, options);
  return DcEventModel;
};