const models = require('../models');

const seedFunction = () => {
    models.NY13DVoters.bulkCreate([
        {
            name: 'Potter, Harry J',
            age: 37,
            district: true,
            location: 'New York',
            phone: '(212) 368-2222',
            lastContact: new Date('11/8/16')
        },
        {
            name: 'Granger, Hermoine J',
            age: 37,
            district: true,
            location: 'New York',
            phone: '(212) 234-1989',
            lastContact: new Date('11/8/16')
        },
        {
            name: 'Weasley, Ronald B',
            age: 37,
            district: true,
            location: 'New York',
            phone: '(347) 372-9999',
            lastContact: new Date('11/8/16')
        },
        {
            name: 'Potter, Ginevra M',
            age: 36,
            district: true,
            location: 'New York',
            phone: '(347) 372-9999',
            lastContact: new Date('9/13/16')
        },
        {
            name: 'Weasley, Molly',
            age: 66,
            district: true,
            location: 'New York',
            phone: '(646) 291-3223',
            lastContact: new Date('9/13/16')
        },
        {
            name: 'Weasley, Arthur',
            age: 67,
            district: true,
            location: 'New York',
            phone: '(646) 291-3222',
            lastContact: new Date('6/28/16')
        },
        {
            name: 'Potter, James',
            age: 57,
            district: true,
            location: 'New York',
            phone: '(347) 888-8237',
            lastContact: new Date('4/19/12')
        },
        {
            name: 'Potter, Lily J',
            age: 57,
            district: true,
            location: 'New York',
            phone: '(347) 888-9833',
            lastContact: new Date('4/19/12')
        },
        {
            name: 'Snape, Severus',
            age: 57,
            district: true,
            location: 'New York',
            phone: '(646) 666-0606',
            lastContact: new Date('6/28/16')
        }
    ])
};

module.exports = seedFunction;