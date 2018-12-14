module.exports = (require('./glsl-optimizer-asm')
    .cwrap('optimize_glsl', 'string', ['string', 'number', 'number'])
);
