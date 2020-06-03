const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    filter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "filter_id",
      autoIncrement: false,
      references: {
        key: "filter_id",
        model: "filter_model"
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
    }
  };
  const options = {
    tableName: "filter_crf_version_map",
    comment: "",
    indexes: [{
      name: "i_filter_crf_version_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_filter_crf_version_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_filter_crf_version_map_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_filter_crf_version_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }, {
      name: "i_filter_crf_version_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }, {
      name: "i_filter_crf_version_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }]
  };
  const FilterCrfVersionMapModel = sequelize.define("filter_crf_version_map_model", attributes, options);
  return FilterCrfVersionMapModel;
};