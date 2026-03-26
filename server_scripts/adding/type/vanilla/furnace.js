ServerEvents.recipes(event => {
// Злитки
//vanilla
event.smelting('minecraft:iron_ingot', '#roll_mod:ores/iron')
event.smelting('minecraft:copper_ingot', '#roll_mod:ores/copper')
event.smelting('minecraft:gold_ingot', '#roll_mod:ores/gold')
event.smelting('4x minecraft:redstone', 'roll_mod:raw_redstone')
event.smelting('2x minecraft:emerald', 'roll_mod:raw_emerald')
event.smelting('2x minecraft:lapis_lazuli', 'roll_mod:raw_lapis_lazuli')


//mods
event.smelting('modern_industrialization:antimony_ingot', '#roll_mod:ores/antimony')
event.smelting('modern_industrialization:silver_ingot', '#roll_mod:ores/silver')
event.smelting('modern_industrialization:nickel_ingot', '#roll_mod:ores/nickel')
event.smelting('modern_industrialization:lead_ingot', '#roll_mod:ores/lead')
event.smelting('modern_industrialization:tin_ingot', '#roll_mod:ores/cassiterite')
event.smelting('modern_industrialization:zinc_ingot', '#roll_mod:ores/sphalerite')
  
event.smelting('4x modern_industrialization:bauxite_dust', 'roll_mod:raw_bauxite')
event.smelting('2x minecraft:diamond', 'roll_mod:raw_diamond')
event.smelting('silentgear:bort', 'minecraft:diamond')
event.smelting('4x roll_mod:sulfur_dust', '#c:ores/sulfur')
event.smelting('1x silentgear:crimson_iron_ingot', '#c:crimson_iron')
})