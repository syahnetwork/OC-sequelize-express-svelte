const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    job_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "job_name",
      autoIncrement: false
    },
    job_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "job_group",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(250),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    job_class_name: {
      type: DataTypes.CHAR(250),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_class_name",
      autoIncrement: false
    },
    is_durable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_durable",
      autoIncrement: false
    },
    requests_recovery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "requests_recovery",
      autoIncrement: false
    },
    job_data: {
      type: bytea,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_data",
      autoIncrement: false
    },
    is_nonconcurrent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_nonconcurrent",
      autoIncrement: false
    },
    is_update_data: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_update_data",
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
    tableName: "oc_qrtz_job_details",
    comment: "",
    indexes: [{
      name: "idx_qrtz_j_grp",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_j_grp",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_j_grp",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_j_req_recovery",
      unique: false,
      fields: ["sched_name", "requests_recovery"]
    }, {
      name: "idx_qrtz_j_req_recovery",
      unique: false,
      fields: ["sched_name", "requests_recovery"]
    }, {
      name: "idx_qrtz_j_req_recovery",
      unique: false,
      fields: ["sched_name", "requests_recovery"]
    }]
  };
  const OcQrtzJobDetailsModel = sequelize.define("oc_qrtz_job_details_model", attributes, options);
  return OcQrtzJobDetailsModel;
};