ServerEvents.recipes(event => {
event.replaceInput(
  { input: 'minecraft:diamond_sword' }, // Arg 1: the filter
  'minecraft:diamond_sword',            // Arg 2: the item to replace
  'silentgear:sword'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { input: 'minecraft:iron_sword' },
  'minecraft:iron_sword',
  'silentgear:sword'
)
    
event.replaceInput(
  { input: 'minecraft:netherite_sword' },
  'minecraft:netherite_sword',
  'silentgear:sword'
)   
    
event.replaceInput(
  { input: 'minecraft:diamond_helmet' },
  'minecraft:diamond_helmet',
  'silentgear:helmet'
) 
    
    
})