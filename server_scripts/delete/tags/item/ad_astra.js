ServerEvents.tags('item', event => {
  event.remove('c:plates/iron', 'ad_astra:iron_plate')
  event.remove('c:plates/steel', 'ad_astra:steel_plate')
  
  event.remove('ad_astra:iron_plates', 'ad_astra:iron_plate')
  event.remove('ad_astra:steel_plates', 'ad_astra:steel_plate')

  event.remove('c:ingots/stee', 'ad_astra:steel_ingot')
})
