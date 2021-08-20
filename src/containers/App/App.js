import { useState } from 'react';
//styles
import styles from './App.module.css';
//components
import NavigationButton from 'components/NavigationButton/NavigationButton';
import Checkout from 'containers/Checkout/Checkout';
//init state
import {
  initAccountInfo,
  initBillingInfo,
  initShippingInfo,
  initPaymentInfo,
} from './appStateDefault';
//navigation
import {
  PAGE_LIST,
  INIT_PAGE,
  getNextPage,
  getPreviousPage,
} from 'utilities/navigation';

const App = () => {
  const [accountInfo, setAccountInfo] = useState(initAccountInfo);
  const [billingInfo, setBillingInfo] = useState(initBillingInfo);
  const [shippingInfo, setShippingInfo] = useState(initShippingInfo);
  const [paymentInfo, setPaymentInfo] = useState(initPaymentInfo);
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);

  const gotoPreviousPage = () => {
    setCurrentPage(getPreviousPage(currentPage));
  };

  const gotoNextPage = () => {
    setCurrentPage(getNextPage(currentPage));
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
          }}
        />
      </div>
      <div className={styles.appBtnContainer}>
        <NavigationButton
          pageList={PAGE_LIST}
          currentPage={currentPage}
          gotoPreviousPage={gotoPreviousPage}
          gotoNextPage={gotoNextPage}
        />
      </div>
    </div>
  );
};

export default App;
