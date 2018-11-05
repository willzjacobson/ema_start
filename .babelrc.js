
// These settings are used only for the node build
// The browser build settings are specified in webpack.config.js

module.exports = {
    "presets": [
        "@babel/react",
        [ "@babel/preset-env", {
            "targets": {
                "node": "current"
            }
        }]
    ],
    "plugins": [
        "transform-class-properties"
    ]
};
