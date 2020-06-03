const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "audit_id",
      autoIncrement: false,
      references: {
        key: "audit_id",
        model: "audit_event_model"
      }
    },
    column_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "column_name",
      autoIncrement: false
    },
    old_value: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "old_value",
      autoIncrement: false
    },
    new_value: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "new_value",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "audit_event_values",
    comment: "",
    indexes: []
  };
  const AuditEventValuesModel = sequelize.define("audit_event_values_model", attributes, options);
  return AuditEventValuesModel;
};