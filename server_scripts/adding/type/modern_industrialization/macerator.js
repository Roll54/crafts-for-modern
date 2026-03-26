ServerEvents.recipes(event => {

event.recipes.modern_industrialization.macerator(16, 800)
.itemIn("1x minecraft:obsidian")
.itemOut("1x roll_mod:obsidian_dust")
.itemOut("1x roll_mod:obsidian_dust", 0.5)

event.recipes.modern_industrialization.macerator(2, 100)
.itemIn("1x roll_mod:agar_gel")
.itemOut("1x roll_mod:agar_dust")
/*
event.recipes.modern_industrialization.macerator(2, 200)
.itemIn("1x #c:magnetite_ores")
.itemOut("4x modern_industrialization:raw_magnetite")
*/
event.recipes.modern_industrialization.macerator(2, 100)
.itemIn("1x #c:mushrooms")
.itemOut("1x modern_industrialization:yeast_tiny_dust")
.itemOut("1x modern_industrialization:yeast_tiny_dust", 0.5)
.itemOut("1x modern_industrialization:yeast_tiny_dust", 0.25)
    
event.recipes.modern_industrialization.macerator(2, 100)
.itemIn("1x #c:foods/berries")
.itemOut("1x modern_industrialization:yeast_tiny_dust", 0.5)
.itemOut("1x modern_industrialization:yeast_tiny_dust", 0.25)

event.recipes.modern_industrialization.macerator(32, 200)
.itemIn("1x minecraft:nether_star")
.itemOut("1x roll_mod:nether_star_dust")
    

event.recipes.modern_industrialization.macerator(64, 20)
.itemIn("4x roll_mod:vanadium_slag_dust")
.itemOut("1x roll_mod:iron_iii_vanadate")
.itemOut("1x roll_mod:calcium_metavanadate")
.itemOut("1x roll_mod:sodium_metavanadate")
.itemOut("1x roll_mod:vanadium_pentoxide")

event.recipes.modern_industrialization.macerator(2, 100)
.itemIn("8x roll_mod:sulfur_berry")
.itemOut("1x modern_industrialization:sulfur_dust")
  
})
