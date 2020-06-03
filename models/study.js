const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "study_id",
      autoIncrement: false
    },
    parent_study_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_study_id",
      autoIncrement: false,
      references: {
        key: "study_id",
        model: "study_model"
      }
    },
    unique_identifier: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "unique_identifier",
      autoIncrement: false
    },
    secondary_identifier: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "secondary_identifier",
      autoIncrement: false
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
    summary: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "summary",
      autoIncrement: false
    },
    date_planned_start: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_planned_start",
      autoIncrement: false
    },
    date_planned_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date_planned_end",
      autoIncrement: false
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
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_id",
      autoIncrement: false,
      references: {
        key: "study_type_id",
        model: "study_type_model"
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
    principal_investigator: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "principal_investigator",
      autoIncrement: false
    },
    facility_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_name",
      autoIncrement: false
    },
    facility_city: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_city",
      autoIncrement: false
    },
    facility_state: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_state",
      autoIncrement: false
    },
    facility_zip: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_zip",
      autoIncrement: false
    },
    facility_country: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_country",
      autoIncrement: false
    },
    facility_recruitment_status: {
      type: DataTypes.CHAR(60),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_recruitment_status",
      autoIncrement: false
    },
    facility_contact_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_contact_name",
      autoIncrement: false
    },
    facility_contact_degree: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_contact_degree",
      autoIncrement: false
    },
    facility_contact_phone: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_contact_phone",
      autoIncrement: false
    },
    facility_contact_email: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "facility_contact_email",
      autoIncrement: false
    },
    protocol_type: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "protocol_type",
      autoIncrement: false
    },
    protocol_description: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "protocol_description",
      autoIncrement: false
    },
    protocol_date_verification: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "protocol_date_verification",
      autoIncrement: false
    },
    phase: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phase",
      autoIncrement: false
    },
    expected_total_enrollment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "expected_total_enrollment",
      autoIncrement: false
    },
    sponsor: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sponsor",
      autoIncrement: false
    },
    collaborators: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "collaborators",
      autoIncrement: false
    },
    medline_identifier: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "medline_identifier",
      autoIncrement: false
    },
    url: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "url",
      autoIncrement: false
    },
    url_description: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "url_description",
      autoIncrement: false
    },
    conditions: {
      type: DataTypes.CHAR(500),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "conditions",
      autoIncrement: false
    },
    keywords: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "keywords",
      autoIncrement: false
    },
    eligibility: {
      type: DataTypes.CHAR(500),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "eligibility",
      autoIncrement: false
    },
    gender: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "gender",
      autoIncrement: false
    },
    age_max: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "age_max",
      autoIncrement: false
    },
    age_min: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "age_min",
      autoIncrement: false
    },
    healthy_volunteer_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "healthy_volunteer_accepted",
      autoIncrement: false
    },
    purpose: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "purpose",
      autoIncrement: false
    },
    allocation: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "allocation",
      autoIncrement: false
    },
    masking: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "masking",
      autoIncrement: false
    },
    control: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "control",
      autoIncrement: false
    },
    assignment: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "assignment",
      autoIncrement: false
    },
    endpoint: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "endpoint",
      autoIncrement: false
    },
    interventions: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "interventions",
      autoIncrement: false
    },
    duration: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "duration",
      autoIncrement: false
    },
    selection: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "selection",
      autoIncrement: false
    },
    timing: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "timing",
      autoIncrement: false
    },
    official_title: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "official_title",
      autoIncrement: false
    },
    results_reference: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "results_reference",
      autoIncrement: false
    },
    oc_oid: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "oc_oid",
      autoIncrement: false
    },
    old_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "old_status_id",
      autoIncrement: false,
      references: {
        key: "status_id",
        model: "status_model"
      }
    },
    study_env_uuid: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_env_uuid",
      autoIncrement: false
    },
    study_env_site_uuid: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_env_site_uuid",
      autoIncrement: false,
      unique: "index_study_env_site_uuid"
    },
    env_type: {
      type: DataTypes.CHAR(32),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "env_type",
      autoIncrement: false
    },
    schema_name: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "schema_name",
      autoIncrement: false
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "published",
      autoIncrement: false
    },
    file_path: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "file_path",
      autoIncrement: false
    },
    subject_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: null,
      primaryKey: false,
      field: "subject_count",
      autoIncrement: false
    },
    study_uuid: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "study_uuid",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "study",
    comment: "",
    indexes: [{
      name: "i_study_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_study_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_study_oc_oid",
      unique: false,
      fields: ["oc_oid"]
    }, {
      name: "i_study_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_study_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_study_owner_id",
      unique: false,
      fields: ["owner_id"]
    }, {
      name: "i_study_parent_study_id",
      unique: false,
      fields: ["parent_study_id"]
    }, {
      name: "i_study_parent_study_id",
      unique: false,
      fields: ["parent_study_id"]
    }, {
      name: "i_study_parent_study_id",
      unique: false,
      fields: ["parent_study_id"]
    }, {
      name: "i_study_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_status_id",
      unique: false,
      fields: ["status_id"]
    }, {
      name: "i_study_type_id",
      unique: false,
      fields: ["type_id"]
    }, {
      name: "i_study_type_id",
      unique: false,
      fields: ["type_id"]
    }, {
      name: "i_study_type_id",
      unique: false,
      fields: ["type_id"]
    }, {
      name: "i_study_unique_identifier",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_study_unique_identifier",
      unique: false,
      fields: ["name"]
    }, {
      name: "i_study_unique_identifier",
      unique: false,
      fields: ["name"]
    }]
  };
  const StudyModel = sequelize.define("study_model", attributes, options);
  return StudyModel;
};