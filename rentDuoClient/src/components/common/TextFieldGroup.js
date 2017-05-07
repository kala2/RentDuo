import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, placeholder, min, checkUserExists, disabled }) => {
  return (
    <div className={classnames("form-group", {'has-error': error})}>
          <label className="col-md-3 control-label">{label}</label>
          <input
            type={type}
            name={field}
            className="form-control"
            value={value}
            min={min}
            onChange={onChange}
            onBlur={checkUserExists}
            placeholder={placeholder}
            disabled={disabled}
          />
          {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  error: React.PropTypes.string,
  min: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}
TextFieldGroup.defaultProps = {
  type: 'text'
}
export default TextFieldGroup;
