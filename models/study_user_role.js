const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    role_name: {
      type: DataTypes.CHAR(40),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "role_name",
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
    update_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_id",
      autoIncrement: false
    },
    user_name: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_name",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study_user_role",
    comment: "",
    indexes: [{
      name: "i_study_user_role_user_name",
      unique: false,
      fields: ["user_name"]
    }]
  };
  const StudyUserRoleModel = sequelize.define("study_user_role_model", attributes, options);
  return StudyUserRoleModel;
};