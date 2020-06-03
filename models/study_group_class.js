const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_group_class_id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_id",
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
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    group_class_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "group_class_type_id",
      autoIncrement: false,
      references: {
        key: "group_class_type_id",
        model: "group_class_types_model"
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
    subject_assignment: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_assignment",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_group_class",
    comment: "",
    indexes: [{
      name: "i_study_group_class_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_group_class_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_group_class_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_group_class_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_study_group_class_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_study_group_class_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const StudyGroupClassModel = sequelize.define("study_group_class_model", attributes, options);
  return StudyGroupClassModel;
};