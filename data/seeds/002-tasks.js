exports.seed = function(knex) {
  return knex("projectTasks").insert([
    {
      description: "Buy hanging ceiling light for kitchen.",
      notes: "Check eBay for antiques.",
      projectId: 1
    },
    {
      description: "Buy hanger for ceiling light.",
      notes: "Check Home Depot.",
      projectId: 1
    },
    {
      description: "Install light in kitchen.",
      notes: "Make sure you have all tools needed.",
      projectId: 1
    }
  ]);
};
