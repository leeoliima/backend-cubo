-- Active: 1674156624980@@35.226.146.116@3306@jbl-4416903-leandro-santos

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    participation INT NOT NULL
);

INSERT INTO users (first_name, last_name, participation)
VALUES ('Leandro', 'Lima', 50);

