ServerEvents.recipes(event => {
    if (!Platform.isLoaded('nomansland')) return;
    if (!Platform.isLoaded('yet_another_industrialization')) return;

    const nomanslandTrees = [
        { sapling: 'nomansland:autumnal_oak_sapling', leaves: 'nomansland:autumnal_oak_leaves', log: 'minecraft:oak_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:pine_sapling', leaves: 'nomansland:pine_leaves', log: 'minecraft:spruce_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:yellow_birch_sapling', leaves: 'nomansland:yellow_birch_leaves', log: 'minecraft:birch_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:maple_sapling', leaves: 'nomansland:maple_leaves', log: 'minecraft:oak_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:red_maple_sapling', leaves: 'nomansland:red_maple_leaves', log: 'minecraft:oak_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:walnut_sapling', leaves: 'nomansland:walnut_leaves', log: 'minecraft:oak_log', fruit: 'nomansland:walnut', fruit_count: 8 },
        { sapling: 'nomansland:willow_sapling', leaves: 'nomansland:willow_leaves', log: 'minecraft:oak_log', fruit: null, fruit_count: 0 },
        { sapling: 'nomansland:pale_cherry_sapling', leaves: 'nomansland:pale_cherry_leaves', log: 'minecraft:cherry_log', fruit: null, fruit_count: 0 }
    ];

    nomanslandTrees.forEach(tree => {
        const waterOutputs = [];
        const distilledOutputs = [];

        if (tree.fruit && tree.fruit_count > 0) {
            waterOutputs.push({ amount: tree.fruit_count, item: tree.fruit });
            distilledOutputs.push({ amount: tree.fruit_count * 2, item: tree.fruit });
        } else {
            waterOutputs.push({ amount: 16, item: tree.log });
            distilledOutputs.push({ amount: 32, item: tree.log });
        }

        waterOutputs.push({ amount: 32, item: tree.leaves });
        waterOutputs.push({ amount: 1, item: tree.sapling, probability: 0.5 });

        distilledOutputs.push({ amount: 64, item: tree.leaves });
        distilledOutputs.push({ amount: 1, item: tree.sapling, probability: 1.0 });

        event.custom({
            type: "yet_another_industrialization:arboreous_greenhouse",
            duration: 1200,
            eu: 15,
            fluid_inputs: [
                {
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            item_inputs: [
                {
                    amount: 1,
                    item: tree.sapling,
                    probability: 0.0
                }
            ],
            item_outputs: waterOutputs,
            process_conditions: [
                {
                    type: "yet_another_industrialization:arboreous_greenhouse_tier",
                    model: tree.sapling,
                    tier_id: "yet_another_industrialization:grass_block"
                }
            ]
        });

        event.custom({
            type: "yet_another_industrialization:arboreous_greenhouse",
            duration: 1200,
            eu: 15,
            fluid_inputs: [
                {
                    amount: 250,
                    fluid: "extended_industrialization:distilled_water"
                }
            ],
            item_inputs: [
                {
                    amount: 1,
                    item: tree.sapling,
                    probability: 0.0
                }
            ],
            item_outputs: distilledOutputs,
            process_conditions: [
                {
                    type: "yet_another_industrialization:arboreous_greenhouse_tier",
                    model: tree.sapling,
                    tier_id: "yet_another_industrialization:grass_block"
                }
            ]
        });
    });
});