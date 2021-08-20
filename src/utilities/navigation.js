import { ReactComponent as AccountSvg } from 'assets/account.svg';
import { ReactComponent as BillingSvg } from 'assets/billing.svg';
import { ReactComponent as ShipppingSvg } from 'assets/shipping.svg';
import { ReactComponent as PaymentSvg } from 'assets/payment.svg';

export const ACCOUNT_PAGE = 'accountInfo';
export const BILLING_PAGE = 'billingInfo';
export const SHIPPING_PAGE = 'shippingInfo';
export const PAYMENT_PAGE = 'paymentInfo';
export const SIGNUP_SUCCESS = 'signupSuccess';

export const navHeaderList = [
  {
    id: 1,
    title: 'Account',
    isActive: true,
    Icon: AccountSvg,
    page: ACCOUNT_PAGE,
  },
  {
    id: 2,
    title: 'Billing Info',
    isActive: false,
    Icon: BillingSvg,
    page: BILLING_PAGE,
  },
  {
    id: 3,
    title: 'Shipping Info',
    isActive: false,
    Icon: ShipppingSvg,
    page: SHIPPING_PAGE,
  },
  {
    id: 4,
    title: 'Payment',
    isActive: false,
    Icon: PaymentSvg,
    page: PAYMENT_PAGE,
  },
];

export const navButtonList = [
  ACCOUNT_PAGE,
  BILLING_PAGE,
  SHIPPING_PAGE,
  PAYMENT_PAGE,
];

const navigationMap = {
  [ACCOUNT_PAGE]: { next: BILLING_PAGE, prev: null },
  [BILLING_PAGE]: { next: SHIPPING_PAGE, prev: ACCOUNT_PAGE },
  [SHIPPING_PAGE]: { next: PAYMENT_PAGE, prev: BILLING_PAGE },
  [PAYMENT_PAGE]: { next: null, prev: SHIPPING_PAGE },
};

export const [startingPage] = navButtonList;

export const getActiveNavHeaderList = (currentPage) => {
  let isActive = true;
  return navHeaderList.map((navItem) => {
    navItem.isActive = isActive;
    if (navItem.page === currentPage) isActive = false;
    return navItem;
  });
};

export const getNextPage = (currPage) => {
  return navigationMap[currPage].next;
};

export const getPreviousPage = (currPage) => {
  return navigationMap[currPage].prev;
};
