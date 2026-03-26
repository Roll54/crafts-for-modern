ServerEvents.tags('block', event => {
  // Викидаємо фантомний блок з базових тегів інструментів
  event.remove('minecraft:needs_stone_tool', 'modern_industrialization:deepslate_iridium_ore');
  event.remove('minecraft:mineable/pickaxe', 'modern_industrialization:deepslate_iridium_ore');

  // Якщо десь ще засвітиться — підстрахуємось
  event.removeAll('modern_industrialization:deepslate_iridium_ore');
});