// server_scripts/forestry/assembler.js
// Forestry: carpenter + thermionic_fabricator (+ metal_plating) -> modern_industrialization:assembler

const IS_FORESTRY_LOADED = Platform.isLoaded('forestry');

ServerEvents.recipes(event => {
  if (!IS_FORESTRY_LOADED) return;

  // ----------------------- налаштування -----------------------
  const CARPENTER_EU = 16;
  const FABRICATOR_EU = 16;
  const FABRICATOR_TICKS = 200;
  const carpenterTicks = time => Math.max(100, time * 10); // time з Forestry (5..100) -> тіки асемблера

  const WATER = 'minecraft:water';
  const GLASS = 'forestry:liquid_glass';
  const WAX = 'forestry:wax';
  const SEED_OIL = 'forestry:seed_oil';
  const HONEY = 'forestry:honey';

  // ----------------------- хелпери -----------------------
  const asm = (eu, ticks, ins, fluid, out) => {
    try {
      const r = event.recipes.modern_industrialization.assembler(eu, ticks);
      ins.forEach(i => r.itemIn(i));
      if (fluid) r.fluidIn(fluid[0], fluid[1]);
      r.itemOut(out);
    } catch (e) {
      console.error('[forestry -> assembler] ' + out + ': ' + e);
    }
  };
  const carpenter = (time, fluid, ins, out) => asm(CARPENTER_EU, carpenterTicks(time), ins, fluid, out);
  const fabricator = (fluid, ins, out) => asm(FABRICATOR_EU, FABRICATOR_TICKS, ins, fluid, out);

  // ======================= CARPENTER =======================
  // carpenter(time, fluid, ingredients, output)
  carpenter(5, [WATER, 50], ['2x forestry:ash'], '1x forestry:ash_brick'); // ash_brick
  carpenter(5, [WATER, 1000], ['4x minecraft:dirt', '4x #c:sands', '1x forestry:mulch'], '8x forestry:bog_earth'); // bog_earth
  carpenter(5, null, ['4x forestry:beeswax', '1x minecraft:string'], '4x minecraft:candle'); // candles
  carpenter(5, [WATER, 1000], ['4x forestry:wood_pulp'], '2x forestry:carton'); // carton
  carpenter(5, [WATER, 200], ['4x #c:sawdust'], '4x forestry:cork'); // cork
  carpenter(5, [WATER, 1000], ['2x forestry:honeydew', '4x forestry:royal_jelly', '1x forestry:can', '2x minecraft:gunpowder'], '1x forestry:dissipation_charge'); // dissipation_charge
  carpenter(100, null, ['5x forestry:pulsating_mesh'], '1x minecraft:ender_pearl'); // ender_pearl
  carpenter(50, [SEED_OIL, 500], ['6x #minecraft:planks'], '1x forestry:escritoire'); // escritoire
  carpenter(75, [WATER, 5000], ['4x #c:gems/diamond', '1x forestry:sturdy_casing'], '1x forestry:hardened_casing'); // hardened_casing
  carpenter(5, [WATER, 1000], ['8x minecraft:dirt', '1x forestry:mulch'], '9x forestry:humus'); // humus
  carpenter(50, [SEED_OIL, 250], ['8x #minecraft:logs'], '1x forestry:impregnated_casing'); // impregnated_casing
  carpenter(50, [SEED_OIL, 100], ['2x #minecraft:logs'], '2x forestry:impregnated_stick'); // impregnated_stick
  carpenter(5, [WATER, 1000], ['2x forestry:honey_drop', '4x forestry:pollen_cluster', '1x forestry:can', '2x minecraft:gunpowder'], '1x forestry:iodine_capsule'); // iodine_charge
  carpenter(20, null, ['3x #c:ingots/bronze', '2x minecraft:stick', '1x forestry:carton'], '1x forestry:axe_kit'); // kit_axe
  carpenter(20, null, ['2x #c:ingots/bronze', '2x minecraft:stick', '1x forestry:carton'], '1x forestry:hoe_kit'); // kit_hoe
  carpenter(20, null, ['3x #c:ingots/bronze', '2x minecraft:stick', '1x forestry:carton'], '1x forestry:pickaxe_kit'); // kit_pickaxe
  carpenter(20, null, ['1x #c:ingots/bronze', '2x minecraft:stick', '1x forestry:carton'], '1x forestry:shovel_kit'); // kit_shovel
  carpenter(20, null, ['2x #c:ingots/bronze', '1x minecraft:stick', '1x forestry:carton'], '1x forestry:sword_kit'); // kit_sword
  carpenter(5, [WATER, 250], ['2x forestry:wood_pulp'], '1x minecraft:paper'); // paper
  carpenter(5, [WATER, 100], ['3x #minecraft:wooden_slabs', '3x #c:sawdust'], '24x forestry:plywood'); // plywood
  carpenter(100, [WATER, 2000], ['4x #c:ingots/tin', '2x #c:glass_panes', '2x #c:dusts/redstone', '1x #c:gems/diamond'], '1x forestry:portable_analyzer'); // portable_analyzer
  carpenter(5, null, ['1x forestry:broken_survivalists_axe'], '2x forestry:bronze_ingot'); // reclaim_bronze_axe
  carpenter(5, null, ['1x forestry:broken_survivalists_hoe'], '1x forestry:bronze_ingot'); // reclaim_bronze_hoe
  carpenter(5, null, ['1x forestry:broken_survivalists_pickaxe'], '2x forestry:bronze_ingot'); // reclaim_bronze_pickaxe
  carpenter(5, null, ['1x forestry:broken_survivalists_shovel'], '1x forestry:bronze_ingot'); // reclaim_bronze_shovel
  carpenter(5, null, ['1x forestry:broken_survivalists_sword'], '1x forestry:bronze_ingot'); // reclaim_bronze_sword
  carpenter(50, [HONEY, 500], ['1x forestry:royal_jelly', '3x #minecraft:planks', '2x forestry:beeswax', '1x forestry:pollen_cluster'], '1x forestry:scented_paneling'); // scented_paneling
  carpenter(40, [WATER, 1000], ['3x #c:ingots/iron', '1x #c:ingots/bronze'], '1x forestry:soldering_iron'); // soldering_iron
  carpenter(20, [WATER, 100], ['4x minecraft:grass_block'], '4x forestry:turf_block'); // turf_blocks
  carpenter(5, [WATER, 250], ['1x #minecraft:logs'], '4x forestry:wood_pulp'); // wood_pulp
  carpenter(10, [WATER, 500], ['4x forestry:silk_wisp'], '1x forestry:woven_silk'); // woven_silk
  carpenter(20, [WATER, 1000], ['6x #c:dusts/redstone', '1x #c:ingots/tin'], '1x forestry:basic_circuit_board[minecraft:custom_data={T:0}]'); // circuits/basic
  carpenter(40, [WATER, 1000], ['6x #c:dusts/redstone', '3x #c:ingots/bronze'], '1x forestry:enhanced_circuit_board[minecraft:custom_data={T:1}]'); // circuits/enhanced
  carpenter(80, [WATER, 1000], ['6x #c:dusts/redstone', '3x #c:ingots/gold'], '1x forestry:intricate_circuit_board[minecraft:custom_data={T:3}]'); // circuits/intricate
  carpenter(80, [WATER, 1000], ['6x #c:dusts/redstone', '3x #c:ingots/iron'], '1x forestry:refined_circuit_board[minecraft:custom_data={T:2}]'); // circuits/refined
  carpenter(20, [WATER, 1000], ['4x #minecraft:logs'], '24x forestry:crate'); // crates/empty

  // Ящики: [що пакуємо, ящик, що отримуємо при розпаковці]
  const CRATES = [
    ['#c:gems/apatite', 'forestry:crated_apatite', 'forestry:apatite'],
    ['forestry:ash', 'forestry:crated_ash', 'forestry:ash'],
    ['forestry:beeswax', 'forestry:crated_beeswax', 'forestry:beeswax'],
    ['forestry:bog_earth', 'forestry:crated_bog_earth', 'forestry:bog_earth'],
    ['#c:ingots/bronze', 'forestry:crated_bronze', 'forestry:bronze_ingot'],
    ['forestry:cocoa_comb', 'forestry:crated_cocoa_comb', 'forestry:cocoa_comb'],
    ['forestry:crystalline_pollen_cluster', 'forestry:crated_pollen_cluster_crystalline', 'forestry:crystalline_pollen_cluster'],
    ['forestry:dripping_comb', 'forestry:crated_dripping_comb', 'forestry:dripping_comb'],
    ['forestry:fertilizer', 'forestry:crated_fertilizer_compound', 'forestry:fertilizer'],
    ['forestry:frozen_comb', 'forestry:crated_frozen_comb', 'forestry:frozen_comb'],
    ['forestry:honey_comb', 'forestry:crated_honey_comb', 'forestry:honey_comb'],
    ['forestry:honeydew', 'forestry:crated_honeydew', 'forestry:honeydew'],
    ['forestry:humus', 'forestry:crated_humus', 'forestry:humus'],
    ['forestry:kaolin_comb', 'forestry:crated_kaolin_comb', 'forestry:kaolin_comb'],
    ['forestry:mellow_comb', 'forestry:crated_mellow_comb', 'forestry:mellow_comb'],
    ['forestry:mossy_comb', 'forestry:crated_mossy_comb', 'forestry:mossy_comb'],
    ['forestry:mulch', 'forestry:crated_mulch', 'forestry:mulch'],
    ['forestry:mysterious_comb', 'forestry:crated_mysterious_comb', 'forestry:mysterious_comb'],
    ['forestry:parched_comb', 'forestry:crated_parched_comb', 'forestry:parched_comb'],
    ['forestry:peat', 'forestry:crated_peat', 'forestry:peat'],
    ['forestry:phosphor', 'forestry:crated_phosphor', 'forestry:phosphor'],
    ['forestry:pollen_cluster', 'forestry:crated_pollen_cluster_normal', 'forestry:pollen_cluster'],
    ['forestry:powdery_comb', 'forestry:crated_powdery_comb', 'forestry:powdery_comb'],
    ['forestry:propolis', 'forestry:crated_propolis', 'forestry:propolis'],
    ['forestry:refractory_wax', 'forestry:crated_refractory_wax', 'forestry:refractory_wax'],
    ['forestry:royal_jelly', 'forestry:crated_royal_jelly', 'forestry:royal_jelly'],
    ['forestry:sculken_comb', 'forestry:crated_sculken_comb', 'forestry:sculken_comb'],
    ['forestry:silky_comb', 'forestry:crated_silky_comb', 'forestry:silky_comb'],
    ['forestry:simmering_comb', 'forestry:crated_simmering_comb', 'forestry:simmering_comb'],
    ['forestry:spongy_comb', 'forestry:crated_spongy_comb', 'forestry:spongy_comb'],
    ['forestry:stringy_comb', 'forestry:crated_stringy_comb', 'forestry:stringy_comb'],
    ['#c:ingots/tin', 'forestry:crated_tin', 'forestry:tin_ingot'],
    ['forestry:vintage_comb', 'forestry:crated_vintage_comb', 'forestry:vintage_comb'],
    ['forestry:wheaten_comb', 'forestry:crated_wheaten_comb', 'forestry:wheaten_comb'],
    ['minecraft:acacia_log', 'forestry:crated_acacia_log', 'minecraft:acacia_log'],
    ['minecraft:acacia_sapling', 'forestry:crated_acacia_sapling', 'minecraft:acacia_sapling'],
    ['minecraft:andesite', 'forestry:crated_andesite', 'minecraft:andesite'],
    ['minecraft:apple', 'forestry:crated_apple', 'minecraft:apple'],
    ['#c:crops/beetroot', 'forestry:crated_beetroot', 'minecraft:beetroot'],
    ['minecraft:birch_log', 'forestry:crated_birch_log', 'minecraft:birch_log'],
    ['minecraft:birch_sapling', 'forestry:crated_birch_sapling', 'minecraft:birch_sapling'],
    ['minecraft:bricks', 'forestry:crated_bricks', 'minecraft:bricks'],
    ['minecraft:cactus', 'forestry:crated_cactus', 'minecraft:cactus'],
    ['#c:crops/carrot', 'forestry:crated_carrot', 'minecraft:carrot'],
    ['minecraft:charcoal', 'forestry:crated_charcoal', 'minecraft:charcoal'],
    ['minecraft:clay_ball', 'forestry:crated_clay_ball', 'minecraft:clay_ball'],
    ['minecraft:coal', 'forestry:crated_coal', 'minecraft:coal'],
    ['#c:cobblestones', 'forestry:crated_cobblestone', 'minecraft:cobblestone'],
    ['minecraft:cookie', 'forestry:crated_cookie', 'minecraft:cookie'],
    ['#c:ingots/copper', 'forestry:crated_copper', 'minecraft:copper_ingot'],
    ['minecraft:dark_oak_log', 'forestry:crated_dark_oak_log', 'minecraft:dark_oak_log'],
    ['minecraft:dark_oak_sapling', 'forestry:crated_dark_oak_sapling', 'minecraft:dark_oak_sapling'],
    ['minecraft:dark_prismarine', 'forestry:crated_dark_prismarine', 'minecraft:dark_prismarine'],
    ['minecraft:diorite', 'forestry:crated_diorite', 'minecraft:diorite'],
    ['minecraft:dirt', 'forestry:crated_dirt', 'minecraft:dirt'],
    ['#c:dusts/glowstone', 'forestry:crated_glowstone', 'minecraft:glowstone_dust'],
    ['minecraft:granite', 'forestry:crated_granite', 'minecraft:granite'],
    ['minecraft:grass_block', 'forestry:crated_grass_block', 'minecraft:grass_block'],
    ['#c:gravels', 'forestry:crated_gravel', 'minecraft:gravel'],
    ['minecraft:jungle_log', 'forestry:crated_jungle_log', 'minecraft:jungle_log'],
    ['minecraft:jungle_sapling', 'forestry:crated_jungle_sapling', 'minecraft:jungle_sapling'],
    ['#c:gems/lapis', 'forestry:crated_lapis', 'minecraft:lapis_lazuli'],
    ['minecraft:mycelium', 'forestry:crated_mycelium', 'minecraft:mycelium'],
    ['minecraft:nether_bricks', 'forestry:crated_nether_bricks', 'minecraft:nether_bricks'],
    ['#c:crops/nether_wart', 'forestry:crated_nether_wart', 'minecraft:nether_wart'],
    ['#c:netherracks', 'forestry:crated_netherrack', 'minecraft:netherrack'],
    ['minecraft:oak_log', 'forestry:crated_oak_log', 'minecraft:oak_log'],
    ['minecraft:oak_sapling', 'forestry:crated_oak_sapling', 'minecraft:oak_sapling'],
    ['#c:obsidians', 'forestry:crated_obsidian', 'minecraft:obsidian'],
    ['#c:crops/potato', 'forestry:crated_potato', 'minecraft:potato'],
    ['minecraft:prismarine', 'forestry:crated_prismarine', 'minecraft:prismarine'],
    ['minecraft:prismarine_bricks', 'forestry:crated_prismarine_bricks', 'minecraft:prismarine_bricks'],
    ['minecraft:red_sand', 'forestry:crated_red_sand', 'minecraft:red_sand'],
    ['#c:dusts/redstone', 'forestry:crated_redstone', 'minecraft:redstone'],
    ['minecraft:sand', 'forestry:crated_sand', 'minecraft:sand'],
    ['#c:sandstone/blocks', 'forestry:crated_sandstone', 'minecraft:sandstone'],
    ['minecraft:soul_sand', 'forestry:crated_soul_sand', 'minecraft:soul_sand'],
    ['minecraft:spruce_log', 'forestry:crated_spruce_log', 'minecraft:spruce_log'],
    ['minecraft:spruce_sapling', 'forestry:crated_spruce_sapling', 'minecraft:spruce_sapling'],
    ['minecraft:stone', 'forestry:crated_stone', 'minecraft:stone'],
    ['minecraft:sugar_cane', 'forestry:crated_sugar_cane', 'minecraft:sugar_cane'],
    ['#c:crops/wheat', 'forestry:crated_wheat', 'minecraft:wheat'],
    ['minecraft:wheat_seeds', 'forestry:crated_seeds', 'minecraft:wheat_seeds'],
  ];
  CRATES.forEach(([item, crated, unpacked]) => {
    carpenter(5, [WATER, 100], ['9x ' + item, '1x forestry:crate'], '1x ' + crated);
    carpenter(5, null, ['1x ' + crated], '9x ' + unpacked);
  });

  // ======================= FABRICATOR =======================
  // fabricator(fluid, ingredients, output)
  fabricator([GLASS, 50], ['1x #c:nuggets/tin', '2x #c:gems/lapis', '1x forestry:phosphorescent_jelly', '1x #c:silicon'], '1x forestry:solar_cell'); // solar_cell
  fabricator([GLASS, 500], ['5x #c:gems/amber', '2x #c:dusts/redstone'], '2x forestry:amber_electron_tube'); // electron_tubes/amber
  fabricator([GLASS, 500], ['5x #c:gems/apatite', '2x #c:dusts/redstone'], '4x forestry:apatine_electron_tube'); // electron_tubes/apatite
  fabricator([GLASS, 500], ['5x minecraft:blaze_powder', '2x #c:dusts/redstone'], '4x forestry:blazing_electron_tube'); // electron_tubes/blaze
  fabricator([GLASS, 500], ['5x #c:ingots/bronze', '2x #c:dusts/redstone'], '4x forestry:bronze_electron_tube'); // electron_tubes/bronze
  fabricator([GLASS, 500], ['5x #c:ingots/copper', '2x #c:dusts/redstone'], '4x forestry:copper_electron_tube'); // electron_tubes/copper
  fabricator([GLASS, 500], ['5x #c:gems/diamond', '2x #c:dusts/redstone'], '4x forestry:diamantine_electron_tube'); // electron_tubes/diamond
  fabricator([GLASS, 500], ['5x #c:gems/emerald', '2x #c:dusts/redstone'], '4x forestry:emerald_electron_tube'); // electron_tubes/emerald
  fabricator([GLASS, 500], ['5x minecraft:end_stone', '2x minecraft:ender_eye'], '4x forestry:ender_electron_tube'); // electron_tubes/ender
  fabricator([GLASS, 500], ['4x #c:ingots/bronze', '2x #c:gems/emerald', '2x #c:slimeballs'], '1x forestry:flexible_casing'); // electron_tubes/flexible_casing
  fabricator([GLASS, 500], ['5x #c:ingots/gold', '2x #c:dusts/redstone'], '4x forestry:golden_electron_tube'); // electron_tubes/gold
  fabricator([GLASS, 500], ['5x #c:ingots/iron', '2x #c:dusts/redstone'], '4x forestry:iron_electron_tube'); // electron_tubes/iron
  fabricator([GLASS, 500], ['5x #c:gems/lapis', '2x #c:dusts/redstone'], '4x forestry:lapis_electron_tube'); // electron_tubes/lapis
  fabricator([GLASS, 500], ['5x minecraft:obsidian', '2x #c:dusts/redstone'], '4x forestry:obsidian_electron_tube'); // electron_tubes/obsidian
  fabricator([GLASS, 500], ['5x #c:silicon', '2x #c:dusts/redstone'], '4x forestry:silicon_electron_tube'); // electron_tubes/silicon
  fabricator([GLASS, 500], ['5x #c:ingots/tin', '2x #c:dusts/redstone'], '4x forestry:tin_electron_tube'); // electron_tubes/tin

  // Вогнетривке дерево (500 mB рідкого скла + рефрактор-віск)
  const VANILLA_WOODS = ['acacia', 'birch', 'cherry', 'dark_oak', 'jungle', 'oak', 'spruce'];
  const FORESTRY_WOODS = ['balsa', 'baobab', 'beech', 'camelthorn', 'chestnut', 'cocobolo', 'coconut', 'dogwood', 'ebony', 'elm', 'feijoa', 'fir', 'giant_sequoia', 'ginkgo', 'greenheart', 'ipe', 'jacaranda', 'kapok', 'kauri', 'larch', 'lemon', 'lime', 'macrocarpa', 'mahoe', 'mahogany', 'maple', 'olive', 'orange', 'padauk', 'palm', 'papaya', 'pear', 'pewen', 'pine', 'plum', 'poplar', 'sequoia', 'sour_cherry', 'teak', 'walnut', 'wenge', 'willow', 'zebrano'];
  // [форма, id входу(дерево, ваніль?), к-сть входу = к-сть виходу]
  const FIREPROOF_FORMS = [
    { form: 'log',           count: 2, input: (w, v) => v ? 'minecraft:' + w + '_log'            : 'forestry:' + w + '_log' },
    { form: 'planks',        count: 8, input: (w, v) => v ? 'minecraft:' + w + '_planks'         : 'forestry:' + w + '_planks' },
    { form: 'stripped_log',  count: 2, input: (w, v) => v ? 'minecraft:stripped_' + w + '_log'   : 'forestry:' + w + '_stripped_log' },
    { form: 'stripped_wood', count: 2, input: (w, v) => v ? 'minecraft:stripped_' + w + '_wood'  : 'forestry:' + w + '_stripped_wood' },
    { form: 'wood',          count: 2, input: (w, v) => v ? 'minecraft:' + w + '_wood'           : 'forestry:' + w + '_wood' }
  ];
  FIREPROOF_FORMS.forEach(({ form, count, input }) => {
    VANILLA_WOODS.concat(FORESTRY_WOODS).forEach(wood => {
      const vanilla = VANILLA_WOODS.includes(wood);
      fabricator([GLASS, 500],
        [count + 'x ' + input(wood, vanilla), '1x forestry:refractory_wax'],
        count + 'x forestry:' + wood + '_fireproof_' + form);
    });
  });

  // Металеві панелі (50 mB воску)
  const PLATING_METALS = {
    bronze: 'forestry:bronze_ingot',
    copper: 'minecraft:copper_ingot',
    gold: 'minecraft:gold_ingot',
    iron: 'minecraft:iron_ingot',
    netherite: 'minecraft:netherite_ingot',
    tin: 'forestry:tin_ingot',
  };
  Object.keys(PLATING_METALS).forEach(c =>
    fabricator([WAX, 50], ['8x ' + PLATING_METALS[c]], '8x forestry:metal_plating_' + c));
  const PLATING_DYES = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'];
  PLATING_DYES.forEach(c =>
    fabricator([WAX, 50], ['8x #forestry:metal_plating', '1x #c:dyes/' + c], '8x forestry:metal_plating_' + c));
})
