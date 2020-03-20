exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "drill" },
    { name: "drill bits" },
    { name: "ladder" },
    { name: "extention cord", description: "At least 10 feet." }
  ]);
};
