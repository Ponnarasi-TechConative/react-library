
export const taggedOperations = (oriSelector, system) => (state, ...args) => {
  let taggedOps = oriSelector(state, ...args)

  const { fn, layoutSelectors, getConfigs } = system.getSystem()
  const configs = getConfigs()
  const { maxDisplayedTags } = configs


  // Limit to [max] items, if specified
  if (maxDisplayedTags && !isNaN(maxDisplayedTags) && maxDisplayedTags >= 0) {
    taggedOps = taggedOps.slice(0, maxDisplayedTags)
  }

  return taggedOps
}
