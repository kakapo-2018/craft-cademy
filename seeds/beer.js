exports.seed = function (knex, Promise) {
  return knex('beer').del()
    .then(function () {
      return knex('beer').insert([
        { id: 1, name: 'Ginger Ninja', type: 'Ginger', quality: '', image: '', lng: '174.77462', lat: '-41.29104' },
        { id: 2, name: 'Lager Than Life', type: 'Lager', quality: '', image: '', lng: '174.77247', lat: '-41.29525' },
        { id: 3, name: 'Blue and Yellow Purple Pils', type: 'Pilsener', quality: '', image: '', lng: '174.78225', lat: '-41.29754' },
        { id: 4, name: 'Hoptimus Prime', type: 'IPA', quality: '', image: '', lng: '174.78352', lat: '-41.29349' },
        { id: 5, name: 'Donald Drunk', type: 'APA', quality: '', image: '', lng: '174.78198', lat: '-41.29981' },
        { id: 6, name: 'Tart of Darkness', type: 'Stout', quality: '', image: '', lng: '174.78134', lat: '-41.29156' }

      ])
    })
}