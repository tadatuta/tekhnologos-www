module.exports = {
    block: 'page',
    title: 'Технологии гостеприимства',
    favicon: 'favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' },
        { elem: 'css', url: 'index.min.css' },
        {
            elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans:400,300,800&subset=latin,cyrillic'
        }
    // http://www.favicon-generator.org/
    ].concat(
        [57, 60, 72, 76, 114, 120, 144, 152, 180].map(function(size) {
            return {
                tag: 'link',
                attrs: {
                    rel: 'apple-touch-icon',
                    sizes: size + 'x' + size,
                    href: 'apple-icon-' + size + 'x' + size + '.png'
                }
            };
        }),
        [192, 32, 96, 16].map(function(size, idx) {
            return {
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: size + 'x' + size,
                    href: (idx ? 'favicon' : 'android') + '-' + size + 'x' + size + '.png'
                }
            };
        }),
        {
            tag: 'link',
            attrs: {
                rel: 'manifest',
                href: 'manifest.json'
            }
        },
        { elem: 'meta', attrs: { name: 'msapplication-TileColor', content: '#ffffff' } },
        { elem: 'meta', attrs: { name: 'msapplication-TileImage', content: 'ms-icon-144x144.png' } },
        { elem: 'meta', attrs: { name: 'theme-color', content: '#ffffff' } }
    ),
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'nav',
                    content: [
                        {
                            url: 'about',
                            content: 'О компании'
                        },
                        {
                            url: 'cooperation',
                            content: 'Сотрудничество'
                        },
                        {
                            url: 'projects',
                            content: 'Проекты'
                        },
                        {
                            url: 'partners',
                            content: 'Партнеры'
                        },
                        {
                            url: 'contacts',
                            content: 'Контакты'
                        }
                    ].map(function(item) {
                        return {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#' + item.url,
                                content: item.content
                            }
                        };
                    })
                }
            ]
        },
        {
            block: 'main',
            content: [
                {
                    block: 'section',
                    mods: { type: 'home' },
                    content: [
                        {
                            block: 'logo'
                        }
                    ]
                },
                {
                    block: 'section',
                    mods: { type: 'about' },
                    content: [
                        {
                            block: 'heading',
                            content: 'О компании'
                        },
                        [
                            'Вы построили гостиницу и не знаете, как заставить ее приносить деньги? Или вы только хотите построить гостиницу, но не знаете как выбрать подходящее для этого место и просчитать его будущую экономическую эффективность? Ваша гостиница уже работает не один год на рынке, но вы устали от повседневного менеджмента процессов отеля и хотите просто получать прибыль?',
                            'Компания «Технологии гостеприимства» предлагает сотрудничество собственникам гостиниц. Специалисты нашей компании на основе индивидуального подхода разработают концепцию управления, продвижения и развития именно вашего отеля. Все операционные процессы мы готовы взять на себя, чтобы вы могли наслаждаться жизнью.',
                            'Мы научим ваш бизнес работать эффективно.'
                        ].map(function(paragraph) {
                            return {
                                tag: 'p',
                                content: paragraph
                            };
                        })
                    ]
                },
                {
                    block: 'section',
                    mods: { type: 'cooperation' },
                    content: [
                        {
                            block: 'heading',
                            content: 'Сотрудничество'
                        },
                        [
                            // {
                            //     tag: 'p',
                            //     content: 'Сотрудничество с нашей компанией осуществляется по следующим основным направлениям:'
                            // },
                            {
                                elem: 'column',
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'flag-o' } // cogs, tachometer, map-signs, paper-plane-o, hand-o-right
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Управление отелем'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'После заключения договора управления, всю операционную деятельность по организации работы отеля осуществляет управляющая компания. Это позволяет собственнику избежать сложностей связанных с эксплуатацией, заполняемостью, продвижением отеля на рынке, подбором и обучением персонала. При этом, компания «Технологии гостеприимства» осуществляет операционную деятельность в рамках утвержденного бюджета, и ежемесячно предоставляет собственнику отчетность о результатах финансово-хозяйственной деятельности.'

                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'hotel' }
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Аренда гостиницы'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Компания «Технологии гостеприимства» берет на себя управление отелем, включая все возможные финансовые и управленческие риски. Заключается договор аренды. Собственник отеля получает фиксированную арендную плату, которая рассчитывается индивидуально.'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'wifi' }
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Внедрение прогрессивных технологий'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Мы помогаем адаптировать под отель и внедрить прогрессивные технологий и процедуры в соответствии европейскими стандартами качества в следующих сферах:'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    'служба приема и размещения',
                                                    'служба номерного фонда',
                                                    'служба ресторанного сервиса',
                                                    'служба безопасности отеля',
                                                    'инженерная служба',
                                                    'закупки и снабжение и т.д.'
                                                ].map(function(item) {
                                                    return {
                                                        elem: 'item',
                                                        content: item,
                                                    };
                                                })
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'column',
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'rub' }
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Коммерческое представительство'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Компания представляет отель в различных каналах продаж и организует рекламные кампании с целью увеличения загрузки номерного фонда:'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    'представление объекта в российских и международных службах онлайн бронирования;',
                                                    'представление объекта на туристическом рынке РФ (участие в выставках, онлайн каталогах и др.);',
                                                    'заключение договоров с субъектами туристического рынка (турагентства, туроператорами);',
                                                    'реклама и полиграфия;',
                                                    'организация и проведение конференций, семинаров, тренингов.'
                                                ].map(function(item) {
                                                    return {
                                                        elem: 'item',
                                                        content: item,
                                                    };
                                                })
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'line-chart' }
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Создание и продвижение сайтов'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Специалисты нашей компании разработают сайт для вашей гостиницы.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Мы предлагаем несколько вариантов сайтов:'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    'Сайт визитка до 10 страниц – 7 000 рублей',
                                                    'Сайт более 10 страниц – 10 000 рублей',
                                                    'Сайт',
                                                    'Разработка индивидуального дизайна сайта – от 15 000 рублей'
                                                ].map(function(item) {
                                                    return {
                                                        elem: 'item',
                                                        content: item,
                                                    };
                                                })
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'column',
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'fa',
                                                mods: { icon: 'info' }
                                            },
                                            {
                                                block: 'heading',
                                                mods: { level: 3 },
                                                content: 'Консалтинг'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Специалисты нашей компании готовы оказать любые консультации на всех стадиях реализации гостиничного проекта:'
                                            },
                                            {
                                                block: 'list',
                                                content: [
                                                    'разработка концепции управления с учетом индивидуальных особенностей отеля;',
                                                    'позиционирование отеля на рынке;',
                                                    'финансовый менеджмент;',
                                                    'автоматизация производственных процессов отеля;',
                                                    'создание фирменного стиля, форменной одежды для персонала всех служб отеля;',
                                                    'создание и продвижение web-сайта, отвечающего всем современным требованиям;',
                                                    'подготовка бизнес-плана;',
                                                    'составление штатного расписания и должностных инструкций;',
                                                    'консультации по формированию номерного фонда и расположению зон общего пользования на стадии проектирования и строительства.',
                                                ].map(function(item) {
                                                    return {
                                                        elem: 'item',
                                                        content: item,
                                                    };
                                                })
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Консультации специалистов нашей компании помогут Вам выйти на более высокий уровень обслуживания, оптимизировать затраты и увеличить доходность проекта.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Повышение доходности проекта достигается за счет использования компанией «Технологии гостеприимства» отлаженных стратегий, организационных и операционных технологий, а также управленческого опыта.'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    block: 'section',
                    mods: { type: 'projects' },
                    content: [
                        {
                            block: 'heading',
                            content: 'Проекты'
                        },
                        {
                            block: 'map',
                            js: {
                                points: [
                                    {
                                        iconContent: 'Вилла Алина',
                                        balloonContentBody: 'Гостевой дом «Вилла Алина». Отель с совокупным номерным фондом 54 номера',
                                        coords: [44.641691, 34.397239]
                                    },
                                    {
                                        iconContent: '«Агрос»',
                                        balloonContentBody: 'База отдыха «Агрос» — туристическая база на 100+ койко-мест',
                                        coords: [44.676379, 34.410048]
                                    },
                                    {
                                        iconContent: 'Майя',
                                        balloonContentBody: 'Гостевой дом «Майя» — мини-отель г. Симферополь',
                                        coords: [44.8988, 34.0866]
                                    },
                                    {
                                        iconContent: '«Мечта',
                                        balloonContentBody: 'Отель «Мечта», пос. Рыбачье',
                                        coords: [44.7736, 34.5966]
                                    },
                                    {
                                        iconContent: 'Наш двор',
                                        balloonContentBody: 'Отель «Наш двор», г. Алушта',
                                        coords: [44.6735, 34.3984]
                                    },
                                    {
                                        iconContent: 'Ретро',
                                        balloonContentBody: 'Вилла «Ретро», г. Алушта',
                                        coords: [44.6519, 34.4018]
                                    },
                                    {
                                        iconContent: 'Равенна',
                                        balloonContentBody: 'Отель «Равенна», г. Алушта',
                                        coords: [44.6764, 34.4100]
                                    },
                                    {
                                        iconContent: 'Танаис',
                                        balloonContentBody: 'Отель «Танаис», г. Алушта',
                                        coords: [44.6829, 34.4088]
                                    },
                                    {
                                        iconContent: 'Пальмира Сад',
                                        balloonContentBody: 'Пансионат «Пальмира Сад», г. Ялта',
                                        coords: [44.4413, 34.1333]
                                    },
                                    {
                                        iconContent: 'Аквамарин family',
                                        balloonContentBody: 'Отель «Аквамарин family», Канака',
                                        coords: [44.7873, 34.6452]
                                    },
                                    {
                                        iconContent: 'Николай',
                                        balloonContentBody: 'Коттедж «Николай», г. Алушта',
                                        coords: [44.6702, 34.38]
                                    },
                                    {
                                        iconContent: 'Андрей',
                                        balloonContentBody: 'Коттедж «Андрей», г. Алушта',
                                        coords: [44.6764, 34.4100]
                                    },
                                    {
                                        iconContent: 'Манук',
                                        balloonContentBody: 'Коттедж «Манук», г. Алушта'
                                    },
                                    {
                                        iconContent: 'Частные апартаменты в Алуште',
                                        balloonContentBody: 'Частные апартаменты в Алуште'
                                    },
                                    {
                                        iconContent: 'Волна',
                                        balloonContentBody: 'Апартаменты в эллинг-кооперативе «Волна»',
                                        coords: [44.6877, 34.4316]
                                    }

                                ],
                                controls: ['smallMapDefaultSet']
                            }
                        }
                    ]
                },
                {
                    block: 'section',
                    mods: { type: 'partners' },
                    // attrs: { id: 'partners' },
                    content: [
                        {
                            block: 'heading',
                            content: 'Партнеры'
                        },
                        [
                            {
                                title: 'tripadvisor',
                                url: 'http://www.tripadvisor.ru/'
                            },
                            /*
                            {
                                title: 'booking',
                                url: 'http://www.booking.com/'
                            },
                            */
                            {
                                title: 'ostrovok',
                                url: 'https://ostrovok.ru/'
                            },
                            {
                                title: 'n4',
                                url: 'http://n4.biz/'
                            },
                            // {
                            //     title: 'vashotel',
                            //     url: 'http://www.vashotel.ru/'
                            // },
                            // {
                            //     title: 'nezabarom',
                            //     url: 'http://www.nezabarom.ua/'
                            // },
                            // {
                            //     title: 'bookit',
                            //     url: 'http://www.bookit.com.ua/'
                            // },
                            {
                                title: 'genbank',
                                url: 'http://www.genbank.ru/'
                            }
                        ].map(function(partner) {
                            return {
                                block: 'link',
                                mix: {
                                    block: 'partner',
                                    mods: { title: partner.title }
                                },
                                url: partner.url
                            };
                        })

                    ]
                },
                {
                    block: 'section',
                    mods: { type: 'contacts' },
                    content: [
                        {
                            block: 'fa',
                            mods: { icon: 'map-marker' }
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'heading',
                                    content: 'Контакты'
                                },
                                {
                                    tag: 'p',
                                    content: 'Россия, Республика Крым, г. Алушта'
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Тел.: +7 978 091-85-60',
                                        '+7 978 741-83-60',
                                        '+7 978 760-57-01'
                                    ].join('<br>')
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'E-mail: ',
                                        {
                                            block: 'link',
                                            url: 'mailto:info@tekhnologos.com',
                                            content: 'info@tekhnologos.com'
                                        }
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Если вас интересует работа в нашей компании, резюме направляйте на электронный адрес ',
                                        {
                                            block: 'link',
                                            url: 'mailto:info@tekhnologos.com',
                                            content: 'info@tekhnologos.com'
                                        },
                                        '.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            mix: { block: 'clearfix' },
            content: [
                {
                    elem: 'column',
                    content: '© 2015 Технологии гостеприимства'
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
            ]
        }
    ]
};
