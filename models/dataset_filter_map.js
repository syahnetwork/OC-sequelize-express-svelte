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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dataset_filter_map",
    comment: "",
    indexes: [{
      name: "i_dataset_filter_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_filter_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_filter_map_dataset_id",
      unique: false,
      fields: ["dataset_id"]
    }, {
      name: "i_dataset_filter_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }, {
      name: "i_dataset_filter_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }, {
      name: "i_dataset_filter_map_filter_id",
      unique: false,
      fields: ["filter_id"]
    }, {
      name: "i_dataset_filter_map_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_dataset_filter_map_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_dataset_filter_map_ordinal",
      unique: false,
      fields: ["ordinal"]
    }]
  };
  const DatasetFilterMapModel = sequelize.define("dataset_filter_map_model", attributes, options);
  return DatasetFilterMapModel;
};