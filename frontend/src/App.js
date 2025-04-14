import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <div>
            <HeaderComponent />
            <EmployeeListComponent />
            <FooterComponent />
        </div>
    );
}

export default App;