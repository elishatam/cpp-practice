#include <iostream>
#include <stdexcept>
#include "Database.h"

using namespace std;

namespace Records {

	Database::Database() : mNextEmployeeNumber(kFirstEmployeeNumber)
	{
	}

	Employee& Database::addEmployee(const string& firstName,
		const string& lastName)
	{
		Employee theEmployee;
		
		theEmployee.setFirstName(firstName);
		theEmployee.setLastName(lastName);
		theEmployee.setEmployeeNumber(mNextEmployeeNumber++); //creates a copy of the object, increments the value of the object, and returns the copy from before the increment. First addEmployee()'s EmployeeNumber = 1000
		theEmployee.hire();
		mEmployees.push_back(theEmployee);

		return mEmployees[mEmployees.size() - 1];
	}

	Employee& Database::getEmployee(int employeeNumber)
	{
		for (auto& employee : mEmployees) {
			if (employee.getEmployeeNumber() == employeeNumber) {
				return employee;
			}
		}
		throw runtime_error("No employee found.");
	}

    //"cost string& firstName" = const Reference = read only reference. The reference isn't copied, and the original variable can't be changed.
	Employee& Database::getEmployee(const string& firstName, const string& lastName)
	{
		for (auto& employee : mEmployees) {
			if (employee.getFirstName() == firstName &&
				employee.getLastName() == lastName) {
					return employee;
			}
		}
		throw runtime_error("No employee found.");
	}

    //"const" at the end: Ask the compiler to check that the member function doesn't change the object data in any way
	void Database::displayAll() const
	{
		for (const auto& employee : mEmployees) {
			employee.display();
		}
	}

	void Database::displayCurrent() const
	{
		for (const auto& employee : mEmployees) {
			if (employee.getIsHired())
				employee.display();
		}
	}

	void Database::displayFormer() const
	{
		for (const auto& employee : mEmployees) {
			if (!employee.getIsHired())
				employee.display();
		}
	}

}
