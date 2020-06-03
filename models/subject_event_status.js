const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    subject_event_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "subject_event_status_id",
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
    }
  };
  const options = {
    tableName: "subject_event_status",
    comment: "",
    indexes: []
  };
  const SubjectEventStatusModel = sequelize.define("subject_event_status_model", attributes, options);
  return SubjectEventStatusModel;
};