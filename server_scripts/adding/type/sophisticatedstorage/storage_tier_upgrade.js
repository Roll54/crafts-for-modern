ServerEvents.recipes(event => {
    event.remove({ output: /sophisticatedstorage:.*_(barrel|chest|shulker_box)/ });

    const mats = {
        bronze: { p: "modern_industrialization:bronze_plate", r: "modern_industrialization:bronze_rod" },
        steel: { p: "modern_industrialization:steel_plate", r: "modern_industrialization:steel_rod" },
        aluminum: { p: "modern_industrialization:aluminum_plate", r: "modern_industrialization:aluminum_rod" },
        stainless: { p: "modern_industrialization:stainless_steel_plate", r: "modern_industrialization:stainless_steel_rod" },
        titanium: { p: "modern_industrialization:titanium_plate", r: "modern_industrialization:titanium_rod" }
    };

    const add = (input, output, tier) => {
        event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            key: {
                P: { item: mats[tier].p },
                R: { item: mats[tier].r },
                S: { item: input }
            },
            pattern: ["PRP", "RSR", "PRP"],
            result: { id: output, count: 1 }
        });
    };

    const types = ["barrel", "chest", "shulker_box"];
    const barrels = ["limited_barrel_1", "limited_barrel_2", "limited_barrel_3", "limited_barrel_4"];

    add("minecraft:barrel", "sophisticatedstorage:copper_barrel", "bronze");
    add("minecraft:chest", "sophisticatedstorage:copper_chest", "bronze");
    add("minecraft:shulker_box", "sophisticatedstorage:copper_shulker_box", "bronze");

    barrels.forEach(b => add(`sophisticatedstorage:${b}`, `sophisticatedstorage:limited_copper_${b.replace("limited_", "")}`, "bronze"));

    add("sophisticatedstorage:copper_barrel", "sophisticatedstorage:iron_barrel", "steel");
    add("sophisticatedstorage:copper_chest", "sophisticatedstorage:iron_chest", "steel");
    add("sophisticatedstorage:copper_shulker_box", "sophisticatedstorage:iron_shulker_box", "steel");

    barrels.forEach(b => add(`sophisticatedstorage:limited_copper_${b.replace("limited_", "")}`, `sophisticatedstorage:limited_iron_${b.replace("limited_", "")}`, "steel"));

    add("sophisticatedstorage:iron_barrel", "sophisticatedstorage:gold_barrel", "aluminum");
    add("sophisticatedstorage:iron_chest", "sophisticatedstorage:gold_chest", "aluminum");
    add("sophisticatedstorage:iron_shulker_box", "sophisticatedstorage:gold_shulker_box", "aluminum");

    barrels.forEach(b => add(`sophisticatedstorage:limited_iron_${b.replace("limited_", "")}`, `sophisticatedstorage:limited_gold_${b.replace("limited_", "")}`, "aluminum"));

    add("sophisticatedstorage:gold_barrel", "sophisticatedstorage:diamond_barrel", "stainless");
    add("sophisticatedstorage:gold_chest", "sophisticatedstorage:diamond_chest", "stainless");
    add("sophisticatedstorage:gold_shulker_box", "sophisticatedstorage:diamond_shulker_box", "stainless");

    barrels.forEach(b => add(`sophisticatedstorage:limited_gold_${b.replace("limited_", "")}`, `sophisticatedstorage:limited_diamond_${b.replace("limited_", "")}`, "stainless"));

    add("sophisticatedstorage:diamond_barrel", "sophisticatedstorage:netherite_barrel", "titanium");
    add("sophisticatedstorage:diamond_chest", "sophisticatedstorage:netherite_chest", "titanium");
    add("sophisticatedstorage:diamond_shulker_box", "sophisticatedstorage:netherite_shulker_box", "titanium");

    barrels.forEach(b => add(`sophisticatedstorage:limited_diamond_${b.replace("limited_", "")}`, `sophisticatedstorage:limited_netherite_${b.replace("limited_", "")}`, "titanium"));
});