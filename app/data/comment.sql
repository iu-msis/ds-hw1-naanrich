CREATE TABLE commenttable (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     comment CHAR(50) NOT NULL,
     PRIMARY KEY (id)
);

INSERT INTO commenttable(id, comment)
VALUES (1, "I have something important to say");
INSERT INTO commenttable(id, comment)
VALUES (2, "D&S is awesome");
INSERT INTO commenttable(id, comment)
VALUES (3, "smile");
