const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_parameter_value_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_parameter_value_id",
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
    value: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
      autoIncrement: false
    },
    parameter: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parameter",
      autoIncrement: false,
      references: {
        key: "handle",
        model: "study_parameter_model"
      }
    }
  };
  const options = {
    tableName: "study_parameter_value",
    comment: "",
    indexes: [{
      name: "i_study_parameter_value_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_study_parameter_value_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_study_parameter_value_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const StudyParameterValueModel = sequelize.define("study_parameter_value_model", attributes, options);
  return StudyParameterValueModel;
};