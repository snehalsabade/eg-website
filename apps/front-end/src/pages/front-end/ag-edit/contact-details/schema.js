export default {
  description: "1.Basic details",
  type: "step",
  properties: {
    1: {
      title: "CONTACT_1",

      type: "object",
      //required: ["mobile"],
      properties: {
        mobile: {
          type: "number",
          title: "MOBILE_NUMBER",
        },
        mark_as_whatsapp_number: {
          type: "string",
          label: "MARK_AS_WHATSAPP_NO",
          format: "RadioBtn",

          enumNames: ["YES", "NO"],
          enum: ["yes", "no"],
        },
        device_ownership: {
          type: "string",
          label: "MARK_OWNERSHIP",
          format: "RadioBtn",
          enumNames: ["SELF", "FAMILY_MEMBER", "NEIGHBOUR", "OTHER"],
          enum: ["self", "family_member", "neighbour", "other"],
        },
        device_type: {
          type: "string",
          label: "TYPE_OF_MOBILE_PHONE",
          format: "CustomR",
          enumNames: ["SMARTPHONE", "BASIC"],
          enum: ["smartphone", "basic"],
        },
        alternative_mobile_number: {
          type: "number",
          title: "ALTERNATIVE_NUMBER",
        },
        alternative_device_ownership: {
          type: "string",
          label: "MARK_OWNERSHIP",
          format: "RadioBtn",
          enumNames: ["SELF", "FAMILY_MEMBER", "NEIGHBOUR", "OTHER"],
          enum: ["self", "family_member", "neighbour", "other"],
        },
        alternative_device_type: {
          label: "TYPE_OF_MOBILE_PHONE",
          format: "CustomR",
          type: "string",
          enumNames: ["SMARTPHONE", "BASIC"],
          enum: ["smartphone", "basic"],
        },

        email_id: {
          type: "string",
          format: "email",
          label: "EMAIL_ID",
        },
      },
    },
  },
};