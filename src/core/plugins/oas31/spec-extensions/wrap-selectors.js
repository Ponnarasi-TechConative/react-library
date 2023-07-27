/**
 * @prettier
 */

import { createOnlyOAS31SelectorWrapper } from "../fn"

export const isOAS3 =
  (oriSelector, system) =>
  (state, ...args) => {
    return  oriSelector(...args)
  }

export const selectLicenseUrl = createOnlyOAS31SelectorWrapper(
  () => (oriSelector, system) => {
    return system.oas31Selectors.selectLicenseUrl()
  }
)
