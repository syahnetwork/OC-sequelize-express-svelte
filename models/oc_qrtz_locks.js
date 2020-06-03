const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    lock_name: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "lock_name",
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
    tableName: "oc_qrtz_locks",
    comment: "",
    indexes: []
  };
  const OcQrtzLocksModel = sequelize.define("oc_qrtz_locks_model", attributes, options);
  return OcQrtzLocksModel;
};