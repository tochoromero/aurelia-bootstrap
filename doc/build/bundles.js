module.exports = {
    "bundles": {
        "dist/app-build": {
            "includes": [
                "[**/*.js]",
                "**/*.html!text",
                "**/*.css!text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": false
            }
        },
        "dist/aurelia": {
            "includes": [
                "aurelia-bootstrap",
                "aurelia-bootstrap/**/*.html!text",
                "aurelia-bootstrapper",
                "aurelia-framework",
                "aurelia-fetch-client",
                "aurelia-history-browser",
                "aurelia-loader-default",
                "aurelia-logging-console",
                "aurelia-pal-browser",
                "aurelia-polyfills",
                "aurelia-router",
                "aurelia-syntax-highlighter",
                "aurelia-templating-binding",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "bootstrap/css/bootstrap.css!text",
                "fetch",
                "text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": false,
                "rev": false
            }
        }
    }
};
