const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    instance_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "instance_name",
      autoIncrement: false
    },
    last_checkin_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_checkin_time",
      autoIncrement: false
    },
    checkin_interval: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "checkin_interval",
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
    tableName: "oc_qrtz_scheduler_state",
    comment: "",
    indexes: []
  };
  const OcQrtzSchedulerStateModel = sequelize.define("oc_qrtz_scheduler_state_model", attributes, options);
  return OcQrtzSchedulerStateModel;
};