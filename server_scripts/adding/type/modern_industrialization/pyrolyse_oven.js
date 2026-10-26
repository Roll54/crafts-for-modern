ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.pyrolyse_oven(48, 500)
  .itemIn("16x minecraft:coal")
  .itemOut("16x modern_industrialization:coke")
  .fluidOut("12000x modern_industrialization:creosote", 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(48, 400)
  .itemIn("16x #c:dusts/coal")
  .itemOut("16x modern_industrialization:coke_dust")
  .fluidOut("8000x modern_industrialization:creosote", 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(48, 300)
  .itemIn("16x #minecraft:logs")
  .itemOut("20x minecraft:charcoal")
  .fluidOut("8000x modern_industrialization:creosote", 0.5)
 // .fluidOut("8000x kubejs:wood_tar", 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(128, 100)
  .itemIn("3x #c:dusts/pyrolusite")
  .itemIn("1x modern_industrialization:carbon_dust")
  .fluidOut("1000x modern_industrialization:carbon_dioxide")
  .itemOut("1x modern_industrialization:manganese_dust")
    
  event.recipes.modern_industrialization.pyrolyse_oven(64, 100)
  .itemIn("3x #c:dusts/pyrolusite")
  .itemIn("2x modern_industrialization:coke_dust")
  .fluidOut("1000x modern_industrialization:carbon_dioxide")
  .itemOut("1x modern_industrialization:manganese_dust")
    
   event.recipes.modern_industrialization.pyrolyse_oven(128, 300)
  .fluidIn("1000x modern_industrialization:difluorodichloroethylene")
  .fluidIn("2000x modern_industrialization:fluorine")
  .fluidOut("1000x modern_industrialization:tetrafluoroethylene")
  .fluidOut("4000x modern_industrialization:hydrochloric_acid")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 100)
  .itemIn("7x #c:dusts/chromite")
  .itemIn("4x modern_industrialization:carbon_dust")
  .itemOut("2x modern_industrialization:chromium_dust")
  .itemOut("1x modern_industrialization:iron_dust")
  .fluidOut("8000x modern_industrialization:carbon_monoxide")
    
 

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("5x roll_mod:rhodochrosite_dust")
  .fluidOut("3000x modern_industrialization:carbon_dioxide")
  .itemOut("2x roll_mod:manganese_oxide")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("2x roll_mod:manganese_oxide")
  .fluidIn("2000x modern_industrialization:carbon_monoxide")
  .fluidOut("3000x modern_industrialization:carbon_dioxide")
  .itemOut("1x modern_industrialization:manganese_dust")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("12x roll_mod:iron_iii_vanadate")
  .itemIn("6x roll_mod:sodium_carbonate")
  .fluidOut("6000x modern_industrialization:carbon_dioxide")
  .itemOut("10x roll_mod:sodium_metavanadate")
  .itemOut("5x roll_mod:hematite_dust")


event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
.itemIn("1x roll_mod:gold_amalgam_dust")
.fluidOut("250x modern_industrialization:mercury")
.itemOut("1x roll_mod:gold_dust")
    
event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
.itemIn("1x roll_mod:silver_amalgam_dust")
.fluidOut("250x modern_industrialization:mercury")
.itemOut("1x roll_mod:silver_dust")


//на видалення
   event.recipes.modern_industrialization.pyrolyse_oven(128, 600)
  .itemIn("4x modern_industrialization:carbon_dust")
  .fluidIn("50x modern_industrialization:acrylonitrile")
  .itemOut("1x roll_mod:carbon_fiber")
//не на видалення

event.recipes.modern_industrialization.pyrolyse_oven(128, 600)
.itemIn("16x modern_industrialization:carbon_dust")
.fluidIn("1500x modern_industrialization:polyethylene")
.itemOut("2x roll_mod:carbon_fiber")

event.recipes.modern_industrialization.pyrolyse_oven(128, 600)
.itemIn("16x modern_industrialization:carbon_dust")
.fluidIn("1000x modern_industrialization:polyvinyl_chloride")
.itemOut("4x roll_mod:carbon_fiber")

event.recipes.modern_industrialization.pyrolyse_oven(128, 400)
.itemIn("16x modern_industrialization:carbon_dust")
.fluidIn("1000x modern_industrialization:polytetrafluoroethylene")
.itemOut("6x roll_mod:carbon_fiber")

event.recipes.modern_industrialization.pyrolyse_oven(128, 400)
.itemIn("32x modern_industrialization:carbon_dust")
.fluidIn("1000x modern_industrialization:epoxy")
.itemOut("16x roll_mod:carbon_fiber")

event.recipes.modern_industrialization.pyrolyse_oven(32, 100)
.itemIn("10x roll_mod:calcium_carbonate")
.fluidIn("6000x modern_industrialization:carbon_dioxide")
.itemOut("4x roll_mod:calcium_oxide")
})
