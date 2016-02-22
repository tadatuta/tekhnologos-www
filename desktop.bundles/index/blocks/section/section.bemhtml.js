block('section').match(function() { return this.mods.type; }).attrs()(function() {
    var attrs = applyNext() || {};
    attrs.id = this.ctx.mods.type;
    return attrs;
});

block('section').mod('type', 'cooperation').content()(function() {
    return {
        elem: 'inner',
        content: applyNext()
    };
})

block('section').mod('type', 'contacts').mix()({ block: 'clearfix' })
