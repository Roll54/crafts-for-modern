ServerEvents.tags('item', event => {
  event.removeAll('c:plates/iron', 'ad_astra:iron_plate')
  event.removeAll('c:plates/steel', 'ad_astra:steel_plate')
})
