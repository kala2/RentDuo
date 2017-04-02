import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, placeholder, checkUserExists }) => {
  return (
    <div className={classnames("form-group", {'has-error': error})}>
          <label className="control-label">{label}</label>
          <input
            type={type}
            name={field}
            className="form-control"
            value={value}
            onChange={onChange}
            onBlur={checkUserExists}
            placeholder={placeholder}
          />

          {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  error: React.PropTypes.string,
  placeholder: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}
TextFieldGroup.defaultProps = {
  type: 'text'
}
export default TextFieldGroup;
