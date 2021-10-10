import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items =  [
    {
        title: 'What is React?',
        content: 'React is a frontend Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a famous JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'we use react by creating components'
    }
]

const options = [
    {
        label: 'The color is red',
        value: 'red'
    },
    {
        label: 'The color is Green',
        value: 'green'
    },
    {
        label: 'The color is Blue',
        value: 'blue'
    }
]

const App = () => {
    // return <Accordion items={items}></Accordion>
    return <Dropdown options={options}/>;
}

export default App;