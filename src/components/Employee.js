import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Search from '../components/Search';

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState([])

    useEffect(() => {
        loadEmployees()
    }, []);

    function loadEmployees() {
        API.allEmployees()
            .then(function (res) {
                setFilter(res.data.results)
                setEmployees(res.data.results);
            } )
    
        }

    function sortAge() {
        let newState = employees.sort(function (a, b) {
            return a.dob.age - b.dob.age
        });
        setEmployees(newState);
        console.log(employees)
    }

    function showFemales() {
        let female = filter.filter(employee => employee.gender === 'female');
        setEmployees(female)
        console.log(employees)
    }

    function showMales() {
        let male = filter.filter(employee => employee.gender === 'male');
        setEmployees(male)
        console.log(employees)
    }

    function allE (){
        let all = filter
        setEmployees(all)
    }

    return (
        <div>
            <Search age={sortAge} female={showFemales} male={showMales} all = {allE} />
            {/* {employees.length > 0 && */}
            <div>
                {employees.map(employee => <div>
                    <h1>{employee.name.first} {employee.name.last}</h1>
                    <p>{employee.email}</p>
                    <p>{employee.phone}</p>
                    <p>{employee.dob.age}</p>
                </div>)}
            </div>
            {/* } */}
        </div>
    )
}

export default Employee;