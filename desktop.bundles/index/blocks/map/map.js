modules.define('map', ['i-bem__dom', 'loader_type_js'], function(provide, BEMDOM, Loader) {

var url = '//api-maps.yandex.ru/2.1/?lang=ru_RU',
    cache = {};

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                // // TODO: check!
                typeof ymaps === 'undefined' ? Loader(url, function() {
                    ymaps.ready(_this.onLoad.bind(_this));
                }) : ymaps.ready(_this.onLoad.bind(_this));

            }
        }
    },
    onLoad: function() {
        var _this = this,
            params = this.params,
            points = params.points;

        this._map = new ymaps.Map(this.domElem.get(0), {
            center: points && points[0].coords || [44.6764, 34.4100],
            zoom: params.zoom || 14,
            behaviors: [],
            controls: params.controls
        });

        points.forEach(function(point) {
            point.coords && point.coords.length || (point.coords = [44.6764, 34.4100]);

            this.addPlacemark(point.coords, {
                iconContent: point.iconContent,
                balloonContentBody: point.balloonContentBody
            }, {
                // preset: 'islands#dotIcon',
                // iconColor: '#097b47'
                preset: 'islands#blueStretchyIcon'
            });
        }, this);

        this.setBounds(this.getBounds(points.map(function(point) {
            return point.coords;
        })));

        return this;
    },
    getMap: function() {
        return this._map;
    },
    addPlacemark: function(point, props, options) {
        var placemark = new ymaps.Placemark(point, props, options);

        this.getMap().geoObjects.add(placemark);

        return placemark;
    },
    getBounds: function(points) {
        return points.reduce(function(prev, cur) {
            if (!prev[0]) return [[].concat(cur), [].concat(cur)];

            if (prev[0][0] > cur[0]) {
                prev[0][0] = cur[0];
            }

            if (prev[0][1] > cur[1]) {
                prev[0][1] = cur[1];
            }

            if (prev[1][0] < cur[0]) {
                prev[1][0] = cur[0];
            }

            if (prev[1][1] < cur[1]) {
                prev[1][1] = cur[1];
            }

            return prev;
        }, []);
    },
    setBounds: function(point1, point2) {
        if (!point2) {
            point2 = point1[1];
            point1 = point1[0];
        }

        this.getMap().setBounds([point1, point2]);

        return this;
    },
    panTo: function(point) {
        this.getMap().panTo(point, {
            delay: 500 // Задержка между перемещениями
        });

        return this;
    }
}, {
    // live: true,
    geocode: function(place, cb, ctx) {
        cache[place] && cb.call(ctx || this, null, cache[place]);

        ymaps.geocode(place).then(function(res) {
            var point = res.geoObjects.get(0).geometry.getCoordinates();
            cache[place] = point;
            cb.call(ctx || this, null, point);
        }, function(err) {
            cb.call(ctx || this, err);
        });
    }
}));

});
