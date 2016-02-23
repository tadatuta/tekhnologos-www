block('footer')(
    mix()('clearfix'),
    content()(function() {
        return {
            elem: 'inner',
            mix: { block: 'page', elem: 'width' },
            content: applyNext()
        };
    })
);
