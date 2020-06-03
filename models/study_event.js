const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_event_id",
      autoIncrement: true
    },
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_definition_id",
      autoIncrement: false,
      references: {
        key: "study_event_definition_id",
        model: "study_event_definition_model"
      }
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_subject_id",
      autoIncrement: false,
      references: {
        key: "study_subject_id",
        model: "study_subject_model"
      }
    },
    location: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "location",
      autoIncrement: false
    },
    sample_ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sample_ordinal",
      autoIncrement: false
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_start",
      autoIncrement: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_end",
      autoIncrement: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status_id",
      autoIncrement: false,
      references: {
        key: "status_id",
        model: "status_model"
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    subject_event_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_event_status_id",
      autoIncrement: false
    },
    start_time_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "start_time_flag",
      autoIncrement: false
    },
    end_time_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "end_time_flag",
      autoIncrement: false
    },
    attestation: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "attestation",
      autoIncrement: false
    },
    workflow_status: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "workflow_status",
      autoIncrement: false
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "removed",
      autoIncrement: false
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "archived",
      autoIncrement: false
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "locked",
      autoIncrement: false
    },
    signed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "signed",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_event",
    comment: "",
    indexes: [{
      name: "duplicate_event_uniqueness_key",
      unique: true,
      fields: ["study_event_definition_id", "study_subject_id", "sample_ordinal"]
    }, {
      name: "duplicate_event_uniqueness_key",
      unique: true,
      fields: ["study_event_definition_id", "study_subject_id", "sample_ordinal"]
    }, {
      name: "duplicate_event_uniqueness_key",
      unique: true,
      fields: ["study_event_definition_id", "study_subject_id", "sample_ordinal"]
    }, {
      name: "i_study_event_date_end",
      unique: false,
      fields: ["date_end"]
    }, {
      name: "i_study_event_date_end",
      unique: false,
      fields: ["date_end"]
    }, {
      name: "i_study_event_date_end",
      unique: false,
      fields: ["date_end"]
    }, {
      name: "i_study_event_date_start",
      unique: false,
      fields: ["date_start"]
    }, {
      name: "i_study_event_date_start",
      unique: false,
      fields: ["date_start"]
    }, {
      name: "i_study_event_date_start",
      unique: false,
      fields: ["date_start"]
    }, {
      name: "i_study_event_sample_ordinal",
      unique: false,
      fields: ["sample_ordinal"]
    }, {
      name: "i_study_event_sample_ordinal",
      unique: false,
      fields: ["sample_ordinal"]
    }, {
      name: "i_study_event_sample_ordinal",
      unique: false,
      fields: ["sample_ordinal"]
    }, {
      name: "i_study_event_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_subject_event_status_id",
      unique: false,
      fields: ["subject_event_status_id"]
    }, {
      name: "i_study_event_subject_event_status_id",
      unique: false,
      fields: ["subject_event_status_id"]
    }, {
      name: "i_study_event_subject_event_status_id",
      unique: false,
      fields: ["subject_event_status_id"]
    }, {
      name: "study_event_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "study_event_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "study_event_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }]
  };
  const StudyEventModel = sequelize.define("study_event_model", attributes, options);
  return StudyEventModel;
};