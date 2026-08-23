ServerEvents.recipes(event => {
    const removeItems = [
        "functionalstorage_three_drawers:framed_fluid_3",
        "functionalstorage:fluid_4",
        "functionalstorage_three_drawers:fluid_3",
        "functionalstorage:fluid_2",
        "functionalstorage:fluid_1",
        "functionalstorage:framed_fluid_4",
        "functionalstorage:framed_fluid_2",
        "functionalstorage:framed_fluid_1",
        "functionalstorage:dripping_upgrade",
        "functionalstorage:water_generator_upgrade"
    ];

    removeItems.forEach(item => {
        event.remove({ output: item });
    });
});
