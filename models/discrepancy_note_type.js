const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    discrepancy_note_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "discrepancy_note_type_id",
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
    tableName: "discrepancy_note_type",
    comment: "",
    indexes: []
  };
  const DiscrepancyNoteTypeModel = sequelize.define("discrepancy_note_type_model", attributes, options);
  return DiscrepancyNoteTypeModel;
};