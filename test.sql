CREATE TABLE IF NOT EXISTS course
   ( id     INTEGER PRIMARY KEY AUTOINCREMENT,
     name   VARCHAR NOT NULL);
CREATE TABLE IF NOT EXISTS student
   ( id     INTEGER PRIMARY KEY AUTOINCREMENT,
     name   VARCHAR NOT NULL,
     course INTEGER NOT NULL,
     FOREIGN KEY(course) REFERENCES course(id));
INSERT INTO course (name)
   VALUES ("Java Programming"),
          ("Databases");
INSERT INTO student (name, course)
   VALUES ("John Doe", 1),
          ("Augustus Finknottle", 1),
          ("Napolean Bonaparte", 1),
          ("J Codd", 2),
          ("Mr. Date", 2);
                         
