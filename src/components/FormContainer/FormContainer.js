//styles
import styles from './FormContainer.module.css';

const FormContainer = ({ title, children }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>{title}</h2>
      <form className={styles.form}>{children}</form>
    </div>
  );
};

export default FormContainer;
