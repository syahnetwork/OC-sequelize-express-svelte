const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    dc_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "dc_event_id",
      autoIncrement: true,
      references: {
        key: "dc_event_id",
        model: "dc_event_model"
      }
    },
    to_address: {
      type: DataTypes.CHAR(1000),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "to_address",
      autoIncrement: false
    },
    subject: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject",
      autoIncrement: false
    },
    body: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "body",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "dc_send_email_event",
    comment: "",
    indexes: []
  };
  const DcSendEmailEventModel = sequelize.define("dc_send_email_event_model", attributes, options);
  return DcSendEmailEventModel;
};