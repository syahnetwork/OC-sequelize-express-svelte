const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_id",
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
    description: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    units: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "units",
      autoIncrement: false
    },
    phi_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phi_status",
      autoIncrement: false
    },
    item_data_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_data_type_id",
      autoIncrement: false,
      references: {
        key: "item_data_type_id",
        model: "item_data_type_model"
      }
    },
    item_reference_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_reference_type_id",
      autoIncrement: false,
      references: {
        key: "item_reference_type_id",
        model: "item_reference_type_model"
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
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false,
      unique: "uniq_item_oc_oid"
    },
    brief_description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "brief_description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item",
    comment: "",
    indexes: [{
      name: "i_item_item_data_type_id",
      unique: false,
      fields: ["item_data_type_id"]
    }, {
      name: "i_item_item_data_type_id",
      unique: false,
      fields: ["item_data_type_id"]
    }, {
      name: "i_item_item_data_type_id",
      unique: false,
      fields: ["item_data_type_id"]
    }, {
      name: "i_item_item_reference_type_id",
      unique: false,
      fields: ["item_reference_type_id"]
    }, {
      name: "i_item_item_reference_type_id",
      unique: false,
      fields: ["item_reference_type_id"]
    }, {
      name: "i_item_item_reference_type_id",
      unique: false,
      fields: ["item_reference_type_id"]
    }, {
      name: "i_item_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_item_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_item_name",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_item_units",
      unique: false,
      fields: ["units"]
    }, {
      name: "i_item_units",
      unique: false,
      fields: ["units"]
    }, {
      name: "i_item_units",
      unique: false,
      fields: ["units"]
    }]
  };
  const ItemModel = sequelize.define("item_model", attributes, options);
  return ItemModel;
};