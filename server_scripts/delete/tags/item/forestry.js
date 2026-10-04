ServerEvents.tags('item', event => {
  event.remove('c:ingots/bronze', 'forestry:bronze_ingot')
  
  event.remove('c:gears/copper', 'forestry:copper_gear')
  event.remove('c:gears/bronze', 'forestry:bronze_gear')
  event.remove('c:gears/tin', 'forestry:tin_gear')
  event.remove('c:gears/iron', 'forestry:iron_gear')

  event.remove('c:silicon', 'forestry:silicon')
})
