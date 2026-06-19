ServerEvents.recipes(event => {
  // Видалення крафтів ракет Tier 1 та Tier 2
  event.remove({ output: 'ad_astra:tier_1_rocket' })
  event.remove({ output: 'ad_astra:tier_2_rocket' })
})
