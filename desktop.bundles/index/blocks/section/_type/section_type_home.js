modules.define('section', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: this.name, modName: 'type', modVal: 'home' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.bindToWin('scroll', function() {
                    this.domElem.css({ backgroundPosition: '0px ' + (-2 * BEMDOM.win.scrollTop()) + 'px' });
                });
            }
        }
    }
}));

});
