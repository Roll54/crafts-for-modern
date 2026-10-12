ServerEvents.recipes(event => {

const removedRecipes = [
  'createcybernetics:titanium_block',
  'createcybernetics:smooth_titanium',
  'createcybernetics:smooth_titanium_stairs',
  'createcybernetics:smooth_titanium_slab',
  'createcybernetics:titanium_grate',
  'createcybernetics:titanium_clad_copper',
  'createcybernetics:titanium_clad_copper_stairs',
  'createcybernetics:titanium_clad_copper_slab',
  'createcybernetics:etched_titanium_copper_stairs',
  'createcybernetics:etched_titanium_copper',
  'createcybernetics:etched_titanium_copper_slab',
  'createcybernetics:raw_titanium_block',
  'createcybernetics:holoprojector',
  'createcybernetics:empty_autoinjector',
  'createcybernetics:eyeupgradebase',
  'createcybernetics:titanium_hand',
  'createcybernetics:titaniumingot',
  'createcybernetics:titaniumnugget',
  'createcybernetics:titaniumsheet',
  'createcybernetics:holoimprint_chip',
  'createcybernetics:frontal_lobe',
  'createcybernetics:parietal_lobe',
  'createcybernetics:temporal_lobe',
  'createcybernetics:occipital_lobe',
  'createcybernetics:cerebellum',
  'createcybernetics:faceplate',
  'createcybernetics:emp_grenade',
  'createcybernetics:tar',
  'createcybernetics:unrefined_polymer',
  'createcybernetics:plastic_sheet',
  'createcybernetics:copper_upgrade_template',
  'createcybernetics:iron_upgrade_template',
  'createcybernetics:gold_upgrade_template',
  'createcybernetics:component_actuator',
  'createcybernetics:component_fiberoptics',
  'createcybernetics:component_wiring',
  'createcybernetics:component_diodes',
  'createcybernetics:component_plating',
  'createcybernetics:component_graphicscard',
  'createcybernetics:component_ssd',
  'createcybernetics:component_storage',
  'createcybernetics:component_synthnerves',
  'createcybernetics:component_mesh',
  'createcybernetics:component_led',
  'createcybernetics:component_titaniumrod',
  'createcybernetics:surgery_table',
  'createcybernetics:engineering_table',
  'createcybernetics:grafting_table',
  'createcybernetics:holoprojector',
  'createcybernetics:muscleupgrades_ballisticgel'
];

removedRecipes.forEach(id => event.remove({ output: id }));

const removedTypes = [
  "createcybernetics:grafting_table",
  "createcybernetics:engineering_deconstruct",
  "createcybernetics:engineering_table",
];

removedTypes.forEach(type => event.remove({ type: type }));
})
