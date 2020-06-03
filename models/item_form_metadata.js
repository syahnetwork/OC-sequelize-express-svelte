const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    item_form_metadata_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "item_form_metadata_id",
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
    crf_version_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "crf_version_id",
      autoIncrement: false
    },
    header: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "header",
      autoIncrement: false
    },
    subheader: {
      type: DataTypes.CHAR(240),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subheader",
      autoIncrement: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_id",
      autoIncrement: false
    },
    parent_label: {
      type: DataTypes.CHAR(120),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_label",
      autoIncrement: false
    },
    column_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "column_number",
      autoIncrement: false
    },
    page_number_label: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "page_number_label",
      autoIncrement: false
    },
    question_number_label: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "question_number_label",
      autoIncrement: false
    },
    left_item_text: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "left_item_text",
      autoIncrement: false
    },
    right_item_text: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "right_item_text",
      autoIncrement: false
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "section_id",
      autoIncrement: false,
      references: {
        key: "section_id",
        model: "section_model"
      }
    },
    decision_condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "decision_condition_id",
      autoIncrement: false
    },
    response_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "response_set_id",
      autoIncrement: false,
      references: {
        key: "response_set_id",
        model: "response_set_model"
      }
    },
    regexp: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "regexp",
      autoIncrement: false
    },
    regexp_error_msg: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "regexp_error_msg",
      autoIncrement: false
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ordinal",
      autoIncrement: false
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "required",
      autoIncrement: false
    },
    default_value: {
      type: DataTypes.CHAR(4000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "default_value",
      autoIncrement: false
    },
    response_layout: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "response_layout",
      autoIncrement: false
    },
    width_decimal: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "width_decimal",
      autoIncrement: false
    },
    show_item: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "show_item",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "item_form_metadata",
    comment: "",
    indexes: [{
      name: "i_ifm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_ifm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_ifm_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "i_ifm_response_set_id",
      unique: false,
      fields: ["response_set_id"]
    }, {
      name: "i_ifm_response_set_id",
      unique: false,
      fields: ["response_set_id"]
    }, {
      name: "i_ifm_response_set_id",
      unique: false,
      fields: ["response_set_id"]
    }, {
      name: "i_ifm_section_id",
      unique: false,
      fields: ["section_id"]
    }, {
      name: "i_ifm_section_id",
      unique: false,
      fields: ["section_id"]
    }, {
      name: "i_ifm_section_id",
      unique: false,
      fields: ["section_id"]
    }, {
      name: "i_item_form_metadata_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_item_form_metadata_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_item_form_metadata_decision_condition_id",
      unique: false,
      fields: ["decision_condition_id"]
    }, {
      name: "i_item_form_metadata_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_item_form_metadata_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_item_form_metadata_ordinal",
      unique: false,
      fields: ["ordinal"]
    }, {
      name: "i_item_form_metadata_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_item_form_metadata_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_item_form_metadata_parent_id",
      unique: false,
      fields: ["parent_id"]
    }, {
      name: "i_itm_form_metadata_crf_ver_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_itm_form_metadata_crf_ver_id",
      unique: false,
      fields: ["crf_version_id"]
    }, {
      name: "i_itm_form_metadata_crf_ver_id",
      unique: false,
      fields: ["crf_version_id"]
    }]
  };
  const ItemFormMetadataModel = sequelize.define("item_form_metadata_model", attributes, options);
  return ItemFormMetadataModel;
};