export const CONSTANTS = {};

CONSTANTS.FIELDS_META = [
  {
    inputType: "txtField",
    label: "First Name",
    fieldName: "name",
    placeHolderTxt: "Enter First Name",
    fieldType: "text",
  },
  {
    inputType: "txtField",
    label: "Email Id",
    fieldName: "emailId",
    placeHolderTxt: "example@gmail.com",
    fieldType: "email",
  },
  {
    inputType: "txtArea",
    label: "Message",
    fieldName: "feedbackMsg",
    placeHolderTxt: "Enter your message here...",
    fieldType: "",
    fieldSize: "4",
  },
];

CONSTANTS.FIELDS_META_INPUT_TYPES = {
  TXT_FIELD: "txtField",
  TXT_AREA: "txtArea",
};

CONSTANTS.SERVER_EVENTS = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  SEND_DATA: "send_data",
};
