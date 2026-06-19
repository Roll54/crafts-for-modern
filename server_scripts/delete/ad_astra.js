ServerEvents.recipes(event => {
  event.remove({output: 'ad_astra:tier_1_rocket'})
  event.remove({output: 'ad_astra:tier_2_rocket'})
})

JEIEvents.hideItems(event => {
  event.hide('ad_astra:tier_1_rocket')
  event.hide('ad_astra:tier_2_rocket')
})
