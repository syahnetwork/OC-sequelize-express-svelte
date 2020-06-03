const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_id",
      autoIncrement: false,
      references: {
        key: "subject_id",
        model: "subject_model"
      }
    },
    discrepancy_note_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "discrepancy_note_id",
      autoIncrement: false,
      references: {
        key: "discrepancy_note_id",
        model: "discrepancy_note_model"
      }
    },
    column_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "column_name",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dn_subject_map",
    comment: "",
    indexes: [{
      name: "i_dn_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_subject_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_subject_map_subject_id",
      unique: false,
      fields: ["subject_id"]
    }, {
      name: "i_dn_subject_map_subject_id",
      unique: false,
      fields: ["subject_id"]
    }, {
      name: "i_dn_subject_map_subject_id",
      unique: false,
      fields: ["subject_id"]
    }]
  };
  const DnSubjectMapModel = sequelize.define("dn_subject_map_model", attributes, options);
  return DnSubjectMapModel;
};