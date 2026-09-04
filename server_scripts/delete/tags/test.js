ServerEvents.tags('block', event => {
  // Викидаємо фантомний блок з базових тегів інструментів
  event.remove('minecraft:needs_stone_tool', 'modern_industrialization:deepslate_iridium_ore');
  event.remove('minecraft:mineable/pickaxe', 'modern_industrialization:deepslate_iridium_ore');

  event.remove('#c:gears/brass', 'railcraft:brass_gear')
  event.remove('#c:gears/bronze', 'railcraft:bronze_gear')
  event.remove('#c:gears/invar', 'railcraft:invar_gear')
  event.remove('#c:gears/iron', 'railcraft:iron_gear')
  event.remove('#c:gears/copper', 'railcraft:copper_gear')
  event.remove('#c:gears/gold', 'railcraft:gold_gear')
  event.remove('#c:gears/lead', 'railcraft:lead_gear')
  event.remove('#c:gears/nickel', 'railcraft:nickel_gear')
  event.remove('#c:gears/silver', 'railcraft:silver_gear')
  event.remove('#c:gears/tin', 'railcraft:tin_gear')
  event.remove('#c:gears/zinc', 'railcraft:zinc_gear')
  event.remove('#c:gears/steel', 'railcraft:steel_gear')

  // Якщо десь ще засвітиться — підстрахуємось
  event.removeAll('modern_industrialization:deepslate_iridium_ore');
});
