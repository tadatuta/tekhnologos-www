({
    shouldDeps: [
        'heading',
        // 'fotorama',
        {
            block: 'carousel',
            mods: { orientation: 'horizontal', animate: true },
            elems: [
                {
                    elem: 'control',
                    mods: { type: 'right', theme: 'default' }
                },
                'img',
                'paginator'
            ]
        },
        {
            block: 'map', mods: { type: 'js' }
        }
    ]
})
