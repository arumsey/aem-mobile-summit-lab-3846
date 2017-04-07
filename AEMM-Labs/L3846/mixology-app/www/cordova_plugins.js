cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-plugin-contentsync.ContentSync",
        "file": "plugins/phonegap-plugin-contentsync/www/index.js",
        "pluginId": "phonegap-plugin-contentsync",
        "clobbers": [
            "window.ContentSync",
            "window.Zip",
            "window.zip"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "phonegap-plugin-contentsync": "1.3.3"
};
// BOTTOM OF METADATA
});