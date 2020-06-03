const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "decision_condition_id",
      autoIncrement: true
    },
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      type: DataTypes.CHAR(1000),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "label",
      autoIncrement: false
    },
    comments: {
      type: DataTypes.CHAR(3000),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "comments",
      autoIncrement: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "quantity",
      autoIncrement: false
    },
    type: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type",
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
    }
  };
  const options = {
    tableName: "decision_condition",
    comment: "",
    indexes: [{
      name: "i_decision_condition_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_decision_condition_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_decision_condition_crf_version_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_decision_condition_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_decision_condition_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_decision_condition_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const DecisionConditionModel = sequelize.define("decision_condition_model", attributes, options);
  return DecisionConditionModel;
};