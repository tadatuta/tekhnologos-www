block('footer').content()(function() {
    return [
        {
            elem: 'column',
            content: '© ' + new Date().getFullYear() + ' Технологии гостеприимства'
        },
        {
            elem: 'column',
            elemMods: { pos: 'right' },
            content: [
                'Разработка сайта — дизайн-студия «',
                {
                    block: 'link',
                    url: 'http://tadatuta.com/',
                    content: 'Тадатута'
                },
                '»'
            ]
        }
    ];
});
