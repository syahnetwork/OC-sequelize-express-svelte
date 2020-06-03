const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    audit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "audit_id",
      autoIncrement: true
    },
    audit_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "audit_date",
      autoIncrement: false
    },
    audit_table: {
      type: DataTypes.CHAR(500),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "audit_table",
      autoIncrement: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "entity_id",
      autoIncrement: false
    },
    reason_for_change: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "reason_for_change",
      autoIncrement: false
    },
    action_message: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "action_message",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "audit_event",
    comment: "",
    indexes: [{
      name: "i_audit_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_event_user_id",
      unique: false,
      fields: ["user_id"]
    }, {
      name: "i_audit_event_user_id",
      unique: false,
      fields: ["user_id"]
    }, {
      name: "i_audit_event_user_id",
      unique: false,
      fields: ["user_id"]
    }]
  };
  const AuditEventModel = sequelize.define("audit_event_model", attributes, options);
  return AuditEventModel;
};