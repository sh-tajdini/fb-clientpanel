import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from "./types";
export const setDisableBalancedOnAdd = () => {
  return {
    type: DISABLE_BALANCE_ON_ADD,
  };
};

export const setDisableBalancedOnEdit = () => {
  return {
    type: DISABLE_BALANCE_ON_EDIT,
  };
};

export const setAllowRegistration = () => {
  return {
    type: ALLOW_REGISTRATION,
  };
};
