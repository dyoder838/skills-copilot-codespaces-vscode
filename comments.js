const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return 'Hello, world!';
    }
});

server.route({
    method: 'GET',
    path: '/about',
    handler: function (request, h) {
        return 'This is the about page';
    }
});

server.route({
    method: 'GET',
    path: '/contact',
    handler: function (request, h) {
        return 'This is the contact page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers/{id}',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers/{id}/edit',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers/{id}/delete',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers/new',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'POST',
    path: '/skillsMembers',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});

server.route({
    method: 'GET',
    path: '/skillsMembers/{id}/edit',
    handler: function (request, h) {
        return 'This is the skillsMembers page';
    }
});
