modules.define('nav', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.bindTo(this.elem('item'), 'click', function(e) {
                    this.delMod(this.elem('item'), 'current');
                    this.setMod($(e.currentTarget), 'current');
                });
            }
        }
    }
}));

});
