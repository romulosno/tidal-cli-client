const InfoPanelTemplate = require("./InfoPanelTemplate");

module.exports = class extends InfoPanelTemplate {
    constructor(options) {
        super(options, options.artist.name, options.artist.artSrc, options.artist.tracks);
    }
};