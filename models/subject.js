const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "subject_id",
      autoIncrement: true
    },
    father_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "father_id",
      autoIncrement: false,
      references: {
        key: "subject_id",
        model: "subject_model"
      }
    },
    mother_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mother_id",
      autoIncrement: false,
      references: {
        key: "subject_id",
        model: "subject_model"
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
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_of_birth",
      autoIncrement: false
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "gender",
      autoIncrement: false
    },
    unique_identifier: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "unique_identifier",
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
    date_updated: {
      type: DataTypes.DATE,
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
    dob_collected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dob_collected",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "subject",
    comment: "",
    indexes: [{
      name: "i_subject_date_created",
      unique: false,
      fields: ["date_created"]
    }, {
      name: "i_subject_date_created",
      unique: false,
      fields: ["date_created"]
    }, {
      name: "i_subject_date_created",
      unique: false,
      fields: ["date_created"]
    }, {
      name: "i_subject_date_of_birth",
      unique: false,
      fields: ["date_of_birth"]
    }, {
      name: "i_subject_date_of_birth",
      unique: false,
      fields: ["date_of_birth"]
    }, {
      name: "i_subject_date_of_birth",
      unique: false,
      fields: ["date_of_birth"]
    }, {
      name: "i_subject_gender",
      unique: false,
      fields: ["gender"]
    }, {
      name: "i_subject_gender",
      unique: false,
      fields: ["gender"]
    }, {
      name: "i_subject_gender",
      unique: false,
      fields: ["gender"]
    }, {
      name: "i_subject_unique_identifier",
      unique: false,
      fields: ["unique_identifier"]
    }, {
      name: "i_subject_unique_identifier",
      unique: false,
      fields: ["unique_identifier"]
    }, {
      name: "i_subject_unique_identifier",
      unique: false,
      fields: ["unique_identifier"]
    }]
  };
  const SubjectModel = sequelize.define("subject_model", attributes, options);
  return SubjectModel;
};