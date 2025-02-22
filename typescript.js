function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        return person.type === personType &&
            Object.entries(criteria).every(function (_a) {
                var key = _a[0], value = _a[1];
                return person[key] === value;
            });
    });
}
// Example usage
var persons = [
    { type: 'user', name: 'Kehn', age: 25, email: 'ezeokpokc@gmail.com' },
    { type: 'admin', name: 'Iheanyi', age: 35, role: 'superadmin' },
    { type: 'user', name: 'Tappi', age: 30, email: 'tappi@learnable.com' },
];
// Filtering users by name
var filteredUsers = filterPersons(persons, 'user', { name: 'Kehn' });
console.log(filteredUsers); // [{ type: 'user', name: 'Kehn', age: 25, email: 'ezeokpokc@gmail.com' }]
// Filtering admins by role
var filteredAdmins = filterPersons(persons, 'admin', { role: 'superadmin' });
console.log(filteredAdmins); // [{ type: 'admin', name: 'Iheanyi', age: 35, role: 'superadmin' }]
