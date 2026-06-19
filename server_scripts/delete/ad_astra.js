ServerEvents.recipes(event => {
  // Видалення ракет Ad Astra (як у твоєму прикладі)
  event.remove({ output: "ad_astra:tier_1_rocket" })
  event.remove({ output: "ad_astra:tier_2_rocket" })
})
