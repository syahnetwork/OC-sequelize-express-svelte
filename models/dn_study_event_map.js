const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_event_id",
      autoIncrement: false,
      references: {
        key: "study_event_id",
        model: "study_event_model"
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
    tableName: "dn_study_event_map",
    comment: "",
    indexes: [{
      name: "i_dn_study_event_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_event_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_event_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_study_event_map_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_dn_study_event_map_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }, {
      name: "i_dn_study_event_map_study_event_id",
      unique: false,
      fields: ["study_event_id"]
    }]
  };
  const DnStudyEventMapModel = sequelize.define("dn_study_event_map_model", attributes, options);
  return DnStudyEventMapModel;
};