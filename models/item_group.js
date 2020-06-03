const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_group_id",
      autoIncrement: true
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
      unique: "uniq_item_group_oc_oid"
    },
    layout_group_path: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "layout_group_path",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_group",
    comment: "",
    indexes: [{
      name: "i_item_group_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_item_group_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_item_group_crf_id",
      unique: false,
      fields: ["crf_id"]
    }, {
      name: "i_item_group_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_item_group_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_item_group_status_id",
      unique: false,
      fields: ["status_id"]
    }]
  };
  const ItemGroupModel = sequelize.define("item_group_model", attributes, options);
  return ItemGroupModel;
};