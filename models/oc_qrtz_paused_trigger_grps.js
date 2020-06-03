const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    trigger_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_group",
      autoIncrement: false
    },
    sched_name: {
      type: DataTypes.CHAR(120),
      allowNull: false,
      defaultValue: "TestScheduler",
      comment: null,
      primaryKey: true,
      field: "sched_name",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "oc_qrtz_paused_trigger_grps",
    comment: "",
    indexes: []
  };
  const OcQrtzPausedTriggerGrpsModel = sequelize.define("oc_qrtz_paused_trigger_grps_model", attributes, options);
  return OcQrtzPausedTriggerGrpsModel;
};