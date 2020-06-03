const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    null_value_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "null_value_type_id",
      autoIncrement: true
    },
    code: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
      autoIncrement: false
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
    definition: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "definition",
      autoIncrement: false
    },
    reference: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "reference",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "null_value_type",
    comment: "",
    indexes: [{
      name: "i_null_value_type_code",
      unique: false,
      fields: ["code"]
    }, {
      name: "i_null_value_type_code",
      unique: false,
      fields: ["code"]
    }, {
      name: "i_null_value_type_code",
      unique: false,
      fields: ["code"]
    }]
  };
  const NullValueTypeModel = sequelize.define("null_value_type_model", attributes, options);
  return NullValueTypeModel;
};