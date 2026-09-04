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

  event.remove('#c:plates/brass', 'railcraft:brass_plate')
  event.remove('#c:plates/bronze', 'railcraft:bronze_plate')
  event.remove('#c:plates/invar', 'railcraft:invar_plate')
  event.remove('#c:plates/iron', 'railcraft:iron_plate')
  event.remove('#c:plates/copper', 'railcraft:copper_plate')
  event.remove('#c:plates/gold', 'railcraft:gold_plate')
  event.remove('#c:plates/lead', 'railcraft:lead_plate')
  event.remove('#c:plates/nickel', 'railcraft:nickel_plate')
  event.remove('#c:plates/silver', 'railcraft:silver_plate')
  event.remove('#c:plates/tin', 'railcraft:tin_plate')
  event.remove('#c:plates/zinc', 'railcraft:zinc_plate')
  event.remove('#c:plates/steel', 'railcraft:steel_plate')

  // Якщо десь ще засвітиться — підстрахуємось
  event.removeAll('modern_industrialization:deepslate_iridium_ore');
});
