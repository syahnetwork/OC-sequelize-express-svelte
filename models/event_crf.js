const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "event_crf_id",
      autoIncrement: true
    },
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_id",
      autoIncrement: false,
      references: {
        key: "study_event_id",
        model: "study_event_model"
      }
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false,
      references: {
        key: "crf_version_id",
        model: "crf_version_model"
      }
    },
    date_interviewed: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_interviewed",
      autoIncrement: false
    },
    interviewer_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "interviewer_name",
      autoIncrement: false
    },
    completion_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "completion_status_id",
      autoIncrement: false,
      references: {
        key: "completion_status_id",
        model: "completion_status_model"
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
    annotations: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "annotations",
      autoIncrement: false
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_completed",
      autoIncrement: false
    },
    validator_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "validator_id",
      autoIncrement: false
    },
    date_validate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_validate",
      autoIncrement: false
    },
    date_validate_completed: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_validate_completed",
      autoIncrement: false
    },
    validator_annotations: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "validator_annotations",
      autoIncrement: false
    },
    validate_string: {
      type: DataTypes.CHAR(256),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "validate_string",
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
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
    electronic_signature_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "electronic_signature_status",
      autoIncrement: false
    },
    old_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "old_status_id",
      autoIncrement: false
    },
    sdv_update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "sdv_update_id",
      autoIncrement: false
    },
    form_layout_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "form_layout_id",
      autoIncrement: false
    },
    sdv_status: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sdv_status",
      autoIncrement: false
    },
    date_last_sdv_verified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_last_sdv_verified",
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
    }
  };
  const options = {
    tableName: "event_crf",
    comment: "",
    indexes: [{
      name: "duplicate_event_crf_uniqueness_key",
      unique: true,
      fields: ["study_event_id", "study_subject_id", "form_layout_id"]
    }, {
      name: "duplicate_event_crf_uniqueness_key",
      unique: true,
      fields: ["study_event_id", "study_subject_id", "form_layout_id"]
    }, {
      name: "duplicate_event_crf_uniqueness_key",
      unique: true,
      fields: ["study_event_id", "study_subject_id", "form_layout_id"]
    }, {
      name: "i_event_crf_completion_status_id",
      unique: false,
      fields: ["completion_status_id"]
    }, {
      name: "i_event_crf_completion_status_id",
      unique: false,
      fields: ["completion_status_id"]
    }, {
      name: "i_event_crf_completion_status_id",
      unique: false,
      fields: ["completion_status_id"]
    }, {
      name: "i_event_crf_date_interviewed",
      unique: false,
      fields: ["date_interviewed"]
    }, {
      name: "i_event_crf_date_interviewed",
      unique: false,
      fields: ["date_interviewed"]
    }, {
      name: "i_event_crf_date_interviewed",
      unique: false,
      fields: ["date_interviewed"]
    }, {
      name: "i_event_crf_interviewer_name",
      unique: false,
      fields: ["interviewer_name"]
    }, {
      name: "i_event_crf_interviewer_name",
      unique: false,
      fields: ["interviewer_name"]
    }, {
      name: "i_event_crf_interviewer_name",
      unique: false,
      fields: ["interviewer_name"]
    }, {
      name: "i_event_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_event_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_event_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_event_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_crf_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_event_crf_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_event_crf_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_event_crf_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }, {
      name: "i_event_crf_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }, {
      name: "i_event_crf_study_subject_id",
      unique: false,
      fields: ["study_subject_id"]
    }, {
      name: "i_event_crf_validator_id",
      unique: false,
      fields: ["validator_id"]
    }, {
      name: "i_event_crf_validator_id",
      unique: false,
      fields: ["validator_id"]
    }, {
      name: "i_event_crf_validator_id",
      unique: false,
      fields: ["validator_id"]
    }]
  };
  const EventCrfModel = sequelize.define("event_crf_model", attributes, options);
  return EventCrfModel;
};