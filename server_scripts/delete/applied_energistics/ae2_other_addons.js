ServerEvents.recipes(event => {
    const otherItems = [
        "ae2wtlib:quantum_bridge_card",
        "merequester:requester"
    ];

    event.remove({ type: "advanced_ae:reaction" });

    otherItems.forEach(item => {
        event.remove({ output: item });
    });
});
