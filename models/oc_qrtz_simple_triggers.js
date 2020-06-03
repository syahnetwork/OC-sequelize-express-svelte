const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    trigger_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_name",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    },
    trigger_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_group",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    },
    repeat_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeat_count",
      autoIncrement: false
    },
    repeat_interval: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeat_interval",
      autoIncrement: false
    },
    times_triggered: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "times_triggered",
      autoIncrement: false
    },
    sched_name: {
      type: DataTypes.CHAR(120),
      allowNull: false,
      defaultValue: "TestScheduler",
      comment: null,
      primaryKey: true,
      field: "sched_name",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    }
  };
  const options = {
    tableName: "oc_qrtz_simple_triggers",
    comment: "",
    indexes: []
  };
  const OcQrtzSimpleTriggersModel = sequelize.define("oc_qrtz_simple_triggers_model", attributes, options);
  return OcQrtzSimpleTriggersModel;
};