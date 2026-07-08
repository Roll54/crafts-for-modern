ServerEvents.recipes(event => {
    const extendedItems = [
      "",
    ];

    extendedItems.forEach(item => {
        event.remove({ output: item });
    });
});
