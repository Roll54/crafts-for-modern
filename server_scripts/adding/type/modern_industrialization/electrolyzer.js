ServerEvents.recipes(event => {

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("2000x modern_industrialization:hydrofluoric_acid")
.fluidOut("1000x modern_industrialization:hydrogen")
.fluidOut("1000x modern_industrialization:fluorine")

event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("2x roll_mod:ammonium_chloride_dust")
.fluidOut("1000x modern_industrialization:chlorine")
.fluidOut("1000x modern_industrialization:ammonia")

event.recipes.modern_industrialization.electrolyzer(32, 1200)
.itemIn("10x #c:dusts/bauxite")
.itemOut("4x modern_industrialization:aluminum_dust")
.fluidOut("2000x modern_industrialization:oxygen", 0.5)
    
event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("3x roll_mod:raw_platinum_dust")
.itemOut("2x modern_industrialization:platinum_dust")
.fluidOut("1000x modern_industrialization:chlorine")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("1000x modern_industrialization:rhodium_sulfate")
.itemOut("1x modern_industrialization:rhodium_dust")
.itemOut("1x roll_mod:sulfur_dust")
.fluidOut("12000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("1000x modern_industrialization:sulfuric_copper_solution")
.itemOut("1x modern_industrialization:copper_dust")
.fluidOut("250x modern_industrialization:sulfuric_acid")
.fluidOut("1000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("1000x modern_industrialization:sulfuric_nickel_solution")
.itemOut("1x roll_mod:nickel_dust")
.fluidOut("250x modern_industrialization:sulfuric_acid")
.fluidOut("1000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 400)
.itemIn("12x roll_mod:obsidian_dust")
.itemOut("1x modern_industrialization:magnesium_dust")
.itemOut("1x modern_industrialization:iron_dust")
.itemOut("3x modern_industrialization:silicon_dust")
.itemOut("1x roll_mod:redstone_dust")
.fluidOut("6000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 100)
.fluidIn("1000x modern_industrialization:magnesium_chloride")
.itemOut("1x modern_industrialization:magnesium_dust")
.fluidOut("2000x modern_industrialization:chlorine")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("7000x modern_industrialization:sulfuric_acid")
.itemOut("1x roll_mod:sulfur_dust")
.fluidOut("4000x modern_industrialization:oxygen")
.fluidOut("2000x modern_industrialization:hydrogen")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("6x modern_industrialization:calcium_sulfate_dust")
.itemOut("1x roll_mod:sulfur_dust")
.itemOut("1x roll_mod:calcium_dust")
.fluidOut("4000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("38x roll_mod:mica_dust")
.itemOut("15x roll_mod:alumina_dust")
.itemOut("6x modern_industrialization:silicon_dust")
.itemOut("2x roll_mod:potassium_dust") // тут має бути калій
.fluidOut("11000x modern_industrialization:oxygen")
.fluidOut("4000x modern_industrialization:fluorine")

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("5x roll_mod:hematite_dust")
  .itemOut("2x modern_industrialization:iron_dust")
  .fluidOut("3000x modern_industrialization:oxygen"); 

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("7x roll_mod:magnetite_dust")
  .itemOut("3x modern_industrialization:iron_dust")
  .fluidOut("4000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("4x roll_mod:yellow_limonite_dust")
  .itemOut("1x modern_industrialization:iron_dust")
  .fluidOut("2000x modern_industrialization:oxygen")
  .fluidOut("1000x modern_industrialization:hydrogen"); 

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("44x roll_mod:biotite_dust")
  .itemOut("15x roll_mod:alumina_dust")
  .itemOut("6x modern_industrialization:silicon_dust")
  .itemOut("6x modern_industrialization:magnesium_dust")
  .itemOut("2x roll_mod:potassium_dust") // тут має бути калій
  .fluidOut("11000x modern_industrialization:oxygen")
  .fluidOut("4000x modern_industrialization:hydrogen");

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("17x roll_mod:garnierite_dust")
  .itemOut("5x roll_mod:nickel_dust")
  .itemOut("4x modern_industrialization:iron_dust")
  .itemOut("8x roll_mod:sulfur_dust")
  
event.recipes.modern_industrialization.electrolyzer(128, 100)
  .itemIn("11x roll_mod:pyrochlore_dust")
  .itemOut("2x roll_mod:calcium_dust")
  .itemOut("2x modern_industrialization:niobium_dust")
  .fluidOut("7000x modern_industrialization:oxygen");

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("20x roll_mod:pyrope_dust")
  .itemOut("5x roll_mod:alumina_dust")
  .itemOut("3x modern_industrialization:magnesium_dust")
  .itemOut("3x modern_industrialization:silicon_dust")
  .fluidOut("9000x modern_industrialization:oxygen"); 

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("11x roll_mod:apatite_dust")
  .itemOut("5x roll_mod:calcium_dust")
  .itemOut("1x modern_industrialization:phosphorus_dust")
  .fluidOut("4000x modern_industrialization:oxygen")
  .fluidOut("1000x modern_industrialization:chlorine");

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:galena_dust")
  .itemOut("1x roll_mod:lead_dust")
  .itemOut("1x roll_mod:sulfur_dust")

event.recipes.modern_industrialization.electrolyzer(64, 100)
  .itemIn("11x roll_mod:sodalite_dust")
  .itemOut("4x modern_industrialization:sodium_dust")
  .itemOut("3x modern_industrialization:aluminum_dust")
  .itemOut("3x modern_industrialization:silicon_dust")
  .fluidOut("1000x modern_industrialization:chlorine"); 

event.recipes.modern_industrialization.electrolyzer(64, 100)
  .itemIn("14x roll_mod:lazurite_dust")
  .itemOut("4x modern_industrialization:sodium_dust")
  .itemOut("4x roll_mod:calcium_dust")
  .itemOut("3x modern_industrialization:aluminum_dust")
  .itemOut("3x modern_industrialization:silicon_dust")

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("13x roll_mod:blue_topaz_dust")
  .itemOut("5x roll_mod:alumina_dust")
  .itemOut("1x modern_industrialization:silicon_dust")
  .fluidOut("3000x modern_industrialization:oxygen")
  .fluidOut("2000x modern_industrialization:hydrogen")
  .fluidOut("2000x modern_industrialization:fluorine");

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("13x roll_mod:topaz_dust")
  .itemOut("5x roll_mod:alumina_dust")
  .itemOut("1x modern_industrialization:silicon_dust")
  .fluidOut("3000x modern_industrialization:oxygen")
  .fluidOut("2000x modern_industrialization:hydrogen")
  .fluidOut("2000x modern_industrialization:fluorine");

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("9x roll_mod:tantalite_dust")
  .itemOut("2x modern_industrialization:tantalum_dust")
  .itemOut("1x modern_industrialization:manganese_dust")
  .fluidOut("6000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("2x roll_mod:molybdenite_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .itemOut("1x roll_mod:sulfur_dust")

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("6x roll_mod:powellite_dust")
  .itemOut("1x roll_mod:calcium_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .fluidOut("4000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("6x roll_mod:wulfenite_dust")
  .itemOut("1x roll_mod:lead_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .fluidOut("4000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:salt_dust")
  .itemOut("1x modern_industrialization:sodium_dust")
  .fluidOut("1000x modern_industrialization:chlorine"); 

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:rock_salt_dust")
  .itemOut("1x roll_mod:potassium_dust")
  .fluidOut("1000x modern_industrialization:chlorine"); 

event.recipes.modern_industrialization.electrolyzer(64, 100)
  .itemIn("20x roll_mod:lepidolite_dust")
  .itemOut("4x modern_industrialization:aluminum_dust")
  .itemOut("3x roll_mod:lithium_dust")
  .itemOut("1x roll_mod:potassium_dust")
  .fluidOut("10000x modern_industrialization:oxygen")
  .fluidOut("2000x modern_industrialization:fluorine")
  .registeredCondition({
          "mi_tweaks:voltage": {
            "voltage": "hv"
          }});

event.recipes.modern_industrialization.electrolyzer(64, 100)
.itemIn("16x roll_mod:lapis_lazuli_dust")
.itemOut("10x roll_mod:lazurite_dust")
.itemOut("2x roll_mod:sodalite_dust")
.itemOut("2x roll_mod:calcium_carbonate")
.itemOut("2x roll_mod:pyrite_dust")

event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("5x roll_mod:alumina_dust")
.itemOut("2x modern_industrialization:aluminum_dust")
.fluidOut("3000x modern_industrialization:oxygen")


event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("14x roll_mod:olivine_dust")
.itemOut("2x modern_industrialization:magnesium_dust")
.itemOut("2x modern_industrialization:silicon_dust")
.itemOut("2x modern_industrialization:iron_dust")
.fluidOut("8000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("14x roll_mod:peridot_dust")
.itemOut("2x modern_industrialization:magnesium_dust")
.itemOut("2x modern_industrialization:silicon_dust")
.itemOut("2x modern_industrialization:iron_dust")
.fluidOut("8000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(64, 200)
.itemIn("21x roll_mod:soap_stone_dust")
.itemOut("4x modern_industrialization:silicon_dust")
.itemOut("3x modern_industrialization:magnesium_dust")
.fluidOut("12000x modern_industrialization:oxygen")
.fluidOut("2000x modern_industrialization:hydrogen"); 

event.recipes.modern_industrialization.electrolyzer(128, 1000)
.itemIn("5x roll_mod:marble_dust")
.itemOut("1x roll_mod:calcium_dust")
.itemOut("1x modern_industrialization:carbon_dust")
.fluidOut("3000x modern_industrialization:oxygen")
  
event.recipes.modern_industrialization.electrolyzer(32, 300)
.itemIn("14x roll_mod:sodium_bisulfate")
.fluidOut("12000x modern_industrialization:sodium_persulfate")
.fluidOut("2000x modern_industrialization:hydrogen")
})
