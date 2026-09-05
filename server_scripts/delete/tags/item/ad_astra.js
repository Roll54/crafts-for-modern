ServerEvents.tags('item', event => {
  event.remove('c:plates/iron', 'ad_astra:iron_plate')
  event.remove('c:plates/steel', 'ad_astra:steel_plate')
  
  event.remove('ad_astra:iron_plates', 'ad_astra:iron_plate')
  event.remove('ad_astra:steel_plates', 'ad_astra:steel_plate')

  event.remove('c:ingots/steel', 'ad_astra:steel_ingot')
  event.remove('ad_astra:steel_ingots', 'ad_astra:steel_ingot')

  event.remove('c:ingots/nuggets', 'ad_astra:steel_nugget')
  event.remove('ad_astra:steel_nuggets', 'ad_astra:steel_nugget')

  event.remove('c:rods/steel', 'ad_astra:steel_rod')
  event.remove('ad_astra:steel_rods', 'ad_astra:steel_rod')

  event.remove('c:storage_blocks/steel', 'ad_astra:steel_block')
  event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
  event.remove('minecraft:beacon_base_blocks', 'ad_astra:steel_block')
})
