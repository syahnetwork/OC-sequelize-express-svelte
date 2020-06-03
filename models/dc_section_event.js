const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dc_event_id",
      autoIncrement: true,
      references: {
        key: "dc_event_id",
        model: "dc_event_model"
      }
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "section_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_section_event",
    comment: "",
    indexes: [{
      name: "i_dc_section_event_section_id",
      unique: false,
      fields: ["section_id"]
    }, {
      name: "i_dc_section_event_section_id",
      unique: false,
      fields: ["section_id"]
    }, {
      name: "i_dc_section_event_section_id",
      unique: false,
      fields: ["section_id"]
    }]
  };
  const DcSectionEventModel = sequelize.define("dc_section_event_model", attributes, options);
  return DcSectionEventModel;
};