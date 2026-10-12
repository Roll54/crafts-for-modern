ServerEvents.recipes(event => {

const removedRecipes = [
  'createcybernetics:titanium_block',
  
];

removedRecipes.forEach(id => event.remove({ output: id }));

const removedTypes = [
  "createcybernetics:grafting_table",
  "createcybernetics:engineering_deconstruct",
  "createcybernetics:engineering_table",
];

removedTypes.forEach(type => event.remove({ type: type }));
/*
event.remove({ id: "ad_astra:space_station/earth_orbit_space_station" })

event.remove({ input: 'ad_astra:steel_rod' });
*/
})
