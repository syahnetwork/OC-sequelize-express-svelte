const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_data_id",
      autoIncrement: false,
      references: {
        key: "item_data_id",
        model: "item_data_model"
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
    },
    study_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_subject_id",
      autoIncrement: false
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "activated",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dn_item_data_map",
    comment: "",
    indexes: [{
      name: "i_didm_column_name",
      unique: false,
      fields: ["column_name"]
    }, {
      name: "i_didm_column_name",
      unique: false,
      fields: ["column_name"]
    }, {
      name: "i_didm_column_name",
      unique: false,
      fields: ["column_name"]
    }, {
      name: "i_dn_item_data_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_item_data_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_item_data_map_discrepancy_note_id",
      unique: false,
      fields: ["discrepancy_note_id"]
    }, {
      name: "i_dn_item_data_map_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }, {
      name: "i_dn_item_data_map_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }, {
      name: "i_dn_item_data_map_item_data_id",
      unique: false,
      fields: ["item_data_id"]
    }]
  };
  const DnItemDataMapModel = sequelize.define("dn_item_data_map_model", attributes, options);
  return DnItemDataMapModel;
};