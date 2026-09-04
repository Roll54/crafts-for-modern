ServerEvents.tags('block', event => {
  event.remove('minecraft:needs_stone_tool', 'modern_industrialization:deepslate_iridium_ore');
  event.remove('minecraft:mineable/pickaxe', 'modern_industrialization:deepslate_iridium_ore');
  event.removeAll('modern_industrialization:deepslate_iridium_ore');
})
