//styles
import styles from './FormInput.module.css';

const FormInput = ({ label, type, onChange, ...otherProps }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.formLabel}>
        {label}
        <span className={styles.required}>*</span>
      </label>
      <input
        className={styles.formInput}
        type={type}
        {...otherProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
