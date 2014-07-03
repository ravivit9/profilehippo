REM Workbench Table Data copy script
REM 
REM Execute this to copy table data from a source RDBMS to MySQL.
REM Edit the options below to customize it. You will need to provide passwords, at least.
REM 
REM Source DB: Mysql@www.rbkconsultancy.co.uk:3306 (MySQL)
REM Target DB: Mysql@127.0.0.1:3306


@ECHO OFF
REM Source and target DB passwords
set arg_source_password=
set arg_target_password=

IF [%arg_source_password%] == [] (
    IF [%arg_target_password%] == [] (
        ECHO WARNING: Both source and target RDBMSes passwords are empty. You should edit this file to set them.
    )
)
set arg_worker_count=2
REM Uncomment the following options according to your needs

REM Whether target tables should be truncated before copy
set arg_truncate_target=--truncate-target
REM Enable debugging output
REM set arg_debug_output=--log-level=debug3


REM Creation of file with table definitions for copytable

set table_file="%TMP%\wb_tables_to_migrate.txt"
TYPE NUL > "%TMP%\wb_tables_to_migrate.txt"
ECHO `devschema`	`category`	`devschema`	`category`	`cat_id`, `label`, `cat_order`, `icon`, `isvisible`, `isdefault` >> "%TMP%\wb_tables_to_migrate.txt"
ECHO `devschema`	`processes`	`devschema`	`processes`	`proc_id`, `cat_id`, `label`, `proc_order`, `icon`, `type`, `type_id`, `type_name`, `isvisible`, `isdefault`, `url` >> "%TMP%\wb_tables_to_migrate.txt"
ECHO `devschema`	`members`	`devschema`	`members`	`mem_email_id`, `mem_first_name`, `mem_last_name`, `mem_display_name`, `mem_password`, `mem_join_date`, `mem_timezone`, `mem_day_light_saving`, `mem_type`, `mem_group`, `mem_status`, `mem_suspended_until`, `mem_status_reason`, `mem_last_login`, `mem_birthday`, `mem_location`, `mem_validated`, `mem_validated_date` >> "%TMP%\wb_tables_to_migrate.txt"


wbcopytables.exe --mysql-source="profilehippo@www.rbkconsultancy.co.uk:3306" --target="root@127.0.0.1:3306" --source-password="%arg_source_password%" --target-password="%arg_target_password%" --table-file="%table_file%" --thread-count=%arg_worker_count% %arg_truncate_target% %arg_debug_output%

REM Removes the file with the table definitions
DEL "%TMP%\wb_tables_to_migrate.txt"


