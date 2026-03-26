ServerEvents.tags('item', event => {

  //
  // --- Повний список предметів для основного залізного тега ---
  //
  const ironMaterials = [
    "roll_mod:crushed_hematite_ore",
    "roll_mod:impure_hematite_dust",
    "roll_mod:refined_hematite_ore",
    "roll_mod:pure_hematite_dust",
    "roll_mod:purified_hematite_ore",
    "roll_mod:hematite_dust",

    "roll_mod:crushed_yellow_limonite_ore",
    "roll_mod:impure_yellow_limonite_dust",
    "roll_mod:refined_yellow_limonite_ore",
    "roll_mod:pure_yellow_limonite_dust",
    "roll_mod:purified_yellow_limonite_ore",
    "roll_mod:yellow_limonite_dust",

    "roll_mod:crushed_magnetite_ore",
    "roll_mod:impure_magnetite_dust",
    "roll_mod:refined_magnetite_ore",
    "roll_mod:pure_magnetite_dust",
    "roll_mod:purified_magnetite_ore",
    "roll_mod:magnetite_dust",

    "roll_mod:raw_pyrite",
    "roll_mod:crushed_pyrite_ore",
    "roll_mod:impure_pyrite_dust",
    "roll_mod:refined_pyrite_ore",
    "roll_mod:pure_pyrite_dust",
    "roll_mod:purified_pyrite_ore",
    "roll_mod:pyrite_dust",

    "roll_mod:crushed_goethite_ore",
    "roll_mod:impure_goethite_dust",
    "roll_mod:refined_goethite_ore",
    "roll_mod:pure_goethite_dust",
    "roll_mod:purified_goethite_ore",
    "roll_mod:goethite_dust"
  ]


  //
  // --- Головний тег залізних руд ---
  //
  ironMaterials.forEach(id => event.add('roll_mod:ores/iron', id))


  //
  // --- Додаємо всі підтеги до головного ---
  //
  event.add('roll_mod:ores/iron', '#c:ores/hematite')
  event.add('roll_mod:ores/iron', '#c:ores/yellow_limonite')
  event.add('roll_mod:ores/iron', '#c:ores/magnetite')
  event.add('roll_mod:ores/iron', '#c:ores/pyrite')
  event.add('roll_mod:ores/iron', '#c:ores/goethite')


})

ServerEvents.tags('item', event => {
  const leadChain = [
    "roll_mod:crushed_lead_ore",
    "roll_mod:impure_lead_dust",
    "roll_mod:refined_lead_ore",
    "roll_mod:pure_lead_dust",
    "roll_mod:purified_lead_ore",
    "roll_mod:lead_dust"
  ];

  const galenaChain = [
    "roll_mod:crushed_galena_ore",
    "roll_mod:impure_galena_dust",
    "roll_mod:refined_galena_ore",
    "roll_mod:pure_galena_dust",
    "roll_mod:purified_galena_ore",
    "roll_mod:galena_dust"
  ];

  //
  // --- Main lead tag ---
  //
  leadChain.forEach(id => event.add('roll_mod:ores/lead', id));
  galenaChain.forEach(id => event.add('roll_mod:ores/lead', id));

  //
  // --- Subtags ---
  //
  // Add subtags into the main tag
  //
  event.add('roll_mod:ores/lead', '#c:ores/lead');
  event.add('roll_mod:ores/lead', '#c:ores/galena');

});

ServerEvents.tags('item', event => {

  const copperMaterials = [
    // Malachite
    "roll_mod:crushed_malachite_ore",
    "roll_mod:impure_malachite_dust",
    "roll_mod:refined_malachite_ore",
    "roll_mod:pure_malachite_dust",
    "roll_mod:purified_malachite_ore",
    "roll_mod:malachite_dust",

    // Tetrahedrite
    "roll_mod:crushed_tetrahedrite_ore",
    "roll_mod:impure_tetrahedrite_dust",
    "roll_mod:refined_tetrahedrite_ore",
    "roll_mod:pure_tetrahedrite_dust",
    "roll_mod:purified_tetrahedrite_ore",
    "roll_mod:tetrahedrite_dust",

    // Chalcocite
    "roll_mod:raw_chalcocite",
    "roll_mod:crushed_chalcocite_ore",
    "roll_mod:impure_chalcocite_dust",
    "roll_mod:refined_chalcocite_ore",
    "roll_mod:pure_chalcocite_dust",
    "roll_mod:purified_chalcocite_ore",
    "roll_mod:chalcocite_dust",

    // Bornite
    "roll_mod:crushed_bornite_ore",
    "roll_mod:impure_bornite_dust",
    "roll_mod:refined_bornite_ore",
    "roll_mod:pure_bornite_dust",
    "roll_mod:purified_bornite_ore",
    "roll_mod:bornite_dust",

    //Chalcopyrite
    "roll_mod:crushed_chalcopyrite_ore",
    "roll_mod:impure_chalcopyrite_dust",
    "roll_mod:refined_chalcopyrite_ore",
    "roll_mod:pure_chalcopyrite_dust",
    "roll_mod:purified_chalcopyrite_ore",
    "roll_mod:chalcopyrite_dust",
  ]

  //
  // --- Головний тег мідних руд ---
  //
  copperMaterials.forEach(id => event.add('roll_mod:ores/copper', id))


  event.add('roll_mod:ores/copper', '#c:ores/malachite')
  event.add('roll_mod:ores/copper', '#c:ores/bornite')
  event.add('roll_mod:ores/copper', '#c:ores/chalcocite')
  event.add('roll_mod:ores/copper', '#c:ores/tetrahedrite')
  event.add('roll_mod:ores/copper', '#c:ores/chalcopyrite')
})

ServerEvents.tags('item', event => {

  const antimonyMaterials = [
    "roll_mod:crushed_stibnite_ore",
    "roll_mod:impure_stibnite_dust",
    "roll_mod:refined_stibnite_ore",
    "roll_mod:pure_stibnite_dust",
    "roll_mod:purified_stibnite_ore",
    "roll_mod:stibnite_dust"
  ];

  //
  // --- Головний тег антимонових руд ---
  //
  antimonyMaterials.forEach(id => event.add('roll_mod:ores/antimony', id));


  event.add('roll_mod:ores/antimony', '#c:ores/stibnite')
})

ServerEvents.tags('item', event => {

  const goldMaterials = [
    "roll_mod:crushed_gold_ore",
    "roll_mod:impure_gold_dust",
    "roll_mod:refined_gold_ore",
    "roll_mod:pure_gold_dust",
    "roll_mod:purified_gold_ore",
    "roll_mod:gold_dust"
  ];

  //
  // --- Головний тег золотих руд ---
  //
  goldMaterials.forEach(id => event.add('roll_mod:ores/gold', id));

  event.add('roll_mod:ores/gold', '#c:ores/gold')
});


ServerEvents.tags('item', event => {

  const silverMaterials = [
    "roll_mod:crushed_silver_ore",
    "roll_mod:impure_silver_dust",
    "roll_mod:refined_silver_ore",
    "roll_mod:pure_silver_dust",
    "roll_mod:purified_silver_ore",
    "roll_mod:silver_dust"
  ];

  //
  // --- Головний тег срібних руд ---
  //
  silverMaterials.forEach(id => event.add('roll_mod:ores/silver', id));

  event.add('roll_mod:ores/silver', '#c:ores/silver')
});

ServerEvents.tags('item', event => {

  const nickelMaterials = [

    // Sheldonite
    "roll_mod:crushed_sheldonite_ore",
    "roll_mod:impure_sheldonite_dust",
    "roll_mod:refined_sheldonite_ore",
    "roll_mod:pure_sheldonite_dust",
    "roll_mod:purified_sheldonite_ore",
    "roll_mod:sheldonite_dust",

    // Garnierite
    "roll_mod:crushed_garnierite_ore",
    "roll_mod:impure_garnierite_dust",
    "roll_mod:refined_garnierite_ore",
    "roll_mod:pure_garnierite_dust",
    "roll_mod:purified_garnierite_ore",
    "roll_mod:garnierite_dust",

    // Pentlandite
    "roll_mod:crushed_pentlandite_ore",
    "roll_mod:impure_pentlandite_dust",
    "roll_mod:refined_pentlandite_ore",
    "roll_mod:pure_pentlandite_dust",
    "roll_mod:purified_pentlandite_ore",
    "roll_mod:pentlandite_dust"
  ]

  //
  // --- Головний тег нікелевих руд ---
  //
  nickelMaterials.forEach(id => event.add('roll_mod:ores/nickel', id))

  //
  // --- Підтримка forge/cross-mod тегів ---
  //
  event.add('roll_mod:ores/nickel', '#c:ores/sheldonite')
  event.add('roll_mod:ores/nickel', '#c:ores/garnierite')
  event.add('roll_mod:ores/nickel', '#c:ores/pentlandite')
})

ServerEvents.tags('item', event => {

  const tinMaterials = [
    "roll_mod:crushed_cassiterite_ore",
    "roll_mod:refined_cassiterite_ore",
    "roll_mod:impure_cassiterite_dust",
    "roll_mod:pure_cassiterite_dust",
    "roll_mod:purified_cassiterite_ore",
    "roll_mod:cassiterite_dust"
  ];

  //
  // --- Головний тег золотих руд ---
  //
  tinMaterials.forEach(id => event.add('roll_mod:ores/cassiterite', id));

  event.add('roll_mod:ores/cassiterite', '#c:ores/cassiterite')
  event.add('roll_mod:ores/cassiterite', '#c:ores/tin')
});

ServerEvents.tags('item', event => {

  const zincMaterials = [
    "roll_mod:crushed_sphalerite_ore",
    "roll_mod:impure_sphalerite_dust",
    "roll_mod:refined_sphalerite_ore",
    "roll_mod:pure_sphalerite_dust",
    "roll_mod:purified_sphalerite_ore",
    "roll_mod:sphalerite_dust"
  ];

  //
  // --- Головний тег золотих руд ---
  //
  zincMaterials.forEach(id => event.add('roll_mod:ores/sphalerite', id));

  event.add('roll_mod:ores/sphalerite', '#c:ores/sphalerite')
});
