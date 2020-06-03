const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    crf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "crf_id",
      autoIncrement: true
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
      type: DataTypes.CHAR(2048),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
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
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false,
      unique: "uniq_crf_oc_oid"
    },
    source_study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "source_study_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "crf",
    comment: "",
    indexes: [{
      name: "i_crf_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_crf_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_crf_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const CrfModel = sequelize.define("crf_model", attributes, options);
  return CrfModel;
};