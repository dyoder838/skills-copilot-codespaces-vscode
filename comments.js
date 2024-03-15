// Create web server
const Hapi = require('@hapi/hapi');
// Start server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  // Register plugin
  await server.register({
    plugin: require('./comments')
  });
  // Start server
  await server.start();
  console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
init();
 
 The following code snippet is an example of a plugin that defines a route to retrieve comments from the database. 
 // Path: comments.js
const { Comments } = require('./models');
module.exports = {
  name: 'comments',
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/comments',
      handler: async function (request, h) {
        try {
          const comments = await Comments.find();
          return comments;
        } catch (error) {
          return h.response(error).code(500);
        }
      }
    });
  }
};
 
 The following code snippet is an example of a plugin that defines a route to retrieve members from the database. 
 // Path: members.js
const { Members } = require('./models');
module.exports = {
  name: 'members',
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/members',
      handler: async function (request, h) {
        try {
          const members = await Members.find();
          return members;
        } catch (error) {
          return h.response(error).code(500);
        }
      }
    });
  }
};
 
 The following code snippet is an example of a plugin that defines a route to retrieve skills from the database. 
 // Path: skills.js
const { Skills } = require('./models');
module.exports = {
  name: 'skills',
  version: '1.0.0',
  register: async function (server, options) {
    server.route({
      method: 'GET',
      path: '/skills',
      handler: async function (request, h) {
        try {
          const skills = await Skills.find();
          return