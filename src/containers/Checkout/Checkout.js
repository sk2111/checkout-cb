//styles
import styles from './Checkout.module.css';
//components
import RenderView from 'components/RenderView/RenderView';
import AccountInfo from 'containers/AccountInfo/AccountInfo';
import BillingInfo from 'containers/BillingInfo/BillingInfo';
import ShippingInfo from 'containers/ShippingInfo/ShippingInfo';
import PaymentInfo from 'containers/PaymentInfo/PaymentInfo';
//assests
import { ReactComponent as SuccessSvg } from 'assets/successTick.svg';
//navigation
import {
  ACCOUNT_PAGE,
  BILLING_PAGE,
  SHIPPING_PAGE,
  PAYMENT_PAGE,
  SIGNUP_SUCCESS,
} from 'utilities/navigation';

const Checkout = ({ currentPage, information, handleChange }) => {
  const { accountInfo, billingInfo, shippingInfo, paymentInfo } = information;
  const {
    setAccountInfo,
    setBillingInfo,
    setShippingInfo,
    setPaymentInfo,
    setErrorMsg,
  } = handleChange;

  const updateInfo = (e, prevData, setInfo) => {
    const { name, value } = e.target;
    setErrorMsg('');
    setInfo({ ...prevData, [name]: value });
  };

  const handleAccountInfoChange = (e) => {
    updateInfo(e, accountInfo, setAccountInfo);
  };

  const handleBillingInfoChange = (e) => {
    updateInfo(e, billingInfo, setBillingInfo);
  };

  const handleShippingInfoChange = (e) => {
    updateInfo(e, shippingInfo, setShippingInfo);
  };

  const handlePaymentInfoChange = (e) => {
    updateInfo(e, paymentInfo, setPaymentInfo);
  };

  return (
    <>
      <RenderView renderIfTrue={currentPage === ACCOUNT_PAGE}>
        <AccountInfo
          accountInfo={accountInfo}
          onInputChange={handleAccountInfoChange}
        />
      </RenderView>
      <RenderView renderIfTrue={currentPage === BILLING_PAGE}>
        <BillingInfo
          billingInfo={billingInfo}
          onInputChange={handleBillingInfoChange}
        />
      </RenderView>
      <RenderView renderIfTrue={currentPage === SHIPPING_PAGE}>
        <ShippingInfo
          shippingInfo={shippingInfo}
          onInputChange={handleShippingInfoChange}
        />
      </RenderView>
      <RenderView renderIfTrue={currentPage === PAYMENT_PAGE}>
        <PaymentInfo
          paymentInfo={paymentInfo}
          onInputChange={handlePaymentInfoChange}
        />
      </RenderView>
      <RenderView renderIfTrue={currentPage === SIGNUP_SUCCESS}>
        <div className={styles.successContainer}>
          <h4 className={styles.successTitle}>Success !</h4>
          <SuccessSvg className={styles.successSvg} />
          <p className={styles.successMsg}>You have Successfully Signed Up</p>
        </div>
      </RenderView>
    </>
  );
};

export default Checkout;
