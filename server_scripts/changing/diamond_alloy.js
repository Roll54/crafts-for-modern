ServerEvents.recipes(event => {

  // Алмаз -> пластина алмазного сплаву в інструментах і броні
  const diamondItems = [
    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_axe',
    'minecraft:diamond_shovel',
    'minecraft:diamond_sword',
    'minecraft:diamond_hoe',
    'cosmeticarmoursmod:true_diamond_crown_helmet',
    'cosmeticarmoursmod:diamond_tiara_helmet',
    'cosmeticarmoursmod:diamond_halo_helmet',
    'tide:diamond_fishing_rod',
    'farmersdelight:diamond_knife',
    'modern_industrialization:steam_mining_drill',
    'extended_industrialization:steam_chainsaw',
  ]

  diamondItems.forEach(item => {
    event.replaceInput({ output: item },
      'minecraft:diamond', 'roll_mod:diamond_alloy_plate')
  })

  event.replaceInput({ output: 'cosmeticarmoursmod:diamond_halo_helmet' },
    'cosmeticarmoursmod:diamond_shard', 'roll_mod:diamond_alloy_ingot')

  event.replaceInput({ output: 'modern_industrialization:diamond_hammer' },
    'modern_industrialization:diamond_large_plate', 'roll_mod:diamond_alloy_large_plate')

})
