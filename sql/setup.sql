DROP TABLE IF EXISTS villagers, fossils, bugs, fishs, arts;

CREATE TABLE villagers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    villager_name TEXT NOT NULL,
    species TEXT NOT NULL,
    personality TEXT NOT NULL
);

INSERT INTO villagers (villager_name, species, personality) 
    VALUES ('Peggy', 'Pig', 'Peppy'), ('Antonio', 'Anteater', 'Jock');


    

CREATE TABLE fossils (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fossil_name TEXT NOT NULL,
    collected BOOLEAN
);

INSERT INTO fossils (fossil_name, collected)
    VALUES ('amber', true), ('ammonite', true);




CREATE TABLE bugs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    bug_name TEXT NOT NULL,
    collected BOOLEAN
);

INSERT INTO bugs (bug_name, collected)
    VALUES ('paper kite butterfly', true), ('madagascan sunset moth', true);




CREATE TABLE fishs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fish_name TEXT NOT NULL,
    collected BOOLEAN
);

INSERT INTO fishs (fish_name, collected)
    VALUES ('bitterling', true), ('koi', true);




CREATE TABLE arts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    art_name TEXT NOT NULL,
    collected BOOLEAN
);

INSERT INTO arts (art_name, collected)
    VALUES ('academic painting', true), ('calm painting', true);