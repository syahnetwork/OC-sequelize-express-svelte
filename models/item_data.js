const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_data_id",
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_id",
      autoIncrement: false,
      references: {
        key: "item_id",
        model: "item_model"
      }
    },
    event_crf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_crf_id",
      autoIncrement: false,
      references: {
        key: "event_crf_id",
        model: "event_crf_model"
      }
    },
    value: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
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
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "deleted",
      autoIncrement: false
    },
    instance_id: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "instance_id",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_data",
    comment: "",
    indexes: [{
      name: "i_item_data_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_item_data_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_item_data_event_crf_id",
      unique: false,
      fields: ["event_crf_id"]
    }, {
      name: "i_item_data_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_item_data_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_item_data_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_item_data_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_item_data_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_item_data_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "pk_item_data_new",
      unique: true,
      fields: ["item_id", "event_crf_id", "ordinal"]
    }, {
      name: "pk_item_data_new",
      unique: true,
      fields: ["item_id", "event_crf_id", "ordinal"]
    }, {
      name: "pk_item_data_new",
      unique: true,
      fields: ["item_id", "event_crf_id", "ordinal"]
    }]
  };
  const ItemDataModel = sequelize.define("item_data_model", attributes, options);
  return ItemDataModel;
};