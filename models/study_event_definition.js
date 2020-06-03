const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_event_definition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_event_definition_id",
      autoIncrement: true
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
    name: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    description: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    repeating: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "repeating",
      autoIncrement: false
    },
    type: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type",
      autoIncrement: false
    },
    category: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "category",
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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status_id",
      autoIncrement: false,
      references: {
        key: "status_id",
        model: "status_model"
      }
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    },
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false,
      unique: "uniq_study_event_def_oid"
    }
  };
  const options = {
    tableName: "study_event_definition",
    comment: "",
    indexes: [{
      name: "i_study_event_definition_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_definition_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_definition_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_event_definition_update_id",
      unique: false,
      fields: ["update_id"]
    }, {
      name: "i_study_event_definition_update_id",
      unique: false,
      fields: ["update_id"]
    }, {
      name: "i_study_event_definition_update_id",
      unique: false,
      fields: ["update_id"]
    }]
  };
  const StudyEventDefinitionModel = sequelize.define("study_event_definition_model", attributes, options);
  return StudyEventDefinitionModel;
};