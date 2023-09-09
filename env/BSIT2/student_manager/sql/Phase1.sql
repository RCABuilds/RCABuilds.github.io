CREATE TABLE IF NOT EXISTS tblStatus 
AS SELECT stud_ver FROM tblStudents;

-- Check if the column 'Name' doesn't exist in tblStatus
SELECT COUNT(*)
INTO @column_exists
FROM information_schema.columns
WHERE table_name = 'tblStatus' AND column_name = 'Name';

-- Add the 'Name' column only if it doesn't exist
IF @column_exists = 0 THEN
    ALTER TABLE tblStatus
    ADD COLUMN Name VARCHAR(50);
END IF;
UPDATE dbBSIT2.tblStatus
JOIN dbBSIT2.tblStudents
ON dbBSIT2.tblStatus.stud_ver = dbBSIT2.tblStudents.stud_ver
SET dbBSIT2.tblStatus.Name = CONCAT(dbBSIT2.tblStudents.stud_lname, ', ', dbBSIT2.tblStudents.stud_fname, ' ', dbBSIT2.tblStudents.stud_iname);

-- Check if the column 'Name' doesn't exist in tblStatus
SELECT COUNT(*)
INTO @column_exists
FROM information_schema.columns
WHERE table_name = 'tblStatus' AND column_name = 'Total';
IF @column_exists = 0 THEN
    ALTER TABLE tblStatus
    ADD COLUMN Total INT;
END IF;


SELECT * FROM tblStatus