block('heading')(
    def().match(function() { return !this.mods.level; })(function() {
        return applyNext({ 'mods.level': 2 });
    }),
    tag()(function() {
        return 'h' + this.mods.level;
    })
);
