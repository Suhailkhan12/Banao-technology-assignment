import "./formrow.scss";

function FormRow({ label, error, children }) {
  return (
    <div className="styledformrow">
      {label && (
        <label className="label" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default FormRow;
