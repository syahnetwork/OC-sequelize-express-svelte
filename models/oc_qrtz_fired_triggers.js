const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    entry_id: {
      type: DataTypes.CHAR(95),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "entry_id",
      autoIncrement: false
    },
    trigger_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trigger_name",
      autoIncrement: false
    },
    trigger_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trigger_group",
      autoIncrement: false
    },
    instance_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "instance_name",
      autoIncrement: false
    },
    fired_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fired_time",
      autoIncrement: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priority",
      autoIncrement: false
    },
    state: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state",
      autoIncrement: false
    },
    job_name: {
      type: DataTypes.CHAR(200),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_name",
      autoIncrement: false
    },
    job_group: {
      type: DataTypes.CHAR(200),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_group",
      autoIncrement: false
    },
    is_stateful: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "is_stateful",
      autoIncrement: false
    },
    requests_recovery: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "requests_recovery",
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
    },
    sched_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sched_time",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "oc_qrtz_fired_triggers",
    comment: "",
    indexes: [{
      name: "idx_qrtz_ft_inst_job_req_rcvry",
      unique: false,
      fields: ["sched_name", "instance_name", "requests_recovery"]
    }, {
      name: "idx_qrtz_ft_inst_job_req_rcvry",
      unique: false,
      fields: ["sched_name", "instance_name", "requests_recovery"]
    }, {
      name: "idx_qrtz_ft_inst_job_req_rcvry",
      unique: false,
      fields: ["sched_name", "instance_name", "requests_recovery"]
    }, {
      name: "idx_qrtz_ft_j_g",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_j_g",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_j_g",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_ft_t_g",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_t_g",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_t_g",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_tg",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_tg",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_tg",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_ft_trig_inst_name",
      unique: false,
      fields: ["sched_name", "instance_name"]
    }, {
      name: "idx_qrtz_ft_trig_inst_name",
      unique: false,
      fields: ["sched_name", "instance_name"]
    }, {
      name: "idx_qrtz_ft_trig_inst_name",
      unique: false,
      fields: ["sched_name", "instance_name"]
    }]
  };
  const OcQrtzFiredTriggersModel = sequelize.define("oc_qrtz_fired_triggers_model", attributes, options);
  return OcQrtzFiredTriggersModel;
};