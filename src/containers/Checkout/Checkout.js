//components
import RenderView from 'components/RenderView/RenderView';
import AccountInfo from 'containers/AccountInfo/AccountInfo';
import BillingInfo from 'containers/BillingInfo/BillingInfo';
import ShippingInfo from 'containers/ShippingInfo/ShippingInfo';
//navigation
import {
  ACCOUNT_PAGE,
  BILLING_PAGE,
  SHIPPING_PAGE,
} from 'utilities/navigation';

const Checkout = ({ currentPage, information, handleChange }) => {
  const { accountInfo, billingInfo, shippingInfo } = information;
  const { setAccountInfo, setBillingInfo, setShippingInfo } = handleChange;

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
    </>
  );
};

export default Checkout;
