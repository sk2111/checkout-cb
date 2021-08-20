import { useState } from 'react';
//styles
import styles from './App.module.css';
//components
import NavigationButton from 'components/NavigationButton/NavigationButton';
import Checkout from 'containers/Checkout/Checkout';
import RenderView from 'components/RenderView/RenderView';
//init state
import {
  initAccountInfo,
  initBillingInfo,
  initShippingInfo,
  initPaymentInfo,
} from './appStateDefault';
//utilities
import { isValidFormData, ERROR_MESSAGE } from 'utilities/validator';
import {
  PAGE_LIST,
  INIT_PAGE,
  getNextPage,
  getPreviousPage,
  SIGNUP_SUCCESS,
} from 'utilities/navigation';

const App = () => {
  const [accountInfo, setAccountInfo] = useState(initAccountInfo);
  const [billingInfo, setBillingInfo] = useState(initBillingInfo);
  const [shippingInfo, setShippingInfo] = useState(initShippingInfo);
  const [paymentInfo, setPaymentInfo] = useState(initPaymentInfo);
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);
  const [errorMsg, setErrorMsg] = useState('');

  const formData = { accountInfo, billingInfo, shippingInfo, paymentInfo };

  const gotoPreviousPage = () => {
    const prevPage = getPreviousPage(currentPage);
    setCurrentPage(prevPage);
    if (isValidFormData(formData[prevPage])) {
      setErrorMsg('');
    }
  };

  const gotoNextPage = () => {
    if (isValidFormData(formData[currentPage])) {
      return setCurrentPage(getNextPage(currentPage));
    }
    setErrorMsg(ERROR_MESSAGE);
  };

  const submitForm = () => {
    if (isValidFormData(formData[currentPage])) {
      console.log('Mock Network API POST', formData);
      return setCurrentPage(SIGNUP_SUCCESS);
    }
    setErrorMsg(ERROR_MESSAGE);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.checkoutTitle}>Checkout Information</h1>
      <div className={styles.checkoutContainer}>
        <Checkout
          currentPage={currentPage}
          information={{ accountInfo, billingInfo, shippingInfo, paymentInfo }}
          handleChange={{
            setAccountInfo,
            setBillingInfo,
            setShippingInfo,
            setPaymentInfo,
            setErrorMsg,
          }}
        />
      </div>
      <p className={styles.errorMsg}>{errorMsg}</p>
      <div className={styles.appBtnContainer}>
        <RenderView renderIfTrue={currentPage !== SIGNUP_SUCCESS}>
          <NavigationButton
            pageList={PAGE_LIST}
            currentPage={currentPage}
            gotoPreviousPage={gotoPreviousPage}
            gotoNextPage={gotoNextPage}
            submit={submitForm}
          />
        </RenderView>
      </div>
    </div>
  );
};

export default App;
