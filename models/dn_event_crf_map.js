const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_id",
      autoIncrement: false,
      references: {
        key: "event_crf_id",
        model: "event_crf_model"
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
    tableName: "dn_event_crf_map",
    comment: "",
    indexes: [{
      name: "i_dn_event_crf_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_event_crf_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_event_crf_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_event_crf_map_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_dn_event_crf_map_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_dn_event_crf_map_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }]
  };
  const DnEventCrfMapModel = sequelize.define("dn_event_crf_map_model", attributes, options);
  return DnEventCrfMapModel;
};