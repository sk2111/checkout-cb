//styles
import styles from './NavigationButton.module.css';

const NavigationButton = ({
  pageList,
  currentPage,
  gotoPreviousPage,
  gotoNextPage,
  submit,
}) => {
  return (
    <div className={styles.navBtnContainer}>
      <button className={styles.backBtn} onClick={gotoPreviousPage}>
        Back
      </button>
      <button className={styles.nextBtn} onClick={gotoNextPage}>
        Next
      </button>
      <button className={styles.submitBtn} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default NavigationButton;
