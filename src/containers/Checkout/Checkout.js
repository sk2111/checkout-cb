//components
import RenderView from 'components/RenderView/RenderView';
import AccountInfo from 'containers/AccountInfo/AccountInfo';
import BillingInfo from 'containers/BillingInfo/BillingInfo';
import ShippingInfo from 'containers/ShippingInfo/ShippingInfo';
import PaymentInfo from 'containers/PaymentInfo/PaymentInfo';
//navigation
import {
  ACCOUNT_PAGE,
  BILLING_PAGE,
  SHIPPING_PAGE,
  PAYMENT_PAGE,
} from 'utilities/navigation';

const Checkout = ({ currentPage, information, handleChange }) => {
  const { accountInfo, billingInfo, shippingInfo, paymentInfo } = information;
  const { setAccountInfo, setBillingInfo, setShippingInfo, setPaymentInfo } =
    handleChange;

  const handleAccountInfoChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
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
    </>
  );
};

export default Checkout;
