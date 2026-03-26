ServerEvents.recipes(event => {

event.recipes.extended_industrialization.alloy_smelter(4, 400)
.itemIn("3x roll_mod:raw_rubber")
.itemIn("1x #c:dusts/sulfur")
.itemOut("1x roll_mod:rubber_ingot")

event.recipes.extended_industrialization.alloy_smelter(4, 400)
.itemIn("5x #c:dusts/copper")
.itemIn("4x #c:dusts/electrum")
.itemOut("9x modern_industrialization:black_bronze_ingot")  

event.recipes.extended_industrialization.alloy_smelter(8, 400)
.itemIn("4x minecraft:iron_ingot")
.itemIn("4x #c:dusts/redstone")
.itemOut("6x modern_industrialization:redstone_alloy_ingot")  
})