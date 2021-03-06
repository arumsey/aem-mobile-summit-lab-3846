angular.module('mixology.services.config', [])

.constant('config', {
    // API URL
    apiURL: 'http://localhost:4503',
    // Path to fetch an array of drink recipes
    drinkRecipesJSON: '/content/entities/drinks/recipes.caas.1.json',
    // Path to fetch an array of drink collections
    drinkCollectionsJSON: '/content/entities/drinks/collections.caas.json',
    // Path prefix for fetching a single drink
    singleDrinkRecipePrefix: '/content/entities/drinks/recipes/',
    // CaaS Extension
    caasExtension: '.caas.2.json',
    // Collections JSON
    collectionsJSON: '/content/entities/drinks/collections.caas.1.json',
    // Prefix for fetching a single collection
    singleCollectionPrefix: '/content/entities/drinks/collections/',

    // Content sync constants
    newsExportConfigPath: '/content/mobileapps/we-mix/content/jcr:content/exportConfigs/newsExportConfig.pge-updates.json',
    // Return redirect zip path param
    returnZipPathParam: 'returnRedirectZipPath=true',
    // If modified since param
    ifModifiedSinceParam: 'ifModifiedSince=',
    // Path to news entity
    pathToNewsEntity: '/content/entities/mix/news.caas.page.infinity.json',
    // Path to update manifest
    pathToUpdateManifest: '/www/pge-package-update.json',
    // Key to store timestamp under in localStorage
    newsLastUpdatedTimestampKey: 'newsLastUpdatedTimestamp',
    // Key to store news cache path in localStorage
    newsCachedDataPathKey: 'newsCachedDataPath',
    // Key to store cache root path in localStorage
    newsCachedRootPathKey: 'newsCachedRootPath'
});