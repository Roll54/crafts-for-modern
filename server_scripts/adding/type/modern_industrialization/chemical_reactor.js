ServerEvents.recipes(event => {

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("4x #c:glass_blocks")
.itemIn("1x modern_industrialization:electronic_circuit")
.fluidIn("modern_industrialization:polyethylene", 500)
.itemOut("32x hostilenetworks:prediction_matrix")

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("4x #c:glass_blocks")
.itemIn("1x modern_industrialization:electronic_circuit")
.fluidIn("modern_industrialization:polytetrafluoroethylene", 250)
.itemOut("128x hostilenetworks:prediction_matrix")

event.recipes.modern_industrialization.chemical_reactor(16, 200)
.itemIn("1x #c:dusts/fluorite")
.fluidIn("modern_industrialization:sulfuric_acid", 14000)
.fluidOut("modern_industrialization:hydrofluoric_acid", 4000) 
.itemOut("2x modern_industrialization:calcium_sulfate_dust")

event.recipes.modern_industrialization.chemical_reactor(8, 200)
.fluidIn("modern_industrialization:ethylene", 1000)
.fluidIn("modern_industrialization:chlorine", 2000)
.fluidOut("modern_industrialization:dichloroethylene", 1000)
    
event.recipes.modern_industrialization.chemical_reactor(16, 200)
.fluidIn("modern_industrialization:dichloroethylene", 1000)
.fluidIn("modern_industrialization:fluorine", 2000)
.fluidOut("modern_industrialization:difluorodichloroethylene", 1000)
    
event.recipes.modern_industrialization.chemical_reactor(16, 200)
.fluidIn("modern_industrialization:tetrafluoroethylene", 1000)
.fluidIn("modern_industrialization:oxygen", 1000)
.fluidOut("modern_industrialization:polytetrafluoroethylene", 1500)    
  

event.recipes.modern_industrialization.chemical_reactor(32, 400)
.fluidIn("modern_industrialization:hydrogen", 1000)
.fluidIn("modern_industrialization:fluorine", 1000)
.fluidOut("modern_industrialization:hydrofluoric_acid", 2000)

  event.recipes.modern_industrialization.chemical_reactor(16, 200)
  .itemIn("1x roll_mod:sheldonite_dust")
  .fluidIn("modern_industrialization:nitric_acid", 4000)
  .itemOut("4x roll_mod:platinum_group_sludge")

  event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .itemIn("12x roll_mod:chalcopyrite_dust")
  .fluidIn("modern_industrialization:nitric_acid", 6000)
  .itemOut("3x roll_mod:platinum_group_sludge")
  .fluidOut("modern_industrialization:sulfuric_copper_solution", 4000)

  event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .itemIn("6x roll_mod:bornite_dust")
  .fluidIn("modern_industrialization:nitric_acid", 6000)
  .itemOut("4x roll_mod:platinum_group_sludge")
  .fluidOut("modern_industrialization:sulfuric_copper_solution", 4000)
  
  event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .itemIn("12x roll_mod:garnierite_dust")
  .fluidIn("modern_industrialization:nitric_acid", 6000)
  .itemOut("4x roll_mod:platinum_group_sludge")
  .fluidOut("modern_industrialization:sulfuric_nickel_solution", 4000)

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.fluidIn("modern_industrialization:hydrochloric_acid", 4000)
.itemIn("5x roll_mod:raw_palladium_dust")
.itemOut("2x modern_industrialization:palladium_dust")
.itemOut("2x roll_mod:ammonium_chloride_dust")
    
event.recipes.modern_industrialization.chemical_reactor(32, 200)
.fluidIn("modern_industrialization:sulfuric_acid", 4000)
.itemIn("6x roll_mod:inert_metal_mixture")
.fluidOut("modern_industrialization:rhodium_sulfate", 500)
.fluidOut("modern_industrialization:hydrogen", 3000)
.itemOut("5x roll_mod:ruthenium_tetroxide_dust")

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("5x roll_mod:ruthenium_tetroxide_dust")
.itemIn("2x modern_industrialization:carbon_dust")
.itemOut("1x modern_industrialization:ruthenium_dust")
.fluidOut("modern_industrialization:carbon_dioxide", 6000)


event.recipes.modern_industrialization.chemical_reactor(32, 800)
.itemIn("4x roll_mod:rarest_metal_dust")
.fluidIn("modern_industrialization:hydrochloric_acid", 4000)
.itemOut("3x roll_mod:iridium_metal_residue")
.fluidOut("modern_industrialization:acidic_osmium_solution", 1000)
.fluidOut("modern_industrialization:hydrogen", 2000)

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.fluidIn("modern_industrialization:hydrogen", 8000)
.fluidIn("modern_industrialization:osmium_tetroxide", 5000)
.fluidOut("minecraft:water", 4000)
.itemOut("1x modern_industrialization:osmium_dust")

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("4x roll_mod:iridium_chloride")
.fluidIn("modern_industrialization:hydrogen", 4000)
.itemOut("1x modern_industrialization:iridium_dust")
.fluidOut("modern_industrialization:hydrochloric_acid", 4000)

event.recipes.modern_industrialization.chemical_reactor(128, 400)
.fluidIn("modern_industrialization:hydrogen", 3000)
.fluidIn("modern_industrialization:nitrogen", 1000)
.itemIn("1x roll_mod:1_circuit", 0.0)
.fluidOut("modern_industrialization:ammonia", 4000)

event.recipes.modern_industrialization.chemical_reactor(128, 200)
.fluidIn("modern_industrialization:hydrogen", 3000)
.fluidIn("modern_industrialization:nitrogen", 1000)
.itemIn("1x roll_mod:2_circuit", 0.0)
.itemIn("4x modern_industrialization:iron_dust")
.fluidOut("modern_industrialization:ammonia", 4000)

event.recipes.modern_industrialization.chemical_reactor(128, 400)
.fluidIn("modern_industrialization:ammonia", 1000)
.fluidIn("modern_industrialization:oxygen", 4000)
.itemIn("1x roll_mod:1_circuit", 0.0)
.fluidOut("modern_industrialization:nitric_acid", 1000)
.fluidOut("minecraft:water", 1000)

event.recipes.modern_industrialization.chemical_reactor(128, 100)
.fluidIn("modern_industrialization:ammonia", 1000)
.fluidIn("modern_industrialization:oxygen", 4000)
.itemIn("1x roll_mod:2_circuit", 0.0)
.itemIn("16x modern_industrialization:platinum_plate", 0.0)
.fluidOut("modern_industrialization:nitric_acid", 1000)
.fluidOut("minecraft:water", 1000)

event.recipes.modern_industrialization.chemical_reactor(32, 400)
.itemIn("16x modern_industrialization:platinum_plate", 0.0)
.itemIn("16x modern_industrialization:iron_dust")
.fluidIn("modern_industrialization:nitrogen", 2000)
.fluidIn("modern_industrialization:hydrogen", 2000)
.fluidIn("modern_industrialization:oxygen", 6000)
.fluidOut("modern_industrialization:nitric_acid", 10000);


event.recipes.modern_industrialization.chemical_reactor(64, 100)
.itemIn("1x roll_mod:rutile_dust")
.itemIn("5x modern_industrialization:carbon_dust")
.fluidIn("modern_industrialization:chlorine", 4000)
.fluidOut("modern_industrialization:titanium_tetrachloride", 1500)

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("1x #c:dusts/sulfur")
.fluidIn("modern_industrialization:oxygen", 4000)
.fluidIn("modern_industrialization:hydrogen", 2000)
.fluidOut("modern_industrialization:sulfuric_acid", 7000)

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("4x roll_mod:nether_star_dust")
.itemIn("4x modern_industrialization:diamond_plate")
.itemIn("1x extended_industrialization:netherite_dust")
.fluidIn("extended_industrialization:blazing_essence", 1000)
.itemOut("1x roll_mod:nether_star_plate")

event.recipes.modern_industrialization.chemical_reactor(16, 200)
.itemIn("32x minecraft:netherrack")
.itemIn("8x #c:dusts/diamond")
.itemIn("1x modern_industrialization:iridium_dust")
.fluidIn("modern_industrialization:rocket_propellant", 1000)
.itemOut("2x roll_mod:nether_star_dust")

event.recipes.modern_industrialization.chemical_reactor(16, 800)
.fluidIn("modern_industrialization:dimethylamine", 1000)
.fluidIn("modern_industrialization:monochloramine", 1000)
.fluidOut("modern_industrialization:dimethylhydrazine", 1000)
.fluidOut("modern_industrialization:hydrochloric_acid", 1000)

event.recipes.modern_industrialization.chemical_reactor(16, 400)
.fluidIn("modern_industrialization:hypochlorous_acid", 1000)
.fluidIn("modern_industrialization:ammonia", 1000)
.fluidOut("minecraft:water", 1000)
.fluidOut("modern_industrialization:monochloramine", 1000)

event.recipes.modern_industrialization.chemical_reactor(30, 400)
.fluidIn("minecraft:water", 1000)
.fluidIn("modern_industrialization:chlorine", 2000)
.fluidOut("modern_industrialization:hydrochloric_acid", 1000)
.fluidOut("modern_industrialization:hypochlorous_acid", 1000)

event.recipes.modern_industrialization.chemical_reactor(16, 800)
.fluidIn("modern_industrialization:ammonia", 1000)
.fluidIn("modern_industrialization:methanol", 2000)
.fluidOut("minecraft:water", 2000)
.fluidOut("modern_industrialization:dimethylamine", 1000)

event.recipes.modern_industrialization.chemical_reactor(16, 200)
.fluidIn("modern_industrialization:oxygen", 1000)
.fluidIn("modern_industrialization:hydrogen", 4000)
.itemIn("1x modern_industrialization:carbon_dust")
.fluidOut("modern_industrialization:methanol", 1000)

event.recipes.modern_industrialization.chemical_reactor(16, 800)
.fluidIn("modern_industrialization:oxygen", 7000)
.fluidIn("modern_industrialization:ammonia", 2000)
.fluidOut("minecraft:water", 3000)
.fluidOut("modern_industrialization:dinitrogen_tetroxide", 1000)


event.recipes.modern_industrialization.chemical_reactor(32, 400)
.itemIn("9x roll_mod:raw_rubber")
.itemIn("1x #c:dusts/sulfur")
.itemOut("10x roll_mod:rubber_ingot")

event.recipes.modern_industrialization.chemical_reactor(32, 200)
.itemIn("64x minecraft:sugar")
.itemIn("4x modern_industrialization:yeast_dust")
.fluidIn("minecraft:water", 5000)
.fluidOut("modern_industrialization:fermentation_solution", 6000)
    
event.recipes.modern_industrialization.chemical_reactor(64, 600)
.itemIn("4x modern_industrialization:tungsten_wire", 0.0)
.fluidIn("modern_industrialization:fermentation_solution", 1500)
.fluidOut("modern_industrialization:ethanol_containing_liquid", 1000)  
.fluidOut("modern_industrialization:carbon_dioxide", 500)


  event.recipes.modern_industrialization.chemical_reactor(16, 200)
  .fluidIn("modern_industrialization:propene", 1800)
  .fluidIn("modern_industrialization:ammonia", 800)
  .fluidIn("modern_industrialization:oxygen", 600)
  .fluidOut("modern_industrialization:acrylonitrile", 1400)
  .fluidOut("minecraft:water", 1800)
  
event.recipes.modern_industrialization.chemical_reactor(64, 100)
.itemIn("9x roll_mod:calcium_metavanadate")
.itemIn("6x roll_mod:sodium_carbonate")
.itemOut("10x roll_mod:sodium_metavanadate")
.itemOut("5x roll_mod:calcium_carbonate")

event.recipes.modern_industrialization.chemical_reactor(64, 100)
.itemIn("10x roll_mod:sodium_metavanadate")
.fluidIn("modern_industrialization:sulfuric_acid", 7000)
.itemOut("7x roll_mod:vanadium_pentoxide")
.itemOut("7x roll_mod:sodium_sulfate")
.fluidOut("minecraft:water", 3000)

event.recipes.modern_industrialization.chemical_reactor(256, 20)
.itemIn("7x roll_mod:vanadium_pentoxide")
.itemIn("5x roll_mod:calcium_dust")
.itemOut("10x roll_mod:calcium_oxide")
.itemOut("2x roll_mod:vanadium_dust_clean")

event.recipes.modern_industrialization.chemical_reactor(20, 512)
.itemIn("21x roll_mod:vanadium_pentoxide")
.itemIn("10x modern_industrialization:aluminum_dust")
.itemOut("25x roll_mod:alumina_dust")
.itemOut("6x roll_mod:vanadium_dust_clean")

event.recipes.modern_industrialization.chemical_reactor(256, 200)
.itemIn("7x roll_mod:tungstate_dust")
.itemIn("2x modern_industrialization:sodium_dust")
.fluidIn("minecraft:water", 3000)
.itemOut("7x roll_mod:sodium_tungstate_dust")
.itemOut("2x roll_mod:lithium_dust")
.registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "hv"
          }})

event.recipes.modern_industrialization.chemical_reactor(256, 100)
.itemIn("7x roll_mod:sodium_tungstate_dust")
.itemIn("3x roll_mod:calcium_chloride_dust")
.itemOut("6x roll_mod:scheelite_dust")
.itemOut("4x roll_mod:salt_dust")
.registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "hv"
          }});

event.recipes.modern_industrialization.chemical_reactor(16, 200)
    .itemIn("5x roll_mod:calcium_carbonate")                   
    .fluidIn("modern_industrialization:hydrochloric_acid", 4000)
    .itemOut("3x roll_mod:calcium_chloride_dust")
    .fluidOut("modern_industrialization:carbon_dioxide", 3000)
    .fluidOut("minecraft:water", 3000);

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("6x roll_mod:scheelite_dust")
.fluidIn("modern_industrialization:hydrochloric_acid", 4000)
.itemOut("7x roll_mod:tungstic_acid_dust")
.itemOut("3x roll_mod:calcium_chloride_dust")
.registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "hv"
          }});

event.recipes.modern_industrialization.chemical_reactor(64, 200)
    .itemIn("3x roll_mod:uraninite_dust")
    .fluidIn("modern_industrialization:hydrofluoric_acid", 8000)
    .fluidIn("modern_industrialization:fluorine", 2000)
    .fluidOut("modern_industrialization:uranium_hexafluoride", 1000)
    .fluidOut("minecraft:water", 6000);

    event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .fluidIn("modern_industrialization:epichlorohydrin", 1000)
  .fluidIn("modern_industrialization:bisphenol_a", 1000)
  .fluidIn("modern_industrialization:sodium_hydroxide", 3000)
  .fluidOut("modern_industrialization:epoxy", 2000)
  .fluidOut("modern_industrialization:salt_water", 3000)

    event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .fluidIn("modern_industrialization:hydrochloric_acid", 1000)
  .fluidIn("modern_industrialization:acetone", 1000)
  .fluidIn("modern_industrialization:phenol", 2000)
  .fluidOut("modern_industrialization:bisphenol_a", 1500)
  .fluidOut("modern_industrialization:diluted_hydrochloric_acid", 2500)

    event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .fluidIn("modern_industrialization:oxygen", 2000)
  .fluidIn("modern_industrialization:cumene", 1000)
  .fluidOut("modern_industrialization:phenol", 1000)
  .fluidOut("modern_industrialization:acetone", 1000)

    event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .fluidIn("extended_industrialization:phosphoric_acid", 1000)
  .fluidIn("modern_industrialization:benzene", 8000)
  .fluidIn("modern_industrialization:propene", 8000)
  .fluidOut("modern_industrialization:cumene", 8000)

    event.recipes.modern_industrialization.chemical_reactor(32, 200)
  .fluidIn("modern_industrialization:chlorine", 4000)
  .fluidIn("modern_industrialization:sodium_hydroxide", 3000)
  .fluidIn("modern_industrialization:propene", 1000)
  .fluidOut("modern_industrialization:hydrochloric_acid", 2000)
  .fluidOut("modern_industrialization:epichlorohydrin", 1000)
  .fluidOut("modern_industrialization:salt_water", 1000)

  event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("4x minecraft:glass_pane")
.fluidIn("modern_industrialization:mercury", 200)
.itemOut("1x roll_mod:mirror")

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.fluidIn("3000x modern_industrialization:carbon_dioxide")      // 1× CO₂
.fluidIn("6000x modern_industrialization:sodium_hydroxide")        // 2× NaOH
.itemOut("6x roll_mod:sodium_carbonate")                          // Na₂CO₃
.fluidOut("3000x minecraft:water");         

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("1x minecraft:ender_pearl")
.fluidIn("extended_industrialization:blazing_essence", 40)
.itemOut("1x minecraft:ender_eye")
.registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "mv"
          }});

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("16x roll_mod:energium_dust")
.fluidIn("modern_industrialization:molten_energium", 1000)
.itemOut("1x roll_mod:energium_large_dirty_crystal")

event.recipes.modern_industrialization.chemical_reactor(32, 100)
.itemIn("5x extendedae:quartz_blend")
.itemIn("1x ae2:charged_certus_quartz_crystal")
.itemIn("1x #c:dusts/certus_quartz")
.fluidIn("extended_industrialization:distilled_water", 1000)
.itemOut("5x ae2:certus_quartz_crystal")

  event.recipes.modern_industrialization.chemical_reactor(64, 100)
  .itemIn("12x extendedae:quartz_blend")
  .itemIn("4x ae2:fluix_dust")
  .itemIn("4x ae2:ender_dust")
  .fluidIn("modern_industrialization:nitric_acid", 1000)
  .itemOut("4x extendedae:entro_seed")

event.recipes.modern_industrialization.chemical_reactor(256, 100)
.itemIn("1x minecraft:nether_star")
.fluidIn("200x modern_industrialization:radon") 
.itemOut("1x roll_mod:quantum_star")
.registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "hv"
          }});

event.recipes.modern_industrialization.chemical_reactor(256, 100)
.itemIn("8x modern_industrialization:uranium_238_ingot")
.itemIn("1x modern_industrialization:plutonium_ingot")
.fluidIn("16000x modern_industrialization:liquid_air") 
.itemOut("4x modern_industrialization:uranium_235_ingot")
.fluidOut("4000x modern_industrialization:radon");         
  

event.recipes.modern_industrialization.chemical_reactor(64, 100)
.itemIn("4x extendedae:entro_crystal")
.itemIn("2x modern_industrialization:iridium_plate")
.itemIn("1x ae2:silicon_press")
.fluidIn("modern_industrialization:nitric_acid", 1000)
.itemOut("1x extendedae:concurrent_processor_press")
})