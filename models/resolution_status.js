const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    resolution_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "resolution_status_id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "resolution_status",
    comment: "",
    indexes: []
  };
  const ResolutionStatusModel = sequelize.define("resolution_status_model", attributes, options);
  return ResolutionStatusModel;
};