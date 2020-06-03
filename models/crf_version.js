const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "crf_version_id",
      autoIncrement: true
    },
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_id",
      autoIncrement: false,
      references: {
        key: "crf_id",
        model: "crf_model"
      }
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
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    revision_notes: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "revision_notes",
      autoIncrement: false
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
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
      unique: "uniq_crf_version_oc_oid"
    },
    xform: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "xform",
      autoIncrement: false
    },
    xform_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "xform_name",
      autoIncrement: false
    },
    url: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "url",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "crf_version",
    comment: "",
    indexes: [{
      name: "crf_version_idx_crf",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "crf_version_idx_crf",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "crf_version_idx_crf",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_crf_version_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_version_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_version_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_version_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_crf_version_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_crf_version_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const CrfVersionModel = sequelize.define("crf_version_model", attributes, options);
  return CrfVersionModel;
};