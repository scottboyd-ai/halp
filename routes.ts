import * as handlers from './handlers';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    },
    {
        method: 'POST',
        path: '/fledgling',
        async handler (request, h) {
            const payload = JSON.parse(request.payload.payload);

            switch (payload.type) {
                case 'message_action':
                    handlers.handleMessageAction(payload);
                    break;
                case 'view_submission':
                    handlers.handleViewSubmission(payload);
            }

            return '';
        }
    }
];

module.exports = routes;