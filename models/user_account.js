const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "user_id",
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_name",
      autoIncrement: false,
      unique: "uniq_user_account_user_name"
    },
    passwd: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "passwd",
      autoIncrement: false
    },
    first_name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "first_name",
      autoIncrement: false
    },
    last_name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(120),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    active_study: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "active_study",
      autoIncrement: false
    },
    institutional_affiliation: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "institutional_affiliation",
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
    date_lastvisit: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_lastvisit",
      autoIncrement: false
    },
    passwd_timestamp: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "passwd_timestamp",
      autoIncrement: false
    },
    passwd_challenge_question: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "passwd_challenge_question",
      autoIncrement: false
    },
    passwd_challenge_answer: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "passwd_challenge_answer",
      autoIncrement: false
    },
    phone: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phone",
      autoIncrement: false
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_type_id",
      autoIncrement: false,
      references: {
        key: "user_type_id",
        model: "user_type_model"
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
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enabled",
      autoIncrement: false
    },
    account_non_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "account_non_locked",
      autoIncrement: false
    },
    lock_counter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "lock_counter",
      autoIncrement: false
    },
    run_webservices: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "run_webservices",
      autoIncrement: false
    },
    access_code: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "access_code",
      autoIncrement: false
    },
    time_zone: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: "",
      comment: null,
      primaryKey: false,
      field: "time_zone",
      autoIncrement: false
    },
    enable_api_key: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "enable_api_key",
      autoIncrement: false
    },
    api_key: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "api_key",
      autoIncrement: false
    },
    user_uuid: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_uuid",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_account",
    comment: "",
    indexes: [{
      name: "i_user_account_user_name",
      unique: false,
      fields: ["user_name"]
    }]
  };
  const UserAccountModel = sequelize.define("user_account_model", attributes, options);
  return UserAccountModel;
};