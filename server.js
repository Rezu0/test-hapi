const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost',
    });

    // Rute utama
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Halaman Utama';
        },
    });

    // Rute khusus dalam /api
    server.route({
        method: 'GET',
        path: '/api/about',
        handler: (request, h) => {
            return 'Tentang Kami (dalam /api)';
        },
    });

    // Rute khusus lainnya dalam /api
    server.route({
        method: 'GET',
        path: '/api/contact',
        handler: (request, h) => {
            return 'Hubungi Kami (dalam /api)';
        },
    });

    await server.start();
    console.log('Server berjalan di', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
