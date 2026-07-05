ServerEvents.recipes(event => {

event.replaceOutput(
  { input: 'modern_industrialization:sulfur_dust' },
  'modern_industrialization:sulfur_dust',
  'roll_mod:sulfur_dust')

event.replaceInput(
  { input: 'modern_industrialization:sulfur_dust' },
  'modern_industrialization:sulfur_dust',
  'roll_mod:sulfur_dust')
  
event.replaceInput(
  { input: 'minecraft:netherite_helmet' },
  'minecraft:netherite_helmet',
  'roll_mod:hazmat_helmet')
    
event.replaceInput(
  { input: 'minecraft:netherite_chestplate' },
  'minecraft:netherite_chestplate',
  'roll_mod:hazmat_chestplate')

event.replaceInput(
  { input: 'minecraft:netherite_leggings' },
  'minecraft:netherite_leggings',
  'roll_mod:hazmat_leggings')

event.replaceInput(
  { input: 'minecraft:netherite_boots' },
  'minecraft:netherite_boots',
  'roll_mod:hazmat_boots')

event.replaceInput(
  { input: 'minecraft:redstone' },
  'minecraft:redstone',
  '#c:dusts/redstone')

event.replaceInput(
  { input: 'modern_industrialization:redstone_battery' },
  'modern_industrialization:redstone_battery',
  '#roll_mod:battaries_tier_one')

})
