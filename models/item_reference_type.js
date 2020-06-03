const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_reference_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_reference_type_id",
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
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_reference_type",
    comment: "",
    indexes: []
  };
  const ItemReferenceTypeModel = sequelize.define("item_reference_type_model", attributes, options);
  return ItemReferenceTypeModel;
};