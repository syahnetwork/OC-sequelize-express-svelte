const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    first_name: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "first_name",
      autoIncrement: false
    },
    last_name: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    phone: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phone",
      autoIncrement: false
    },
    first_name_for_search_use: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "first_name_for_search_use",
      autoIncrement: false
    },
    last_name_for_search_use: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name_for_search_use",
      autoIncrement: false
    },
    identifier_for_search_use: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "identifier_for_search_use",
      autoIncrement: false
    },
    identifier: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "identifier",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_subject_detail",
    comment: "",
    indexes: []
  };
  const StudySubjectDetailModel = sequelize.define("study_subject_detail_model", attributes, options);
  return StudySubjectDetailModel;
};