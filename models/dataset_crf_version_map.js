const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    event_definition_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_definition_crf_id",
      autoIncrement: false,
      references: {
        key: "event_definition_crf_id",
        model: "event_definition_crf_model"
      }
    }
  };
  const options = {
    tableName: "dataset_crf_version_map",
    comment: "",
    indexes: [{
      name: "i_dataset_crf_version_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_crf_version_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_crf_version_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_crf_version_map_event_definition_crf_id",
      unique: false,
      fields: ["event_definition_crf_id"]
    }, {
      name: "i_dataset_crf_version_map_event_definition_crf_id",
      unique: false,
      fields: ["event_definition_crf_id"]
    }, {
      name: "i_dataset_crf_version_map_event_definition_crf_id",
      unique: false,
      fields: ["event_definition_crf_id"]
    }]
  };
  const DatasetCrfVersionMapModel = sequelize.define("dataset_crf_version_map_model", attributes, options);
  return DatasetCrfVersionMapModel;
};