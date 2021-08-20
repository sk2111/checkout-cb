export const ACCOUNT_PAGE = 'account';
export const BILLING_PAGE = 'billing';
export const SHIPPING_PAGE = 'shipping';
export const PAYMENT_PAGE = 'payment';
export const PAGE_LIST = [
  ACCOUNT_PAGE,
  BILLING_PAGE,
  SHIPPING_PAGE,
  PAYMENT_PAGE,
];

export const INIT_PAGE = PAGE_LIST[0];

const getCurrentPageIdx = (currPage) => {
  return PAGE_LIST.findIndex((page) => page === currPage);
};

export const getNextPage = (currPage) => {
  const currIdx = getCurrentPageIdx(currPage);
  return PAGE_LIST[currIdx + 1] ?? PAGE_LIST[0];
};

export const getPreviousPage = (currPage) => {
  const currIdx = getCurrentPageIdx(currPage);
  return PAGE_LIST[currIdx - 1] ?? PAGE_LIST[PAGE_LIST.length - 1];
};
