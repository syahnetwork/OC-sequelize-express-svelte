const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    subject_group_map_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "subject_group_map_id",
      autoIncrement: true
    },
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_group_class_id",
      autoIncrement: false,
      references: {
        key: "study_group_class_id",
        model: "study_group_class_model"
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
    study_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_group_id",
      autoIncrement: false,
      references: {
        key: "study_group_id",
        model: "study_group_model"
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
    notes: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "notes",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "subject_group_map",
    comment: "",
    indexes: [{
      name: "i_subject_group_map_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_subject_group_map_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_subject_group_map_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_subject_group_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }, {
      name: "i_subject_group_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }, {
      name: "i_subject_group_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }]
  };
  const SubjectGroupMapModel = sequelize.define("subject_group_map_model", attributes, options);
  return SubjectGroupMapModel;
};