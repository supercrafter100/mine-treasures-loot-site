module.exports = {
    images: {
        domains: ['cravatar.eu']
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/sitemap-generator');
        }
        return config;
    }
}