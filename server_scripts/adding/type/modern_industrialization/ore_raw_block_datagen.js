ServerEvents.recipes(event => {

    const rawBlocks = [
        "roll_mod:raw_scheelite_block",
        "roll_mod:raw_magnetite_block",
        "roll_mod:raw_hematite_block",
        "roll_mod:raw_chalcopyrite_block",
        "roll_mod:raw_galena_block",
        "roll_mod:raw_pyrite_block",
        "roll_mod:raw_cinnabar_block",
        "roll_mod:raw_sphalerite_block",
        "roll_mod:raw_rutile_block",
        "roll_mod:raw_ilmenite_block",
        "roll_mod:raw_chromite_block",
        "roll_mod:raw_malachite_block",
        "roll_mod:raw_bauxite_block",
        "roll_mod:raw_gold_block",
        "roll_mod:raw_silver_block",
        "roll_mod:raw_lead_block",
        "roll_mod:raw_nickel_block",
        "roll_mod:raw_iridium_block",
        "roll_mod:raw_tin_block",
        "roll_mod:raw_uranium_block",
        "roll_mod:raw_thorium_block",
        "roll_mod:raw_molybdenum_block",
        "roll_mod:raw_tungsten_block",
        "roll_mod:raw_lithium_block",
        "roll_mod:raw_beryllium_block",
        "roll_mod:raw_vanadium_block",
        "roll_mod:raw_titanium_block",
        "roll_mod:raw_osmium_block",
        "roll_mod:raw_palladium_block",
        "roll_mod:raw_rhodium_block",
        "roll_mod:raw_ruthenium_block",
        "roll_mod:raw_bismuth_block",
        "roll_mod:raw_cobalt_block",
        "roll_mod:raw_manganese_block",
        "roll_mod:raw_cassiterite_block",
        "roll_mod:raw_goethite_block",
        "roll_mod:raw_vanadium_magnetite_block",
        "roll_mod:raw_pitchblende_block",
        "roll_mod:raw_uraninite_block"
    ];

    rawBlocks.forEach(block => {
        const dustId = block.replace("_block", "");
        try {
            if (Item.of(block).getId() !== "minecraft:air") {
                event.shapeless(`9x ${dustId}`, [block]);
                event.shaped(block, ['AAA','AAA','AAA'], { A: dustId });
                event.recipes.modern_industrialization.unpacker(2, 100).itemIn(`1x ${block}`).itemOut(`9x ${dustId}`);
                event.recipes.modern_industrialization.packer(2, 100).itemIn(`9x ${dustId}`).itemIn("1x modern_industrialization:packer_block_template", 0.0).itemOut(`1x ${block}`);
            }
        } catch (e) {}
    });

});
