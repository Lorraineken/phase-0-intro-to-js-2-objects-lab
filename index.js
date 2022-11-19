// Write your solution in this file!
const employee = {name: "Sam",streetAddress:"CBD 101"};

function updateEmployeeWithKeyAndValue(employee,key,value){
    
    const employeeUpdate = {...employee};
    
    employeeUpdate[key]=value;

return employeeUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    
    employee[key]=value;
    
    return employee;
}

function deleteFromEmployeeByKey(employee,key){

    const newEmployees ={...employee};

    delete newEmployees[key];

    return newEmployees;


}

function destructivelyDeleteFromEmployeeByKey(employee,key){

delete employee[key];

return employee;

}



