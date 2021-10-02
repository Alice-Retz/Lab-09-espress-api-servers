DROP TABLE IF EXISTS villagers, fossils;

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