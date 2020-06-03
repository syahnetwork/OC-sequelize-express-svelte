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
      autoIncrement: false
    },
    trigger_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_group",
      autoIncrement: false
    },
    job_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_name",
      autoIncrement: false,
      references: {
        key: "sched_name",
        model: "oc_qrtz_job_details_model"
      }
    },
    job_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "job_group",
      autoIncrement: false,
      references: {
        key: "sched_name",
        model: "oc_qrtz_job_details_model"
      }
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
    next_fire_time: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "next_fire_time",
      autoIncrement: false
    },
    prev_fire_time: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "prev_fire_time",
      autoIncrement: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priority",
      autoIncrement: false
    },
    trigger_state: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trigger_state",
      autoIncrement: false
    },
    trigger_type: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "trigger_type",
      autoIncrement: false
    },
    start_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "start_time",
      autoIncrement: false
    },
    end_time: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "end_time",
      autoIncrement: false
    },
    calendar_name: {
      type: DataTypes.CHAR(200),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "calendar_name",
      autoIncrement: false
    },
    misfire_instr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "misfire_instr",
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
    sched_name: {
      type: DataTypes.CHAR(120),
      allowNull: false,
      defaultValue: "TestScheduler",
      comment: null,
      primaryKey: true,
      field: "sched_name",
      autoIncrement: false,
      references: {
        key: "sched_name",
        model: "oc_qrtz_job_details_model"
      }
    }
  };
  const options = {
    tableName: "oc_qrtz_triggers",
    comment: "",
    indexes: [{
      name: "idx_qrtz_t_c",
      unique: false,
      fields: ["sched_name", "calendar_name"]
    }, {
      name: "idx_qrtz_t_c",
      unique: false,
      fields: ["sched_name", "calendar_name"]
    }, {
      name: "idx_qrtz_t_c",
      unique: false,
      fields: ["sched_name", "calendar_name"]
    }, {
      name: "idx_qrtz_t_g",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_t_g",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_t_g",
      unique: false,
      fields: ["sched_name", "trigger_group"]
    }, {
      name: "idx_qrtz_t_j",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_t_j",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_t_j",
      unique: false,
      fields: ["sched_name", "job_name", "job_group"]
    }, {
      name: "idx_qrtz_t_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_t_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_t_jg",
      unique: false,
      fields: ["sched_name", "job_group"]
    }, {
      name: "idx_qrtz_t_n_g_state",
      unique: false,
      fields: ["sched_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_n_g_state",
      unique: false,
      fields: ["sched_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_n_g_state",
      unique: false,
      fields: ["sched_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_n_state",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_n_state",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_n_state",
      unique: false,
      fields: ["sched_name", "trigger_name", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_next_fire_time",
      unique: false,
      fields: ["sched_name", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_next_fire_time",
      unique: false,
      fields: ["sched_name", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_next_fire_time",
      unique: false,
      fields: ["sched_name", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_st",
      unique: false,
      fields: ["sched_name", "trigger_state", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_st",
      unique: false,
      fields: ["sched_name", "trigger_state", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_st",
      unique: false,
      fields: ["sched_name", "trigger_state", "next_fire_time"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_state"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_state"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_state"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire_grp",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire_grp",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_nft_st_misfire_grp",
      unique: false,
      fields: ["sched_name", "misfire_instr", "next_fire_time", "trigger_group", "trigger_state"]
    }, {
      name: "idx_qrtz_t_state",
      unique: false,
      fields: ["sched_name", "trigger_state"]
    }, {
      name: "idx_qrtz_t_state",
      unique: false,
      fields: ["sched_name", "trigger_state"]
    }, {
      name: "idx_qrtz_t_state",
      unique: false,
      fields: ["sched_name", "trigger_state"]
    }]
  };
  const OcQrtzTriggersModel = sequelize.define("oc_qrtz_triggers_model", attributes, options);
  return OcQrtzTriggersModel;
};