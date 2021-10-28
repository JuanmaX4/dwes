const test = require('ava');
const datecompare = require('../src/date');

test('should return {startDate:"", endDate:""}', (t) => {
    const startDate = new Date(9783452);
    const endDate = new Date(9783452);
    const sortedDates = datecompare(startDate, endDate);
    t.deepEqual(sortedDates,
        {startDate:startDate.toISOString(), endDate:endDate.toISOString() });
});