block('logo')(
    tag()('a'),
    attrs()({
        href: '..'
    }),
    content()(function() {
        return 'Технологии гостеприимства';
    })
);
