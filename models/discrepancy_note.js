const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    discrepancy_note_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "discrepancy_note_id",
      autoIncrement: true
    },
    description: {
      type: DataTypes.CHAR(2040),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    discrepancy_note_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "discrepancy_note_type_id",
      autoIncrement: false,
      references: {
        key: "discrepancy_note_type_id",
        model: "discrepancy_note_type_model"
      }
    },
    resolution_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "resolution_status_id",
      autoIncrement: false,
      references: {
        key: "resolution_status_id",
        model: "resolution_status_model"
      }
    },
    detailed_notes: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "detailed_notes",
      autoIncrement: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
    },
    parent_dn_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_dn_id",
      autoIncrement: false
    },
    entity_type: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "entity_type",
      autoIncrement: false
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
    assigned_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "assigned_user_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
    },
    thread_uuid: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "thread_uuid",
      autoIncrement: false
    },
    thread_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "thread_number",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "discrepancy_note",
    comment: "",
    indexes: [{
      name: "discrepancy_note_idx_parent",
      unique: false,
      fields: []
    }, {
      name: "discrepancy_note_idx_parent",
      unique: false,
      fields: []
    }, {
      name: "discrepancy_note_idx_parent",
      unique: false,
      fields: []
    }, {
      name: "i_discrepancy_note_discrepancy_note_type_id",
      unique: false,
      fields: ["discrepancy_note_type_id"]
    }, {
      name: "i_discrepancy_note_discrepancy_note_type_id",
      unique: false,
      fields: ["discrepancy_note_type_id"]
    }, {
      name: "i_discrepancy_note_discrepancy_note_type_id",
      unique: false,
      fields: ["discrepancy_note_type_id"]
    }, {
      name: "i_discrepancy_note_entity_type",
      unique: false,
      fields: ["entity_type"]
    }, {
      name: "i_discrepancy_note_entity_type",
      unique: false,
      fields: ["entity_type"]
    }, {
      name: "i_discrepancy_note_entity_type",
      unique: false,
      fields: ["entity_type"]
    }, {
      name: "i_discrepancy_note_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_discrepancy_note_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_discrepancy_note_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_discrepancy_note_parent_dn_id",
      unique: false,
      fields: ["parent_dn_id"]
    }, {
      name: "i_discrepancy_note_parent_dn_id",
      unique: false,
      fields: ["parent_dn_id"]
    }, {
      name: "i_discrepancy_note_parent_dn_id",
      unique: false,
      fields: ["parent_dn_id"]
    }, {
      name: "i_discrepancy_note_resolution_status_id",
      unique: false,
      fields: ["resolution_status_id"]
    }, {
      name: "i_discrepancy_note_resolution_status_id",
      unique: false,
      fields: ["resolution_status_id"]
    }, {
      name: "i_discrepancy_note_resolution_status_id",
      unique: false,
      fields: ["resolution_status_id"]
    }, {
      name: "i_discrepancy_note_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_discrepancy_note_study_id",
      unique: false,
      fields: ["study_id"]
    }, {
      name: "i_discrepancy_note_study_id",
      unique: false,
      fields: ["study_id"]
    }]
  };
  const DiscrepancyNoteModel = sequelize.define("discrepancy_note_model", attributes, options);
  return DiscrepancyNoteModel;
};