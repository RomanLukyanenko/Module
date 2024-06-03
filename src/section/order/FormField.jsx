import { ErrorMessage, Field } from "formik";

export const FormField = ({ name, label, type, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>

      <Field name={name} type={type} className="form-control" {...props} />

      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};
