import Joi from "joi";

export default {
  first_name: Joi.string()
    .min(2)
    .required()
    .regex(/^[A-Za-z]*$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.regex.base":
            err.message =
              "First name cannot contain number or special characters";
            break;
          case "any.required":
            err.message = "First name is required";
            break;
          case "string.min":
            err.message = "First name must be at least 2 characters long";
            break;
          case "string.base":
            err.message = "First name must be a string";
            break;
        }
      });
      return errors;
    }),

  last_name: Joi.string()
    .min(2)
    .required()
    .regex(/^[A-Za-z]*$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.regex.base":
            err.message =
              "Last name cannot contain number or special characters";
            break;
          case "any.required":
            err.message = "Last name is required";
            break;
          case "string.min":
            err.message = "Last name must be at least 2 characters long";
            break;
          case "string.base":
            err.message = "Last name must be a string";
            break;
        }
      });
      return errors;
    }),

  username: Joi.string()
    .alphanum()
    .min(2)
    .required()
    .regex(/^[A-Za-z]+[A-Z-a-z-0-9]*$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.regex.base":
            err.message = "User name cannot begin with a number";
            break;
          case "any.required":
            err.message = "User name is required";
            break;
          case "string.alphanum":
            err.message =
              "User name must contain only alpha-numeric characters";
            break;
          case "string.min":
            err.message = "User name must be at least 2 characters long";
            break;
          case "string.base":
            err.message = "User name must be a string";
            break;
        }
      });
      return errors;
    }),

  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string()
    .required()
    .regex(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.regex.base":
            err.message =
              "Password must be at least 8 characters with at least a number, Upper and lower cases special character";
            break;
          default:
            break;
        }
      });
      return errors;
    }),

  confirm_password: Joi.string()
    .required()
    .regex(/^[A-Za-z]*$/)
    .valid(Joi.ref("password"))
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.allowOnly":
            err.message = "Passwords must match";
            break;
          case "string.base":
            err.message = "Confirm password must be a string";
            break;
          case "any.required":
            err.message = "Confirm password is required";
            break;
        }
      });
      return errors;
    }),
};
