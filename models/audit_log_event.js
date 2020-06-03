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
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
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
    entity_name: {
      type: DataTypes.CHAR(500),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "entity_name",
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
    audit_log_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "audit_log_event_type_id",
      autoIncrement: false
    },
    old_value: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "old_value",
      autoIncrement: false
    },
    new_value: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "new_value",
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
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_id",
      autoIncrement: false
    },
    event_crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_version_id",
      autoIncrement: false
    },
    item_data_repeat_key: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_data_repeat_key",
      autoIncrement: false
    },
    instance_id: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "instance_id",
      autoIncrement: false
    },
    details: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "details",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "audit_log_event",
    comment: "",
    indexes: [{
      name: "i_audit_log_event_audit_log_event_type_id",
      unique: false,
      fields: ["audit_log_event_type_id"]
    }, {
      name: "i_audit_log_event_audit_log_event_type_id",
      unique: false,
      fields: ["audit_log_event_type_id"]
    }, {
      name: "i_audit_log_event_audit_log_event_type_id",
      unique: false,
      fields: ["audit_log_event_type_id"]
    }, {
      name: "i_audit_log_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_log_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_log_event_audit_table",
      unique: false,
      fields: ["audit_table"]
    }, {
      name: "i_audit_log_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_log_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_log_event_entity_id",
      unique: false,
      fields: ["entity_id"]
    }, {
      name: "i_audit_log_event_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_audit_log_event_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_audit_log_event_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_audit_log_event_event_crf_version_id",
      unique: false,
      fields: ["event_crf_version_id"]
    }, {
      name: "i_audit_log_event_event_crf_version_id",
      unique: false,
      fields: ["event_crf_version_id"]
    }, {
      name: "i_audit_log_event_event_crf_version_id",
      unique: false,
      fields: ["event_crf_version_id"]
    }, {
      name: "i_audit_log_event_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_audit_log_event_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_audit_log_event_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_audit_log_event_user_id",
      unique: false,
      fields: ["user_id"]
    }, {
      name: "i_audit_log_event_user_id",
      unique: false,
      fields: ["user_id"]
    }, {
      name: "i_audit_log_event_user_id",
      unique: false,
      fields: ["user_id"]
    }]
  };
  const AuditLogEventModel = sequelize.define("audit_log_event_model", attributes, options);
  return AuditLogEventModel;
};