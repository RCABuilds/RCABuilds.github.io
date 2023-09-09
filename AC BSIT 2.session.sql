-- Check if a table named 'your_table_name' exists
SELECT *
FROM information_schema.tables
WHERE table_schema = 'your_database_name'
  AND table_name = 'your_table_name';
