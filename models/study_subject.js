const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_subject_id",
      autoIncrement: true
    },
    label: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "label",
      autoIncrement: false
    },
    secondary_label: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "secondary_label",
      autoIncrement: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_id",
      autoIncrement: false,
      references: {
        key: "subject_id",
        model: "subject_model"
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
    enrollment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enrollment_date",
      autoIncrement: false
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false,
      unique: "uniq_study_subject_oid"
    },
    time_zone: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: "",
      comment: null,
      primaryKey: false,
      field: "time_zone",
      autoIncrement: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
    },
    user_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_status_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_subject",
    comment: "",
    indexes: [{
      name: "i_study_subject_label",
      unique: false,
      fields: ["label"]
    }, {
      name: "i_study_subject_label",
      unique: false,
      fields: ["label"]
    }, {
      name: "i_study_subject_label",
      unique: false,
      fields: ["label"]
    }, {
      name: "i_study_subject_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_subject_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_subject_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "study_subject_idx_study",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "study_subject_idx_study",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "study_subject_idx_study",
      unique: false,
      fields: ["study_id"]
    }
    ]
  };
  const StudySubjectModel = sequelize.define("study_subject", attributes, options);
  return StudySubjectModel;
};