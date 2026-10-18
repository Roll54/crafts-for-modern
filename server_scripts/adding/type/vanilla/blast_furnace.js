ServerEvents.recipes(event => {
    // Vanilla Ores
    event.blasting('minecraft:iron_ingot', '#roll_mod:ores/iron').xp(0.35)
    event.blasting('minecraft:copper_ingot', '#roll_mod:ores/copper').xp(0.35)
    event.blasting('minecraft:gold_ingot', '#roll_mod:ores/gold').xp(0.35)
    event.blasting('4x roll_mod:redstone_dust', 'roll_mod:raw_redstone').xp(0.35)
    event.blasting('2x minecraft:emerald', 'roll_mod:raw_emerald').xp(0.35)
    event.blasting('2x minecraft:lapis_lazuli', 'roll_mod:raw_lapis_lazuli').xp(0.35)
    event.blasting('2x minecraft:diamond', 'roll_mod:raw_diamond').xp(0.35)

    // Modded Ores
    event.blasting('roll_mod:bismuth_ingot', '#roll_mod:ores/bismuth').xp(0.35)
    event.blasting('modern_industrialization:antimony_ingot', '#roll_mod:ores/antimony').xp(0.35)
    event.blasting('modern_industrialization:silver_ingot', '#roll_mod:ores/silver').xp(0.35)
    event.blasting('modern_industrialization:nickel_ingot', '#roll_mod:ores/nickel').xp(0.35)
    event.blasting('modern_industrialization:lead_ingot', '#roll_mod:ores/lead').xp(0.35)
    event.blasting('modern_industrialization:tin_ingot', '#roll_mod:ores/cassiterite').xp(0.35)
    event.blasting('modern_industrialization:tin_ingot', '#c:cassiterite_sand').xp(0.35)
    event.blasting('modern_industrialization:zinc_ingot', '#roll_mod:ores/sphalerite').xp(0.35)
    event.blasting('1x modern_industrialization:tin_ingot', '#c:stannite').xp(0.35)
})
