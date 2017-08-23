
function rewireGraphQLTag(config, env) {
    const gqlTagExtension = /\.(graphql|gql)$/

    const fileLoader = config.module.rules.find(rule=> rule.loader && rule.loader.indexOf("file-loader")!==-1);
    fileLoader.exclude.push(gqlExtension);

    const gqlTagRule = {
        test: gqlTagExtension,
        loader: 'graphql-tag/loader',
        exclude: /node_modules/
    }
    config.module.rules.push(gqlTagRule);

    return config;
}

module.exports = rewireGraphQLTag;
