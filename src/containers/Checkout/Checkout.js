//components
import RenderView from 'components/RenderView/RenderView';
import Account from 'containers/Account/Account';
import BillingInfo from 'containers/BillingInfo/BillingInfo';
//navigation
import { ACCOUNT_PAGE, BILLING_PAGE } from 'utilities/navigation';

const Checkout = ({ currentPage, information, handleChange }) => {
  const { accountInfo, billingInfo } = information;
  const { handleAccountInfoChange, handleBillingInfoChange } = handleChange;

  return (
    <>
      <RenderView renderIfTrue={currentPage === ACCOUNT_PAGE}>
        <Account
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
    </>
  );
};

export default Checkout;
