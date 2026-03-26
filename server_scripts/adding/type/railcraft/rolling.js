ServerEvents.recipes(event => {
  
event.custom({
  type: "railcraft:rolling",
  key: {
    a: { tag: "c:ingots/steel" },
    b: { tag: "c:ingots/steel" }
  },
  pattern: [
    "a b",
    "a b",
    "a b"
  ],
  result: {
    id: "railcraft:standard_rail",
    count: 32
  }
})

  
event.custom({
  type: "railcraft:rolling",
  key: {
    a: { tag: "c:ingots/steel" },
  },
  pattern: [
    "  a",
    " a ",
    "a  "
  ],
  result: {
    id: "railcraft:rebar",
    count: 18
  }
})

event.custom({
  type: "railcraft:rolling",
  key: {
    a: { tag: "c:ingots/steel" },
    b: { tag: "c:storage_blocks/steel"}
  },
  pattern: [
    "a a",
    "aba",
    "a a"
  ],
  result: {
    id: "railcraft:black_post",
    count: 18
  }
})
  
});