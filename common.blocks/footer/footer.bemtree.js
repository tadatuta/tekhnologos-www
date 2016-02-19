block('footer').content()(function() {
    return [
        {
            elem: 'item',
            content: '© ' + new Date().getFullYear() + ' Технологии&nbsp;гостеприимства'
        },
        {
            elem: 'item',
            content: [
                [
                    {
                        tag: 'i',
                        cls: 'fa fa-mobile'
                    },
                    ' Телефон'
                ],
                {
                    block: 'link',
                    url: 'mailto:Почта',
                    content: [
                        {
                            tag: 'i',
                            cls: 'fa fa-envelope-o'
                        },
                        ' Почта'
                    ]
                },
                [
                    {
                        tag: 'i',
                        cls: 'fa fa-skype'
                    },
                    ' Скайп'
                ],
                {
                    block: 'link',
                    url: 'https://vk.com/логин',
                    content: [
                        {
                            tag: 'i',
                            cls: 'fa fa-vk'
                        },
                        ' логин'
                    ]
                }
            ].map(function(i) {
                return [i, { tag: 'br' }];
            })
        },
        {
            elem: 'item',
            content: [
                'Разработано в ',
                {
                    block: 'link',
                    url: 'http://tadatuta.com/',
                    content: 'tadatuta.com'
                }
            ]
        }
    ];
});
