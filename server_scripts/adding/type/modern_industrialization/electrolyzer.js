ServerEvents.recipes(event => {

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("modern_industrialization:hydrofluoric_acid", 2000)
.fluidOut("modern_industrialization:hydrogen", 1000)
.fluidOut("modern_industrialization:fluorine", 1000)

event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("2x roll_mod:ammonium_chloride_dust")
.fluidOut("modern_industrialization:chlorine", 1000)
.fluidOut("modern_industrialization:ammonia", 1000)
    
event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("3x roll_mod:raw_platinum_dust")
.itemOut("2x modern_industrialization:platinum_dust")
.fluidOut("modern_industrialization:chlorine", 1000)


event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("modern_industrialization:rhodium_sulfate", 1000)
.itemOut("1x modern_industrialization:rhodium_dust")
.itemOut("1x modern_industrialization:sulfur_dust")
.fluidOut("modern_industrialization:oxygen", 12000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("modern_industrialization:sulfuric_copper_solution", 1000)
.itemOut("1x modern_industrialization:copper_dust")
.fluidOut("modern_industrialization:sulfuric_acid", 250)
.fluidOut("modern_industrialization:oxygen", 1000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("modern_industrialization:sulfuric_nickel_solution", 1000)
.itemOut("1x modern_industrialization:nickel_dust")
.fluidOut("modern_industrialization:sulfuric_acid", 250)
.fluidOut("modern_industrialization:oxygen", 1000)

event.recipes.modern_industrialization.electrolyzer(32, 400)
.itemIn("12x roll_mod:obsidian_dust")
.itemOut("1x modern_industrialization:magnesium_dust")
.itemOut("1x modern_industrialization:iron_dust")
.itemOut("3x modern_industrialization:silicon_dust")
.itemOut("1x minecraft:redstone")
.fluidOut("modern_industrialization:oxygen", 6000)

event.recipes.modern_industrialization.electrolyzer(32, 1200)
.itemIn("9x modern_industrialization:bauxite_dust")
.itemOut("4x modern_industrialization:aluminum_dust")
.itemOut("1x roll_mod:ilmenite_dust", 0.1)
.fluidOut("modern_industrialization:oxygen", 2000, 0.5)

event.recipes.modern_industrialization.electrolyzer(32, 100)
.fluidIn("modern_industrialization:magnesium_chloride", 1000)
.itemOut("1x modern_industrialization:magnesium_dust")
.fluidOut("modern_industrialization:chlorine", 2000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
.fluidIn("modern_industrialization:sulfuric_acid", 7000)
.itemOut("1x modern_industrialization:sulfur_dust")
.fluidOut("modern_industrialization:oxygen", 4000)
.fluidOut("modern_industrialization:hydrogen", 2000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("6x modern_industrialization:calcium_sulfate_dust")
.itemOut("1x modern_industrialization:sulfur_dust")
.itemOut("1x roll_mod:calcium_dust")
.fluidOut("modern_industrialization:oxygen", 4000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
.itemIn("38x roll_mod:mica_dust")
.itemOut("15x roll_mod:alumina_dust")
.itemOut("6x modern_industrialization:silicon_dust")
.itemOut("2x roll_mod:calcium_dust") // тут має бути калій
.fluidOut("modern_industrialization:oxygen", 11000)
.fluidOut("modern_industrialization:fluorine", 4000)

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("5x roll_mod:hematite_dust")
  .itemOut("2x modern_industrialization:iron_dust")
  .fluidOut("modern_industrialization:oxygen", 3000); 

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("7x roll_mod:magnetite_dust")
  .itemOut("3x modern_industrialization:iron_dust")
  .fluidOut("modern_industrialization:oxygen", 4000)

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("4x roll_mod:yellow_limonite_dust")
  .itemOut("1x modern_industrialization:iron_dust")
  .fluidOut("modern_industrialization:oxygen", 2000)
  .fluidOut("modern_industrialization:hydrogen", 1000); 

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("44x roll_mod:biotite_dust")
  .itemOut("15x roll_mod:alumina_dust")
  .itemOut("6x modern_industrialization:silicon_dust")
  .itemOut("6x modern_industrialization:magnesium_dust")
  .itemOut("2x roll_mod:calcium_dust") // тут має бути калій
  .fluidOut("modern_industrialization:oxygen", 11000)
  .fluidOut("modern_industrialization:hydrogen", 4000);

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:garnierite_dust")
  .itemOut("1x modern_industrialization:nickel_dust")
  .fluidOut("modern_industrialization:oxygen", 1000); 

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("17x roll_mod:garnierite_dust")
  .itemOut("5x modern_industrialization:nickel_dust")
  .itemOut("4x modern_industrialization:iron_dust")
  .itemOut("8x modern_industrialization:sulfur_dust")

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("3x roll_mod:garnierite_dust")
  .itemOut("1x modern_industrialization:copper_dust")
  .itemOut("1x modern_industrialization:iron_dust")
  .itemOut("2x modern_industrialization:sulfur_dust")
  
event.recipes.modern_industrialization.electrolyzer(128, 100)
  .itemIn("11x roll_mod:pyrochlore_dust")
  .itemOut("2x roll_mod:calcium_dust")
  .itemOut("2x modern_industrialization:niobium_dust")
  .fluidOut("modern_industrialization:oxygen", 7000);

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("20x roll_mod:pyrope_dust")
  .itemOut("5x roll_mod:alumina_dust")
  .itemOut("3x modern_industrialization:magnesium_dust")
  .itemOut("3x modern_industrialization:silicon_dust")
  .fluidOut("modern_industrialization:oxygen", 9000); 

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("11x roll_mod:apatite_dust")
  .itemOut("5x roll_mod:calcium_dust")
  .itemOut("1x modern_industrialization:phosphorus_dust")
  .fluidOut("modern_industrialization:oxygen", 4000)
  .fluidOut("modern_industrialization:chlorine", 1000);

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:galena_dust")
  .itemOut("1x modern_industrialization:lead_dust")
  .itemOut("1x roll_mod:sulfur_dust")

event.recipes.modern_industrialization.electrolyzer(64, 100)
  .itemIn("11x roll_mod:sodalite_dust")
  .itemOut("4x modern_industrialization:sodium_dust")
  .itemOut("3x modern_industrialization:aluminum_dust")
  .itemOut("3x modern_industrialization:silicon_dust")
  .fluidOut("modern_industrialization:chlorine", 1000); 

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
  .fluidOut("modern_industrialization:oxygen", 3000)
  .fluidOut("modern_industrialization:hydrogen", 2000)
  .fluidOut("modern_industrialization:fluorine", 2000);

event.recipes.modern_industrialization.electrolyzer(32, 200)
  .itemIn("13x roll_mod:topaz_dust")
  .itemOut("5x roll_mod:alumina_dust")
  .itemOut("1x modern_industrialization:silicon_dust")
  .fluidOut("modern_industrialization:oxygen", 3000)
  .fluidOut("modern_industrialization:hydrogen", 2000)
  .fluidOut("modern_industrialization:fluorine", 2000);

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("9x roll_mod:tantalite_dust")
  .itemOut("2x modern_industrialization:tantalum_dust")
  .itemOut("1x modern_industrialization:manganese_dust")
  .fluidOut("modern_industrialization:oxygen", 6000)

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("2x roll_mod:molybdenite_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .itemOut("1x roll_mod:sulfur_dust")

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("6x roll_mod:powellite_dust")
  .itemOut("1x roll_mod:calcium_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .fluidOut("modern_industrialization:oxygen", 4000)

event.recipes.modern_industrialization.electrolyzer(64, 200)
  .itemIn("6x roll_mod:wulfenite_dust")
  .itemOut("1x modern_industrialization:lead_dust")
  .itemOut("1x roll_mod:molybdenum_dust")
  .fluidOut("modern_industrialization:oxygen", 4000)

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:salt_dust")
  .itemOut("1x modern_industrialization:sodium_dust")
  .fluidOut("modern_industrialization:chlorine", 1000); 

event.recipes.modern_industrialization.electrolyzer(32, 100)
  .itemIn("2x roll_mod:rock_salt_dust")
  .itemOut("1x roll_mod:potassium_dust")
  .fluidOut("modern_industrialization:chlorine", 1000); 

event.recipes.modern_industrialization.electrolyzer(64, 100)
  .itemIn("20x roll_mod:lepidolite_dust")
  .itemOut("4x modern_industrialization:aluminum_dust")
  .itemOut("3x roll_mod:lithium_dust")
  .itemOut("1x roll_mod:potassium_dust")
  .fluidOut("modern_industrialization:oxygen", 10000)
  .fluidOut("modern_industrialization:fluorine", 2000); 

event.recipes.modern_industrialization.electrolyzer(64, 100)
.itemIn("16x roll_mod:lapis_lazuli_dust")
.itemOut("10x roll_mod:lazurite_dust")
.itemOut("2x roll_mod:sodalite_dust")
.itemOut("2x roll_mod:calcium_carbonate")
.itemOut("2x roll_mod:pyrite_dust")

event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("5x roll_mod:alumina_dust")
.itemOut("2x modern_industrialization:aluminum_dust")
.fluidOut("modern_industrialization:oxygen", 3000)


event.recipes.modern_industrialization.electrolyzer(32, 100)
.itemIn("14x roll_mod:olivine_dust")
.itemOut("2x modern_industrialization:magnesium_dust")
.itemOut("2x modern_industrialization:silicon_dust")
.itemOut("2x modern_industrialization:iron_dust")
.fluidOut("8000x modern_industrialization:oxygen")

event.recipes.modern_industrialization.electrolyzer(64, 200)
.itemIn("21x roll_mod:soap_stone_dust")
.itemOut("4x modern_industrialization:silicon_dust")
.itemOut("3x modern_industrialization:magnesium_dust")
.fluidOut("modern_industrialization:oxygen", 12000)
.fluidOut("modern_industrialization:hydrogen", 2000); 
  
})