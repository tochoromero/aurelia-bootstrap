export function configure(aurelia) {
    aurelia.globalResources(
        './settings-type/property.html',
        './settings-type/boolean.html',
        './settings-type/two-way.html',
        './settings-type/string.html',
        './settings-type/markup.html',
        './settings-type/any.html'
    );
}