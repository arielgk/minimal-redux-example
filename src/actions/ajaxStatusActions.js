import * as actiontypes from "./actionTypes";

export function beginAjaxCall() {
  return { type: actiontypes.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: actiontypes.AJAX_CALL_ERROR };
}
