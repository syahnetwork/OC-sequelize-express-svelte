const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_group_id",
      autoIncrement: true
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
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
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
    }
  };
  const options = {
    tableName: "study_group",
    comment: "",
    indexes: []
  };
  const StudyGroupModel = sequelize.define("study_group_model", attributes, options);
  return StudyGroupModel;
};