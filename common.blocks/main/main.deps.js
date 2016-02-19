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
                    elemMods: { type: 'right', theme: 'default' }
                },
                'img'
            ]
        },
        {
            block: 'map', mods: { type: 'js' }
        }
    ]
})
