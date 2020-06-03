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
    blob_data: {
      type: bytea,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "blob_data",
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
    tableName: "oc_qrtz_blob_triggers",
    comment: "",
    indexes: []
  };
  const OcQrtzBlobTriggersModel = sequelize.define("oc_qrtz_blob_triggers_model", attributes, options);
  return OcQrtzBlobTriggersModel;
};