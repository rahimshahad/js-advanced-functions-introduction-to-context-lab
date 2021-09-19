// Your code here
function createEmployeeRecord(array) {
    const newArray = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newArray
}

// process an Array of Arrays into an Array of employee records
// 1) has a
// function called createEmployeeRecords
// createEmployeeRecords
// 2) creates two records
// 3) correctly assigns the first names
// 4) creates more than 2 records


function createEmployeeRecords(array) {
    return array.map(arr => createEmployeeRecord(arr))
}


// it adds a timeIn event Object to an employee 's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
// 1) has a
// function called createTimeInEvent
// createTimeInEvent
// 2) creates the correct type
// 3) extracts the correct date
// 4) extracts the correct hour


function createTimeInEvent(record, dateTime) {
    const [date, hour] = dateTime.split(" ")


    record.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date: date
        }

    )
    return record
}


// it adds a timeOut event Object to an employee 's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
// 1) has a
// function called createTimeOutEvent
// createTimeOutEvent
// 2) creates the correct type
// 3) extracts the correct date
// 4) extracts the correct hour

function createTimeOutEvent(record, dateTime) {
    const [date, hour] = dateTime.split(" ")


    record.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date: date
        }

    )
    return record
}


// Given an employee record with a date - matched timeInEvent and timeOutEvent
// 1) hoursWorkedOnDate calculates the hours worked when given an employee record and a date
// hoursWorkedOnDate
// 2) calculates that the employee worked 2 hours

function hoursWorkedOnDate(record, date) {
    let timeIn = record.timeInEvents.find(time => {
        return time.date === date;
    })
    let timeOut = record.timeOutEvents.find(time => {
        return time.date === date;
    })
    return (timeOut.hour - timeIn.hour) / 100
}


function wagesEarnedOnDate(employee, earningsDate) {
    let employeeWage = hoursWorkedOnDate(employee, earningsDate)
    let payRate = employee.payPerHour

    return employeeWage * payRate
}

function allWagesFor(employee) {
    let workingDates = employee.timeInEvents.map(function(e) {
        return e.date
    })
    let payDays = workingDates.reduce(function(memo, dollar) {
        return memo + wagesEarnedOnDate(employee, dollar)
    }, 0)
    return payDays
}

let findEmployeeByFirstName = function(src, firstName) {
    return src.find(function(a) {
        return a.firstName === firstName
    })
}

let calculatePayroll = function(array) {
    return array.reduce(function(memo, employee) {
        return memo + allWagesFor(employee)
    }, 0)
}