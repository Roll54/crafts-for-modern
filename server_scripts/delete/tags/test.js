ServerEvents.tags('block', event => {
  // Викидаємо фантомний блок з базових тегів інструментів
  event.remove('minecraft:needs_stone_tool', 'modern_industrialization:deepslate_iridium_ore');
  event.remove('minecraft:mineable/pickaxe', 'modern_industrialization:deepslate_iridium_ore');

  event.remove('c:plates/iron', 'ad_astra:iron_plate')
  event.remove('c:plates/steel', 'ad_astra:steel_plate')

  event.remove('c:ingots/lead', 'railcraft:lead_ingot')
  event.remove('c:ingots/nickel', 'railcraft:nickel_ingot')
  event.remove('c:ingots/silver', 'railcraft:silver_ingot')
  event.remove('c:ingots/tin', 'railcraft:tin_ingot')
  event.remove('c:ingots/zinc', 'railcraft:zinc_ingot')
  event.remove('c:ingots/steel', 'railcraft:steel_ingot')
  event.remove('c:ingots/brass', 'railcraft:brass_ingot')
  event.remove('c:ingots/bronze', 'railcraft:bronze_ingot')
  event.remove('c:ingots/invar', 'railcraft:invar_ingot')
  
  event.remove('c:nuggets/invar', 'railcraft:invar_nugget')
  event.remove('c:nuggets/bronze', 'railcraft:bronze_nugget')
  event.remove('c:nuggets/brass', 'railcraft:brass_nugget')
  event.remove('c:nuggets/steel', 'railcraft:steel_nugget')
  event.remove('c:nuggets/zinc', 'railcraft:zinc_nugget')
  event.remove('c:nuggets/tin', 'railcraft:tin_nugget')
  event.remove('c:nuggets/silver', 'railcraft:silver_nugget')
  event.remove('c:nuggets/nickel', 'railcraft:nickel_nugget')
  event.remove('c:nuggets/lead', 'railcraft:lead_nugget')
  
  event.remove('c:dusts/saltpeter', 'railcraft:saltpeter_dust')
  event.remove('c:dusts/coal', 'railcraft:coal_dust')
  event.remove('c:dusts/charcoal', 'railcraft:charcoal_dust')
  event.remove('c:dusts/slag', 'railcraft:slag')
  event.remove('c:dusts/ender', 'railcraft:ender_dust')
  event.remove('c:dusts/sulfur', 'railcraft:sulfur_dust')
  event.remove('c:dusts/obsidian', 'railcraft:obsidian_dust')

  event.remove('c:gears/brass', 'railcraft:brass_gear')
  event.remove('c:gears/bronze', 'railcraft:bronze_gear')
  event.remove('c:gears/invar', 'railcraft:invar_gear')
  event.remove('c:gears/iron', 'railcraft:iron_gear')
  event.remove('c:gears/copper', 'railcraft:copper_gear')
  event.remove('c:gears/gold', 'railcraft:gold_gear')
  event.remove('c:gears/lead', 'railcraft:lead_gear')
  event.remove('c:gears/nickel', 'railcraft:nickel_gear')
  event.remove('c:gears/silver', 'railcraft:silver_gear')
  event.remove('c:gears/tin', 'railcraft:tin_gear')
  event.remove('c:gears/zinc', 'railcraft:zinc_gear')
  event.remove('c:gears/steel', 'railcraft:steel_gear')

  event.remove('c:plates/brass', 'railcraft:brass_plate')
  event.remove('c:plates/bronze', 'railcraft:bronze_plate')
  event.remove('c:plates/invar', 'railcraft:invar_plate')
  event.remove('c:plates/iron', 'railcraft:iron_plate')
  event.remove('c:plates/copper', 'railcraft:copper_plate')
  event.remove('c:plates/gold', 'railcraft:gold_plate')
  event.remove('c:plates/lead', 'railcraft:lead_plate')
  event.remove('c:plates/nickel', 'railcraft:nickel_plate')
  event.remove('c:plates/silver', 'railcraft:silver_plate')
  event.remove('c:plates/tin', 'railcraft:tin_plate')
  event.remove('c:plates/zinc', 'railcraft:zinc_plate')
  event.remove('c:plates/steel', 'railcraft:steel_plate')

  // Якщо десь ще засвітиться — підстрахуємось
  event.removeAll('modern_industrialization:deepslate_iridium_ore');
});
