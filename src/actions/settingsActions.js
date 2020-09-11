import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from "./types";
export const setDisableBalancedOnAdd = () => {
  //Get settings from local storage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //Toggle
  settings.disableBalancedOnAdd = !settings.disableBalancedOnAdd;
  //set back to loacal storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.setDisableBalancedOnAdd,
  };
};

export const setDisableBalancedOnEdit = () => {
  //Get settings from local storage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //Toggle
  settings.disableBalancedOnEdit = !settings.disableBalancedOnEdit;
  //set back to loacal storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalancedOnEdit,
  };
};

export const setAllowRegistration = () => {
  //Get settings from local storage
  const settings = JSON.parse(localStorage.getItem("settings"));
  //Toggle
  settings.allowRegistration = !settings.allowRegistration;
  //set back to loacal storage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration,
  };
};
