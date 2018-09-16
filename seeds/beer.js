exports.seed = function (knex, Promise) {
  return knex('beer').del()
    .then(function () {
      return knex('beer').insert([
        { id: 1, name: 'Ginger Ninja', type: 'Ginger', quality: '0', image: 'ginger.png', lng: '174.77462', lat: '-41.29104' },
        { id: 2, name: 'Lager Than Life', type: 'Lager', quality: '0', image: 'lager.png', lng: '174.77247', lat: '-41.29525' },
        { id: 3, name: 'Blue and Yellow Purple Pils', type: 'Pilsner', quality: '0', image: 'pilsner.png', lng: '174.78225', lat: '-41.29754' },
        { id: 4, name: 'Hoptimus Prime', type: 'IPA', quality: '0', image: 'ipa.png', lng: '174.78352', lat: '-41.29349' },
        { id: 5, name: 'Donald Drunk', type: 'APA', quality: '0', image: 'apa.png', lng: '174.78198', lat: '-41.29981' },
        { id: 6, name: 'Tart of Darkness', type: 'Stout', quality: '0', image: 'stout.png', lng: '174.78134', lat: '-41.29156' }

      ])
    })
}