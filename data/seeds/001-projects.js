exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "New Kitchen Light",
      description:
        "Replace ceiling light in kitchen with something nicer and brighter."
    }
  ]);
};
