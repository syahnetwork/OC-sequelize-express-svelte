const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    event_definition_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "event_definition_crf_id",
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
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
      autoIncrement: false,
      references: {
        key: "study_id",
        model: "study_model"
      }
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_id",
      autoIncrement: false,
      references: {
        key: "crf_id",
        model: "crf_model"
      }
    },
    required_crf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "required_crf",
      autoIncrement: false
    },
    double_entry: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "double_entry",
      autoIncrement: false
    },
    require_all_text_filled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "require_all_text_filled",
      autoIncrement: false
    },
    decision_conditions: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "decision_conditions",
      autoIncrement: false
    },
    null_values: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "null_values",
      autoIncrement: false
    },
    default_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "default_version_id",
      autoIncrement: false
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
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATEONLY,
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    electronic_signature: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "electronic_signature",
      autoIncrement: false
    },
    hide_crf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hide_crf",
      autoIncrement: false
    },
    source_data_verification_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "source_data_verification_code",
      autoIncrement: false
    },
    selected_version_ids: {
      type: DataTypes.CHAR(150),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "selected_version_ids",
      autoIncrement: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_id",
      autoIncrement: false
    },
    participant_form: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "participant_form",
      autoIncrement: false
    },
    allow_anonymous_submission: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "allow_anonymous_submission",
      autoIncrement: false
    },
    submission_url: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "submission_url",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "event_definition_crf",
    comment: "",
    indexes: [{
      name: "event_definition_crf_idx_parent_null",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_parent_null",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_parent_null",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_parent_zero",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_parent_zero",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_parent_zero",
      unique: false,
      fields: []
    }, {
      name: "event_definition_crf_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "event_definition_crf_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "event_definition_crf_idx_study_event_definition",
      unique: false,
      fields: ["study_event_definition_id"]
    }, {
      name: "i_event_definition_crf_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_event_definition_crf_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_event_definition_crf_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_event_definition_crf_default_version_id",
      unique: false,
      fields: ["default_version_id"]
    }, {
      name: "i_event_definition_crf_default_version_id",
      unique: false,
      fields: ["default_version_id"]
    }, {
      name: "i_event_definition_crf_default_version_id",
      unique: false,
      fields: ["default_version_id"]
    }, {
      name: "i_event_definition_crf_electronic_signature",
      unique: false,
      fields: ["electronic_signature"]
    }, {
      name: "i_event_definition_crf_electronic_signature",
      unique: false,
      fields: ["electronic_signature"]
    }, {
      name: "i_event_definition_crf_electronic_signature",
      unique: false,
      fields: ["electronic_signature"]
    }, {
      name: "i_event_definition_crf_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_event_definition_crf_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_event_definition_crf_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_event_definition_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_definition_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_definition_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_event_definition_crf_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_event_definition_crf_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_event_definition_crf_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const EventDefinitionCrfModel = sequelize.define("event_definition_crf_model", attributes, options);
  return EventDefinitionCrfModel;
};