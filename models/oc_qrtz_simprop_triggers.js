const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    sched_name: {
      type: DataTypes.CHAR(120),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "sched_name",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    },
    trigger_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_name",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    },
    trigger_group: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "trigger_group",
      autoIncrement: false,
      references: {
        key: "trigger_name",
        model: "oc_qrtz_triggers_model"
      }
    },
    str_prop_1: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "str_prop_1",
      autoIncrement: false
    },
    str_prop_2: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "str_prop_2",
      autoIncrement: false
    },
    str_prop_3: {
      type: DataTypes.CHAR(512),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "str_prop_3",
      autoIncrement: false
    },
    int_prop_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "int_prop_1",
      autoIncrement: false
    },
    int_prop_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "int_prop_2",
      autoIncrement: false
    },
    long_prop_1: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "long_prop_1",
      autoIncrement: false
    },
    long_prop_2: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "long_prop_2",
      autoIncrement: false
    },
    dec_prop_1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dec_prop_1",
      autoIncrement: false
    },
    dec_prop_2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dec_prop_2",
      autoIncrement: false
    },
    bool_prop_1: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "bool_prop_1",
      autoIncrement: false
    },
    bool_prop_2: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "bool_prop_2",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "oc_qrtz_simprop_triggers",
    comment: "",
    indexes: []
  };
  const OcQrtzSimpropTriggersModel = sequelize.define("oc_qrtz_simprop_triggers_model", attributes, options);
  return OcQrtzSimpropTriggersModel;
};