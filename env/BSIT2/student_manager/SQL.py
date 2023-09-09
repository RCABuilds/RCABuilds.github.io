#Phase 1 -> Gets all the ID of the Student from tblStudents
#Phase 2 -> Gets all the Name of the Student
#Phase 3 -> Checks all the tblTax, the tax as field, and amount from tblTax
#Phase 4 -> Update tblStatus

#Name | Total | Tax | Tax

#Then Exports as json

import mysql.connector

conn = mysql.connector.connect(
    host = "AC BSIT 2",
    user = "aspiras",
    password = "rca14324",
    database = "dbBSIT2"
)
cursor = conn.cursor()

def phase1():
    cursor.execute(
        ""
    )
    pass