export default function createRoutes(store) {
    return [{
        path: '/sample/date-picker',
        getComponents(location, cb) {
            require.ensure([
            ], (require) => {
                let DateTimeSample = require('./sample')
                cb(null, DateTimeSample);
            });
        },
    }]
}