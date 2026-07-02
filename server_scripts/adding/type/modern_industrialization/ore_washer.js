ServerEvents.recipes(event => {

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_magnetite_ore")
.fluidIn("modern_industrialization:mercury", 250)
.itemOut("1x roll_mod:purified_magnetite_ore")
.itemOut("1x roll_mod:gold_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_bornite_ore")
.fluidIn("modern_industrialization:mercury", 250)
.itemOut("1x roll_mod:purified_bornite_ore")
.itemOut("1x roll_mod:gold_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_chalcopyrite_ore")
.fluidIn("modern_industrialization:mercury", 250)
.itemOut("1x roll_mod:purified_chalcopyrite_ore")
.itemOut("1x roll_mod:gold_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_galena_ore")
.fluidIn("modern_industrialization:mercury", 250)
.itemOut("1x roll_mod:purified_galena_ore")
.itemOut("1x roll_mod:silver_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_quartz_ore")
.fluidIn("modern_industrialization:mercury", 500)
.itemOut("1x roll_mod:purified_quartz_ore")
.itemOut("1x roll_mod:silver_amalgam_dust")
.itemOut("1x roll_mod:gold_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 16)
.itemIn("1x roll_mod:crushed_quartz_ore")
.fluidIn("modern_industrialization:mercury", 500)
.itemOut("1x roll_mod:purified_quartz_ore")
.itemOut("1x roll_mod:silver_amalgam_dust")
.itemOut("1x roll_mod:gold_amalgam_dust");

event.recipes.modern_industrialization.lv_ore_washer(32, 20)
.itemIn("1x roll_mod:crushed_quartz_ore")
.itemIn("1x roll_mod:crushed_quartz_ore")
.fluidIn("modern_industrialization:mercury", 500)//todo ЛОРП НАДА ПАМІНЯТЬ ЦИФРИ МІСЦЯМИ БО ЦЕ ЛЕГАСІ КОД!
.itemOut("1x roll_mod:purified_quartz_ore") 

function plantToOre (crushedOre, plantItem, numberOfPlants, outputOre, outputOreNumber, optionalOutput = null, optionalOutputNumber = 1 ){

    

    let recipe = event.recipes.modern_industrialization.lv_ore_washer(32, 60)
    .itemIn('1x ${crushedOre}')
    .itemIn('${numberOfPlants}x ${plantItem}')
    .fluidIn('1500x modern_industrialization:sodium_persulfate')
    .itemOut('${outputOreNumber}x ${outputOre}') 
    if (optionalOutput !== null){
    recipe.itemOut('${optionalOutputNumber}x ${optionalOutput}') 
    }
}

plantToOre("roll_mod:crushed_nickel_ore", "roll_mod:nikelia_flowers", 20, "roll_mod:purified_nickel_ore", 4, "modern_industrialization:platinum_dust", 1)


})