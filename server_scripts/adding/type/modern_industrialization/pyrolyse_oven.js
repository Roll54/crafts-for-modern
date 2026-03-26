ServerEvents.recipes(event => {

  event.recipes.modern_industrialization.pyrolyse_oven(48, 500)
  .itemIn("16x minecraft:coal")
  .fluidIn("modern_industrialization:steam", 1000)
  .itemOut("16x modern_industrialization:coke")
  .fluidOut("modern_industrialization:creosote", 12000, 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(48, 400)
  .itemIn("16x modern_industrialization:coal_dust")
  .fluidIn("modern_industrialization:steam", 1000)
  .itemOut("16x modern_industrialization:coke_dust")
  .fluidOut("modern_industrialization:creosote", 8000, 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(48, 300)
  .itemIn("16x #minecraft:logs")
  .fluidIn("modern_industrialization:steam", 1000)
  .itemOut("16x minecraft:charcoal")
 // .fluidOut("kubejs:wood_tar", 8000, 0.5)

  event.recipes.modern_industrialization.pyrolyse_oven(128, 100)
  .itemIn("3x #c:dusts/pyrolusite")
  .itemIn("1x modern_industrialization:carbon_dust")
  .fluidOut("modern_industrialization:carbon_dioxide", 1000)
  .itemOut("1x modern_industrialization:manganese_dust")
    
  event.recipes.modern_industrialization.pyrolyse_oven(64, 100)
  .itemIn("3x #c:dusts/pyrolusite")
  .itemIn("2x modern_industrialization:coke_dust")
  .fluidOut("modern_industrialization:carbon_dioxide", 1000)
  .itemOut("1x modern_industrialization:manganese_dust")
    
   event.recipes.modern_industrialization.pyrolyse_oven(128, 300)
  .fluidIn("modern_industrialization:difluorodichloroethylene", 1000)
  .fluidIn("modern_industrialization:fluorine", 2000)
  .fluidOut("modern_industrialization:tetrafluoroethylene", 1000)
  .fluidOut("modern_industrialization:hydrochloric_acid", 4000)

  event.recipes.modern_industrialization.pyrolyse_oven(64, 100)
  .itemIn("7x #c:dusts/chromite")
  .itemIn("4x modern_industrialization:carbon_dust")
  .itemOut("2x modern_industrialization:chromium_dust")
  .itemOut("1x modern_industrialization:iron_dust")
  .fluidOut("modern_industrialization:carbon_monoxide", 8000)
    
    event.recipes.modern_industrialization.pyrolyse_oven(128, 600)
  .itemIn("4x modern_industrialization:carbon_dust")
  .fluidIn("modern_industrialization:acrylonitrile", 50)
  .itemOut("1x roll_mod:carbon_fiber")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("5x roll_mod:rhodochrosite_dust")
  .fluidOut("modern_industrialization:carbon_dioxide", 3000)
  .itemOut("2x roll_mod:manganese_oxide")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("2x roll_mod:manganese_oxide")
  .fluidIn("modern_industrialization:carbon_monoxide", 2000)
  .fluidOut("modern_industrialization:carbon_dioxide", 3000)
  .itemOut("1x modern_industrialization:manganese_dust")

  event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
  .itemIn("12x roll_mod:iron_iii_vanadate")
  .itemIn("6x roll_mod:sodium_carbonate")
  .fluidOut("modern_industrialization:carbon_dioxide", 6000)
  .itemOut("10x roll_mod:sodium_metavanadate")
  .itemOut("5x roll_mod:hematite_dust")


event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
.itemIn("1x roll_mod:gold_amalgam_dust")
.fluidOut("250x modern_industrialization:mercury")
.itemOut("1x modern_industrialization:gold_dust")
    
event.recipes.modern_industrialization.pyrolyse_oven(64, 200)
.itemIn("1x roll_mod:silver_amalgam_dust")
.fluidOut("250x modern_industrialization:mercury")
.itemOut("1x modern_industrialization:silver_dust")

})