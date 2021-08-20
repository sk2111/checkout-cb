//styles
import styles from './NavigationButton.module.css';
//components
import RenderView from 'components/RenderView/RenderView';

const NavigationButton = ({
  pageList,
  currentPage,
  gotoPreviousPage,
  gotoNextPage,
  submit,
}) => {
  const firstPage = pageList[0];
  const lastPage = pageList[pageList.length - 1];

  return (
    <div className={styles.navBtnContainer}>
      <RenderView renderIfTrue={currentPage !== firstPage}>
        <button className={styles.backBtn} onClick={gotoPreviousPage}>
          Back
        </button>
      </RenderView>
      <RenderView renderIfTrue={currentPage !== lastPage}>
        <button className={styles.nextBtn} onClick={gotoNextPage}>
          Next
        </button>
      </RenderView>
      <RenderView renderIfTrue={currentPage === lastPage}>
        <button className={styles.submitBtn} onClick={submit}>
          Submit
        </button>
      </RenderView>
    </div>
  );
};

export default NavigationButton;
