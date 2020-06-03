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
    user_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_name",
      autoIncrement: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_account_id",
      autoIncrement: false,
      references: {
        key: "user_id",
        model: "user_account_model"
      }
    },
    login_attempt_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "login_attempt_date",
      autoIncrement: false
    },
    login_status_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "login_status_code",
      autoIncrement: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    },
    details: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "details",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "audit_user_login",
    comment: "",
    indexes: []
  };
  const AuditUserLoginModel = sequelize.define("audit_user_login_model", attributes, options);
  return AuditUserLoginModel;
};