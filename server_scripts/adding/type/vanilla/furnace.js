ServerEvents.recipes(event => {
// Злитки
//vanilla
event.smelting('minecraft:iron_ingot', '#roll_mod:ores/iron').xp(0.35)
event.smelting('minecraft:copper_ingot', '#roll_mod:ores/copper').xp(0.35)
event.smelting('minecraft:gold_ingot', '#roll_mod:ores/gold').xp(0.35)
event.smelting('4x roll_mod:redstone_dust', 'roll_mod:raw_redstone').xp(0.35)
event.smelting('2x minecraft:emerald', 'roll_mod:raw_emerald').xp(0.35)
event.smelting('2x minecraft:lapis_lazuli', 'roll_mod:raw_lapis_lazuli').xp(0.35)


//mods
event.smelting('createcybernetics:cooked_brain', 'createcybernetics:bodypart_brain').xp(0.35)
event.smelting('createcybernetics:cooked_heart', 'createcybernetics:bodypart_heart').xp(0.35)
event.smelting('createcybernetics:cooked_liver', 'createcybernetics:bodypart_liver').xp(0.35)
event.smelting('createcybernetics:roasted_andouille', 'createcybernetics:andouille_sausage').xp(0.35)
event.smelting('createcybernetics:bone_marrow', 'minecraft:bone').xp(0.35)
event.smelting('roll_mod:roasted_bell_pepper_rutile', 'roll_mod:rutile_bell_pepper').xp(0.35)
event.smelting('roll_mod:roasted_bell_pepper_rutile_slice', 'roll_mod:bell_pepper_slice_rutile').xp(0.35)

event.smelting('roll_mod:bismuth_ingot', 'roll_mod:bismuth_dust').xp(0.35)
event.smelting('roll_mod:bismuth_ingot', '#roll_mod:ores/bismuth').xp(0.35)
event.smelting('modern_industrialization:antimony_ingot', '#roll_mod:ores/antimony').xp(0.35)
event.smelting('modern_industrialization:silver_ingot', '#roll_mod:ores/silver').xp(0.35)
event.smelting('modern_industrialization:nickel_ingot', '#roll_mod:ores/nickel').xp(0.35)
event.smelting('modern_industrialization:nickel_ingot', 'roll_mod:nickel_dust').xp(0.35)
event.smelting('modern_industrialization:lead_ingot', '#roll_mod:ores/lead').xp(0.35)
event.smelting('modern_industrialization:tin_ingot', '#roll_mod:ores/cassiterite').xp(0.35)
event.smelting('modern_industrialization:tin_ingot', '#c:cassiterite_sand').xp(0.35)
event.smelting('modern_industrialization:zinc_ingot', '#roll_mod:ores/sphalerite').xp(0.35)
event.smelting('1x modern_industrialization:tin_ingot', '#c:stannite').xp(0.35)
  
event.smelting('4x modern_industrialization:bauxite_dust', 'roll_mod:raw_bauxite').xp(0.35)
event.smelting('2x minecraft:diamond', 'roll_mod:raw_diamond').xp(0.35)
event.smelting('4x roll_mod:sulfur_dust', '#c:ores/sulfur').xp(0.35)
})
