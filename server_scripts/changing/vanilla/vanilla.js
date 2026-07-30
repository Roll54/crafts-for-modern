ServerEvents.recipes(event => {

event.replaceInput(
  { input: 'minecraft:diamond_shovel' },
  'minecraft:diamond_shovel',
  '#minecraft:shovels'
)

event.replaceInput(
  { input: 'minecraft:redstone' },
  'minecraft:redstone',
  '#c:dusts/redstone'
)

})
