ServerEvents.recipes(event => {
  
const removedRecipes = [
  "ad_astra:steel_engine",
  "ad_astra:oxygen_gear",
  "ad_astra:rocket_nose_cone",
  "ad_astra:ti_69",
  "ad_astra:etrionic_blast_furnace",
  "ad_astra:fuel_refinery",
  "ad_astra:oxygen_loader",
  "ad_astra:cable_duct",
  "ad_astra:fluid_pipe_duct",
  "ad_astra:oxygen_sensor",
  "ad_astra:calorite_engine",
  "ad_astra:calorite_ingot",
  "ad_astra:calorite_plate",
  "ad_astra:calorite_tank",
  "ad_astra:desh_cable",
  "ad_astra:desh_engine",
  "ad_astra:desh_ingot",
  "ad_astra:desh_plate",
  "ad_astra:desh_tank",
  "ad_astra:ostrum_plate",
  "ad_astra:ostrum_engine",
  "ad_astra:ostrum_ingot",
  "ad_astra:ostrum_tank",
  "ad_astra:radio",
  "ad_astra:jet_suit",
  "ad_astra:jet_suit_boots",
  "ad_astra:jet_suit_helmet",
  "ad_astra:jet_suit_pants",
  "ad_astra:netherite_space_boots",
  "ad_astra:netherite_space_helmet",
  "ad_astra:netherite_space_pants",
  "ad_astra:netherite_space_suit",
  "ad_astra:space_boots",
  "ad_astra:space_helmet",
  "ad_astra:space_pants",
  "ad_astra:space_suit",
  "ad_astra:cryo_freezer",
  "ad_astra:energizer",
  "ad_astra:gravity_normalizer",
  "ad_astra:oxygen_distributor",
  "ad_astra:water_pump",
  "ad_astra:solar_panel",
  "ad_astra:nasa_workbench",
  "ad_astra:launch_pad",
  "ad_astra:steel_cable",
  "ad_astra:coal_generator",
  "ad_astra:compressor",
  "ad_astra:zip_gun",
  "ad_astra:gas_tank",
  "ad_astra:large_gas_tank",
  "ad_astra:tier_1_rover",
  "ad_astra:fan",
  "ad_astra:engine_frame",
  "ad_astra:wheel",
  "ad_astra:photovoltaic_etrium_cell",
  "ad_astra:etrionic_capacitor",
  "ad_astra:steel_block"
];

removedRecipes.forEach(id => event.remove({ output: id }));

  event.remove({ id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench" })
  event.remove({ id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench" })
  event.remove({ id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench" })
  event.remove({ id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench" })
})
