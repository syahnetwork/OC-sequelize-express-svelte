const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "section_id",
      autoIncrement: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false,
      references: {
        key: "crf_version_id",
        model: "crf_version_model"
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
    label: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "label",
      autoIncrement: false
    },
    title: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "title",
      autoIncrement: false
    },
    subtitle: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subtitle",
      autoIncrement: false
    },
    instructions: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "instructions",
      autoIncrement: false
    },
    page_number_label: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "page_number_label",
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
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_id",
      autoIncrement: false
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
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    borders: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "borders",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "section",
    comment: "",
    indexes: [{
      name: "i_section_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_section_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_section_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_section_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_section_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_section_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_section_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_section_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_section_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const SectionModel = sequelize.define("section_model", attributes, options);
  return SectionModel;
};