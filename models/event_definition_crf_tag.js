const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    path: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "path",
      autoIncrement: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tag_id",
      autoIncrement: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "active",
      autoIncrement: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "owner_id",
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_created",
      autoIncrement: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_updated",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "event_definition_crf_tag",
    comment: "",
    indexes: [{
      name: "duplicate_crfpath_tag_uniqueness_key",
      unique: true,
      fields: ["path", "tag_id"]
    }, {
      name: "duplicate_crfpath_tag_uniqueness_key",
      unique: true,
      fields: ["path", "tag_id"]
    }, {
      name: "duplicate_crfpath_tag_uniqueness_key",
      unique: true,
      fields: ["path", "tag_id"]
    }]
  };
  const EventDefinitionCrfTagModel = sequelize.define("event_definition_crf_tag_model", attributes, options);
  return EventDefinitionCrfTagModel;
};