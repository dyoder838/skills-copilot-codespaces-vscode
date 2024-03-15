function skillsMembers() {
  return {
    name: 'skillsMembers',
    version: '1.0.0',
    register: async function (server, options) {
      server.route({
        method: 'GET',
        path: '/skillsMembers',
        handler: async function (request, h) {
          try {
            const skillsMembers = await SkillsMembers.find();
            return skillsMembers;
          } catch (error) {
            return h.response(error).code(500);
          }
        }
      });
    }
  };
}
