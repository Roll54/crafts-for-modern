ServerEvents.recipes(event => {

    const oreProcessing = [
        {
            ore_name: "hematite",
            input: "#c:ores/hematite",

            main_multiplier: 3,

            macerator_byproduct: "roll_mod:magnetite_dust",
            centrifuge_byproduct: "roll_mod:goethite_dust",
            washer_byproduct: "roll_mod:bauxite_dust"
        },
        {
            ore_name: "mica",
            input: "#c:ores/mica",

            main_multiplier: 5,

            macerator_byproduct: "roll_mod:fluorite_dust",
            centrifuge_byproduct: "roll_mod:redstone_dust",
            washer_byproduct: "roll_mod:calcium_dust"
        },
        {
            ore_name: "yellow_limonite",
            input: "#c:ores/yellow_limonite",

            main_multiplier: 3,

            macerator_byproduct: "roll_mod:hematite_dust",
            centrifuge_byproduct: "roll_mod:magnetite_dust",
            washer_byproduct: "roll_mod:pyrite_dust"
        },
        {
            ore_name: "biotite",
            input: "#c:ores/biotite",

            main_multiplier: 2,

            macerator_byproduct: "minecraft:quartz",
            centrifuge_byproduct: "roll_mod:redstone_dust",
            washer_byproduct: "roll_mod:raw_monazite"
        },
        {
            ore_name: "magnetite",
            input: "#c:ores/magnetite",

            main_multiplier: 5,

            macerator_byproduct: "roll_mod:hematite_dust",
            centrifuge_byproduct: "roll_mod:chromite_dust",
            washer_byproduct: "roll_mod:pyrite_dust"
        },
        {
            ore_name: "garnierite",
            input: "#c:ores/garnierite",

            main_multiplier: 2,

            macerator_byproduct: "roll_mod:yellow_limonite_dust",
            centrifuge_byproduct: "roll_mod:soap_stone_dust",
            washer_byproduct: "roll_mod:magnetite_dust"
        },
        {
            ore_name: "pentlandite",
            input: "#c:ores/pentlandite",

            main_multiplier: 2,

            macerator_byproduct: "roll_mod:chalcopyrite_dust",
            centrifuge_byproduct: "roll_mod:yellow_limonite_dust",
            washer_byproduct: "roll_mod:magnetite_dust"
        },
        {
            ore_name: "chalcopyrite",
            input: "#c:ores/chalcopyrite",

            main_multiplier: 2,

            macerator_byproduct: "roll_mod:pyrite_dust",
            centrifuge_byproduct: "roll_mod:pyrite_dust",
            washer_byproduct: "roll_mod:sphalerite_dust"
        },
{
    ore_name: "certus_quartz",
    input: "#c:ores/certus_quartz",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "roll_mod:apatite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "galena",
    input: "#c:ores/galena",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:bismuth_dust",
    centrifuge_byproduct: "roll_mod:lead_dust",
    washer_byproduct: "roll_mod:silver_dust"
},
{
    ore_name: "pyrolusite",
    input: "#c:ores/pyrolusite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:goethite_dust",
    centrifuge_byproduct: "roll_mod:rhodochrosite_dust",
    washer_byproduct: "roll_mod:yellow_limonite_dust"
},
{
    ore_name: "pyrochlore",
    input: "#c:ores/pyrochlore",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "roll_mod:apatite_dust",
    washer_byproduct: "roll_mod:rutile_dust"
},
{
    ore_name: "pyrope",
    input: "#c:ores/pyrope",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:chromite_dust",
    centrifuge_byproduct: "roll_mod:olivine_dust",
    washer_byproduct: "roll_mod:cinnabar_dust"
},
{
    ore_name: "apatite",
    input: "#c:ores/apatite",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "roll_mod:pyrochlore_dust",
    washer_byproduct: "roll_mod:monazite_dust"
},
{
    ore_name: "rhodochrosite",
    input: "#c:ores/rhodochrosite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:pyrolusite_dust",
    centrifuge_byproduct: "roll_mod:sphalerite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "chromite",
    input: "#c:ores/chromite",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:olivine_dust",
    centrifuge_byproduct: "roll_mod:magnetite_dust",
    washer_byproduct: "roll_mod:pyrope_dust"
},
{
    ore_name: "malachite",
    input: "#c:ores/malachite",

    main_multiplier: 6,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "modern_industrialization:copper_dust",
    washer_byproduct: "roll_mod:yellow_limonite_dust"
},
{
    ore_name: "fluorite",
    input: "#c:ores/fluorite",

    main_multiplier: 2,

    macerator_byproduct: "minecraft:quartz",
    centrifuge_byproduct: "roll_mod:mica_dust",
    washer_byproduct: "roll_mod:fluorite_dust"
},
{
    ore_name: "pyrite",
    input: "#c:ores/pyrite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "modern_industrialization:sulfur_dust",
    washer_byproduct: "roll_mod:cinnabar_dust"
},
{
    ore_name: "cinnabar",
    input: "#c:ores/cinnabar",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:pyrite_dust",
    centrifuge_byproduct: "roll_mod:ruby_dust",
    washer_byproduct: "roll_mod:cinnabar_dust"
},
{
    ore_name: "peridot",
    input: "#c:ores/peridot",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:chromite_dust",
    centrifuge_byproduct: "roll_mod:pyrope_dust",
    washer_byproduct: "roll_mod:magnetite_dust"
},

{
    ore_name: "lazurite",
    input: "#c:ores/lazurite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:pyrite_dust",
    centrifuge_byproduct: "roll_mod:olivine_dust",
    washer_byproduct: "roll_mod:apatite_dust"
},

{
    ore_name: "sodalite",
    input: "#c:ores/sodalite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "minecraft:lapis_lazuli",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "tetrahedrite",
    input: "#c:ores/tetrahedrite",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "roll_mod:bornite_dust",
    washer_byproduct: "roll_mod:stibnite_dust"
},
{
    ore_name: "stibnite",
    input: "#c:ores/stibnite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:pyrite_dust",
    centrifuge_byproduct: "roll_mod:tetrahedrite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "rutile",
    input: "#c:ores/rutile",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:ilmenite_dust",
    centrifuge_byproduct: "roll_mod:hematite_dust",
    washer_byproduct: "roll_mod:chromite_dust"
},
{
    ore_name: "ilmenite",
    input: "#c:ores/ilmenite",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:magnetite_dust",
    centrifuge_byproduct: "roll_mod:rutile_dust",
    washer_byproduct: "roll_mod:hematite_dust"
},
{
    ore_name: "topaz",
    input: "#c:ores/topaz",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "minecraft:quartz",
    washer_byproduct: "roll_mod:hematite_dust"
},
{
    ore_name: "blue_topaz",
    input: "#c:ores/blue_topaz",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:fluorite_dust",
    centrifuge_byproduct: "roll_mod:mica_dust",
    washer_byproduct: "roll_mod:raw_monazite"
},
{
    ore_name: "chalcocite",
    input: "#c:ores/chalcocite",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "roll_mod:bornite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "bornite",
    input: "#c:ores/bornite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "roll_mod:chalcocite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "sulfur",
    input: "#c:ores/sulfur",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:pyrite_dust",
    centrifuge_byproduct: "roll_mod:chalcopyrite_dust",
    washer_byproduct: "roll_mod:purified_sulfur_ore"
},
{
    ore_name: "sphalerite",
    input: "#c:ores/sphalerite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:galena_dust",
    centrifuge_byproduct: "roll_mod:pyrite_dust",
    washer_byproduct: "roll_mod:bismuth_dust"
},
{
    ore_name: "monazite",
    input: "#c:ores/monazite",

    main_multiplier: 2,

    macerator_byproduct: "minecraft:quartz",
    centrifuge_byproduct: "roll_mod:fluorite_dust",
    washer_byproduct: "roll_mod:raw_redstone"
},
{
    ore_name: "ruby",
    input: "#c:ores/ruby",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:hematite_dust",
    centrifuge_byproduct: "roll_mod:chromite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "redstone",
    input: "#c:ores/redstone",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:hematite_dust",
    centrifuge_byproduct: "roll_mod:pyrite_dust",
    washer_byproduct: "roll_mod:raw_ruby"
},
{
    ore_name: "saltpeter",
    input: "#c:ores/saltpeter",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:sulfur_dust",
    centrifuge_byproduct: "roll_mod:rock_salt_dust",
    washer_byproduct: "roll_mod:raw_salt"
},
{
    ore_name: "emerald",
    input: "#c:ores/emerald",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:chromite_dust",
    centrifuge_byproduct: "roll_mod:fluorite_dust",
    washer_byproduct: "roll_mod:beryllium_dust"
},
{
    ore_name: "beryllium",
    input: "#c:ores/beryllium",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:lepidolite_dust",
    centrifuge_byproduct: "roll_mod:emerald_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "molybdenum",
    input: "#c:ores/molybdenum",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:magnetite_dust",
    centrifuge_byproduct: "roll_mod:hematite_dust",
    washer_byproduct: "roll_mod:olivine_dust",
},
{
    ore_name: "tantalite",
    input: "#c:ores/tantalite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:pyrolusite_dust",
    centrifuge_byproduct: "roll_mod:magnetite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "molybdenite",
    input: "#c:ores/molybdenite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:chalcopyrite_dust",
    centrifuge_byproduct: "roll_mod:scheelite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "wulfenite",
    input: "#c:ores/wulfenite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:galena_dust",
    centrifuge_byproduct: "roll_mod:molybdenite_dust",
    washer_byproduct: "roll_mod:scheelite_dust"
},
{
    ore_name: "powellite",
    input: "#c:ores/powellite",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:molybdenite_dust",
    centrifuge_byproduct: "roll_mod:scheelite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "gold",
    input: "#c:ores/gold",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:magnetite_dust",
    centrifuge_byproduct: "roll_mod:silver_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "goethite",
    input: "#c:ores/goethite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:hematite_dust",
    centrifuge_byproduct: "roll_mod:magnetite_dust",
    washer_byproduct: "roll_mod:yellow_limonite_dust"
},
{
    ore_name: "vanadium_magnetite",
    input: "#c:ores/vanadium_magnetite",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:raw_ilmenite",
    centrifuge_byproduct: "roll_mod:raw_chromite",
    washer_byproduct: "roll_mod:raw_magnetite"
},
{
    ore_name: "silver",
    input: "#c:ores/silver",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:galena_dust",
    centrifuge_byproduct: "roll_mod:silver_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "bauxite",
    input: "#c:ores/bauxite",

    main_multiplier: 7,

    macerator_byproduct: "roll_mod:goethite_dust",
    centrifuge_byproduct: "roll_mod:hematite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "lepidolite",
    input: "#c:ores/lepidolite",

    main_multiplier: 4,

    macerator_byproduct: "roll_mod:rock_salt_dust",
    centrifuge_byproduct: "roll_mod:salt_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "rock_salt",
    input: "#c:ores/rock_salt",

    main_multiplier: 6,

    macerator_byproduct: "roll_mod:lepidolite_dust",
    centrifuge_byproduct: "roll_mod:salt_dust",
    washer_byproduct: "roll_mod:salt_dust"
},
{
    ore_name: "salt",
    input: "#c:ores/salt",

    main_multiplier: 6,

    macerator_byproduct: "roll_mod:lepidolite_dust",
    centrifuge_byproduct: "roll_mod:rock_salt_dust",
    washer_byproduct: "roll_mod:salt_dust"
},
{
    ore_name: "tungstate",
    input: "#c:ores/tungstate",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:scheelite_dust",
    centrifuge_byproduct: "modern_industrialization:tungsten_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "scheelite",
    input: "#c:ores/scheelite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:tungstate_dust",
    centrifuge_byproduct: "roll_mod:fluorite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "lithium",
    input: "#c:ores/lithium",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:tungstate_dust",
    centrifuge_byproduct: "roll_mod:scheelite_dust",
    washer_byproduct: "minecraft:quartz"
},
{
    ore_name: "sheldonite",
    input: "#c:ores/sheldonite",

    main_multiplier: 4,

    macerator_byproduct: "modern_industrialization:nickel_dust",
    centrifuge_byproduct: "modern_industrialization:nickel_dust",
    washer_byproduct: "roll_mod:gold_dust"
},
{
    ore_name: "pitchblende",
    input: "#c:ores/pitchblende",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:uraninite_dust",
    centrifuge_byproduct: "roll_mod:thorium_dust",
    washer_byproduct: "roll_mod:lead_dust"
},
{
    ore_name: "uraninite",
    input: "#c:ores/uraninite",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:pitchblende_dust",
    centrifuge_byproduct: "roll_mod:thorium_dust",
    washer_byproduct: "roll_mod:silver_dust"
},
{
    ore_name: "thorium",
    input: "#c:ores/thorium",

    main_multiplier: 1,

    macerator_byproduct: "roll_mod:uraninite_dust",
    centrifuge_byproduct: "roll_mod:pitchblende_dust",
    washer_byproduct: "roll_mod:bismuth_dust"
},
{
    ore_name: "lead",
    input: "#c:ores/lead",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:sulfur_dust",
    centrifuge_byproduct: "roll_mod:silver_dust",
    washer_byproduct: "roll_mod:purified_silver_ore"
},
{
    ore_name: "cassiterite",
    input: "#c:ores/cassiterite",

    main_multiplier: 3,

    macerator_byproduct: "modern_industrialization:tin_dust",
    centrifuge_byproduct: "modern_industrialization:tin_dust",
    washer_byproduct: "roll_mod:cassiterite_dust"
},
{
    ore_name: "lapis_lazuli",
    input: "#c:ores/lapis_lazuli",

    main_multiplier: 6,

    macerator_byproduct: "roll_mod:pyrite_dust",
    centrifuge_byproduct: "roll_mod:lapis_lazuli_dust",
    washer_byproduct: "roll_mod:lapis_lazuli_dust"
},
{
    ore_name: "bismuth",
    input: "#c:ores/bismuth",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:galena_dust",
    centrifuge_byproduct: "roll_mod:lead_dust",
    washer_byproduct: "roll_mod:bismuth_dust"
},
{
    ore_name: "trona",
    input: "#c:ores/trona",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:trona_dust",
    centrifuge_byproduct: "roll_mod:calcium_carbonate",
    washer_byproduct: "roll_mod:calcium_dust"
},
{
    ore_name: "azure_silver",
    input: "#c:ores/azure_silver",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:silver_dust",
    centrifuge_byproduct: "roll_mod:silver_amalgam_dust",
    washer_byproduct: "roll_mod:silver_dust"
},
{
    ore_name: "cassiterite_sand",
    input: "#c:ores/cassiterite_sand",

    main_multiplier: 6,

    macerator_byproduct: "roll_mod:cassiterite_dust",
    centrifuge_byproduct: "roll_mod:cassiterite_sand_dust",
    washer_byproduct: "roll_mod:cassiterite_dust"
},
{
    ore_name: "bort",
    input: "#c:ores/bort",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:diamond_dust",
    centrifuge_byproduct: "roll_mod:coal_dust",
    washer_byproduct: "roll_mod:bort_dust"
},
{
    ore_name: "diamond",
    input: "#c:ores/diamond",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:coal_dust",
    centrifuge_byproduct: "roll_mod:diamond_dust",
    washer_byproduct: "roll_mod:coal_dust"
},
{
    ore_name: "quartz",
    input: "#c:ores/quartz",

    main_multiplier: 7,

    macerator_byproduct: "roll_mod:certus_quartz_dust",
    centrifuge_byproduct: "roll_mod:gold_dust",
    washer_byproduct: "roll_mod:certus_quartz_dust"
},
{
    ore_name: "gold_amalgam",
    input: "#c:ores/gold_amalgam",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:cinnabar_dust",
    centrifuge_byproduct: "roll_mod:sheldonite_dust",
    washer_byproduct: "roll_mod:bornite_dust"
},
{
    ore_name: "silver_amalgam",
    input: "#c:ores/silver_amalgam",

    main_multiplier: 3,

    macerator_byproduct: "roll_mod:cinnabar_dust",
    centrifuge_byproduct: "roll_mod:sheldonite_dust",
    washer_byproduct: "roll_mod:azure_silver_dust"
},
{
    ore_name: "coal",
    input: "#c:ores/coal",

    main_multiplier: 5,

    macerator_byproduct: "roll_mod:coal_dust",
    centrifuge_byproduct: "modern_industrialization:diamond_tiny_dust",
    washer_byproduct: "minecraft:coal"
},
{
    ore_name: "lignite_coal",
    input: "#c:ores/lignite_coal",

    main_multiplier: 7,

    macerator_byproduct: "roll_mod:sulfur_dust",
    centrifuge_byproduct: "roll_mod:coal_dust",
    washer_byproduct: "roll_mod:saltpeter_dust"
},
{
    ore_name: "iridium",
    input: "#c:ores/iridium",

    main_multiplier: 2,

    macerator_byproduct: "roll_mod:sheldonite_dust",
    centrifuge_byproduct: "roll_mod:rarest_metal_dust",
    washer_byproduct: "roll_mod:gold_amalgam_dust"
},
{
    ore_name: "olivine",
    input: "#c:ores/olivine",

    main_multiplier: 7,

    macerator_byproduct: "roll_mod:pyrope_dust",
    centrifuge_byproduct: "roll_mod:obsidian_dust",
    washer_byproduct: "roll_mod:peridot_dust"
},

    ];

    oreProcessing.forEach(ore => {

        // авто-ID
        const crushed   = `roll_mod:crushed_${ore.ore_name}_ore`;
        const impure    = `roll_mod:impure_${ore.ore_name}_dust`;
        const pure      = `roll_mod:${ore.ore_name}_dust`;
        const purified  = `roll_mod:purified_${ore.ore_name}_ore`;
        const refined   = `roll_mod:refined_${ore.ore_name}_ore`;
        const macerator_byproduct = `${ore.macerator_byproduct}`;

        //
        // 1) RAW/TAG → CRUSHED
        //
        event.recipes.modern_industrialization.macerator(2, 200)
            .itemIn(`1x ${ore.input}`)
            .itemOut(`${ore.main_multiplier}x ${crushed}`)
            .itemOut(`1x ${macerator_byproduct}`, 0.5);

        //
        // 2) CRUSHED → IMPURE
        //
        event.recipes.modern_industrialization.macerator(2, 200)
            .itemIn(`1x ${crushed}`)
            .itemOut(`2x ${impure}`)
            .itemOut(`1x ${macerator_byproduct}`, 0.5);
        //
        // 3) IMPURE → PURE (centrifuge)
        //
        event.recipes.modern_industrialization.centrifuge(32, 16)
            .itemIn(`1x ${impure}`)
            .itemOut(`1x ${pure}`)
            .itemOut(`1x ${ore.centrifuge_byproduct}`, 0.5);

        //
        // 4) CRUSHED → PURIFIED (ore washer)
        //
        event.recipes.modern_industrialization.lv_ore_washer(32, 16)
            .itemIn(`1x ${crushed}`)
            .fluidIn("minecraft:water", 1000)
            .itemOut(`1x ${purified}`)
            .itemOut(`1x ${ore.washer_byproduct}`);

        event.recipes.modern_industrialization.lv_ore_washer(32, 16)
            .itemIn(`1x ${crushed}`)
            .fluidIn("extended_industrialization:distilled_water", 250)
            .itemOut(`1x ${purified}`)
            .itemOut(`1x ${ore.washer_byproduct}`)
            .itemOut(`1x ${macerator_byproduct}`, 0.5);


        //
        // 5A) THERMAL CENTREFUGE: crushed → refined + macerator_byproduct
        //
        event.recipes.modern_industrialization.thermal_centrefuge(32, 16)
            .itemIn(`1x ${crushed}`)
            .itemOut(`1x ${refined}`)
            .itemOut(`1x ${macerator_byproduct}`, 0.5);

        //
        // 5B) THERMAL CENTREFUGE: purified → refined + centrifuge_byproduct
        
        event.recipes.modern_industrialization.thermal_centrefuge(32, 16)
            .itemIn(`1x ${purified}`)
            .itemOut(`1x ${refined}`)
            .itemOut(`1x ${ore.centrifuge_byproduct}`, 0.5);

        event.recipes.modern_industrialization.macerator(2, 200)
            .itemIn(`1x ${refined}`)
            .itemOut(`1x ${pure}`)
            .itemOut(`1x ${macerator_byproduct}`, 0.5);

        event.recipes.modern_industrialization.macerator(2, 200)
            .itemIn(`1x ${purified}`)
            .itemOut(`2x ${pure}`)
            .itemOut(`1x ${ore.centrifuge_byproduct}`, 0.5);


    });
});
