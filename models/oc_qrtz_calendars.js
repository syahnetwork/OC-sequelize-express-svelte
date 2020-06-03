const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    calendar_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "calendar_name",
      autoIncrement: false
    },
    calendar: {
      type: bytea,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "calendar",
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
    tableName: "oc_qrtz_calendars",
    comment: "",
    indexes: []
  };
  const OcQrtzCalendarsModel = sequelize.define("oc_qrtz_calendars_model", attributes, options);
  return OcQrtzCalendarsModel;
};