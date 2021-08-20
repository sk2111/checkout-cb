//styles
import styles from './FormContainer.module.css';

const FormContainer = ({ title, children }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default FormContainer;
