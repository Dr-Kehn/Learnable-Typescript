(() => {
    type User = {
      type: 'user';
      name: string;
      age: number;
      email: string;
    };
  
    type Admin = {
      type: 'admin';
      name: string;
      age: number;
      role: string;
    };
  
    type Person = User | Admin;
  
    // Utility type to exclude the "type" field
    type ExcludeType<T> = Omit<T, 'type'>;
  
    function filterPersons<T extends 'user' | 'admin'>(
      persons: Person[],
      personType: T,
      criteria: Partial<ExcludeType<T extends 'user' ? User : Admin>>
    ): (T extends 'user' ? User : Admin)[] {
      return persons.filter(
        (person): person is T extends 'user' ? User : Admin =>
          person.type === personType &&
          Object.entries(criteria).every(([key, value]) => (person as any)[key] === value)
      );
    }
  
    // Example data
    const persons: Person[] = [
      { type: 'user', name: 'Kehn', age: 25, email: 'ezeokpokc@gmail.com' }, // Note the use of 'ezeokpokc@gmail.com' },
      { type: 'admin', name: 'Iheanyi', age: 30, role: 'superadmin' },
      { type: 'user', name: 'Tappi', age: 30, email: 'tappi@learnable.com' },
    ];
  
    // Filtering users by name
    const filteredUsers = filterPersons(persons, 'user', { name: 'Kehn' });
    console.log(filteredUsers); // [{ type: 'user', name: 'Kehn', age: 25, email: 'ezeokpokc@gmail.com.com' }]
  
    // Filtering admins by role
    const filteredAdmins = filterPersons(persons, 'admin', { role: 'superadmin' });
    console.log(filteredAdmins); // [{ type: 'admin', name: 'Iheanyi', age: 30, role: 'superadmin' }]
  })();
  