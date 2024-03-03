import "./formrowvertical.scss";

function FormRowVertical({ label, error, children }) {
  return (
    <div className="styledformverticalrow">
      {label && (
        <label className="verticallabel" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
