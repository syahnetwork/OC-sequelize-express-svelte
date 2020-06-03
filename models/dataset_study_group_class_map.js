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
      primaryKey: false,
      field: "dataset_id",
      autoIncrement: false,
      references: {
        key: "dataset_id",
        model: "dataset_model"
      }
    },
    study_group_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "dataset_study_group_class_map",
    comment: "",
    indexes: [{
      name: "i_dataset_study_group_class_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_study_group_class_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_study_group_class_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_study_group_class_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }, {
      name: "i_dataset_study_group_class_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }, {
      name: "i_dataset_study_group_class_map_study_group_class_id",
      unique: false,
      fields: ["study_group_class_id"]
    }]
  };
  const DatasetStudyGroupClassMapModel = sequelize.define("dataset_study_group_class_map_model", attributes, options);
  return DatasetStudyGroupClassMapModel;
};