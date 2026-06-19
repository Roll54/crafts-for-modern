// kubejs/server_scripts/remove_rockets.js

ServerEvents.recipes(event => {
  // Прибираємо самі предмети з гри
  event.remove({ id: 'ad_astra:tier_1_rocket' })
  event.remove({ id: 'ad_astra:tier_2_rocket' })
})

// Ховаємо їх в JEI
JEIEvents.hideItems(event => {
  event.hide('ad_astra:tier_1_rocket')
  event.hide('ad_astra:tier_2_rocket')
})
