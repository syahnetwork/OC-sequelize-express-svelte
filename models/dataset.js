const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dataset_id",
      autoIncrement: true
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
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    sql_statement: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sql_statement",
      autoIncrement: false
    },
    num_runs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "num_runs",
      autoIncrement: false
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_start",
      autoIncrement: false
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_end",
      autoIncrement: false
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
    date_last_run: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_last_run",
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
    approver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "approver_id",
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
    show_event_location: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_event_location",
      autoIncrement: false
    },
    show_event_start: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_event_start",
      autoIncrement: false
    },
    show_event_end: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_event_end",
      autoIncrement: false
    },
    show_subject_dob: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_subject_dob",
      autoIncrement: false
    },
    show_subject_gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_subject_gender",
      autoIncrement: false
    },
    show_event_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_event_status",
      autoIncrement: false
    },
    show_subject_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_subject_status",
      autoIncrement: false
    },
    show_subject_unique_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_subject_unique_id",
      autoIncrement: false
    },
    show_subject_age_at_event: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_subject_age_at_event",
      autoIncrement: false
    },
    show_crf_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_crf_status",
      autoIncrement: false
    },
    show_crf_version: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_crf_version",
      autoIncrement: false
    },
    show_crf_int_name: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_crf_int_name",
      autoIncrement: false
    },
    show_crf_int_date: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_crf_int_date",
      autoIncrement: false
    },
    show_group_info: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_group_info",
      autoIncrement: false
    },
    show_disc_info: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_disc_info",
      autoIncrement: false
    },
    odm_metadataversion_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "odm_metadataversion_name",
      autoIncrement: false
    },
    odm_metadataversion_oid: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "odm_metadataversion_oid",
      autoIncrement: false
    },
    odm_prior_study_oid: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "odm_prior_study_oid",
      autoIncrement: false
    },
    odm_prior_metadataversion_oid: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "odm_prior_metadataversion_oid",
      autoIncrement: false
    },
    show_secondary_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_secondary_id",
      autoIncrement: false
    },
    dataset_item_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dataset_item_status_id",
      autoIncrement: false,
      references: {
        key: "dataset_item_status_id",
        model: "dataset_item_status_model"
      }
    }
  };
  const options = {
    tableName: "dataset",
    comment: "",
    indexes: [{
      name: "i_dataset_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_dataset_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_dataset_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const DatasetModel = sequelize.define("dataset_model", attributes, options);
  return DatasetModel;
};