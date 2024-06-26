import { useState, useEffect } from 'react';
import { Search } from './components/Search';
import { AddForm } from './components/AddForm';
import { PersonDisplay } from './components/PersonDisplay';
import type { PersonEntry } from './types/phonebookTypes';
import peopleService from './services/people';

const App = () => {
  const [persons, setPersons] = useState<PersonEntry[]>([]);
  const [filteredResults, setFilteredResults] = useState<PersonEntry[]>([]);

  useEffect(() => {
    console.log('effect');
    peopleService.getAll().then((res) => {
      console.log('promise fulfilled');
      setPersons(res);
    });
  }, []);

  console.log('render', persons.length, 'notes');

  return (
    <>
      <div className='main'>
        <h2>Phonebook</h2>
        <Search
          persons={persons}
          setFilteredResults={setFilteredResults}
        ></Search>
        <AddForm persons={persons} setPersons={setPersons}></AddForm>
      </div>
      <PersonDisplay
        filteredResults={filteredResults}
        persons={persons}
        setPersons={setPersons}
      ></PersonDisplay>
    </>
  );
};

export default App;
