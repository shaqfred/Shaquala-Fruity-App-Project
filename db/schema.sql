CREATE DATABASE fruity;

\c fruity
CREATE TABLE fruity(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    facts TEXT NOT NULL,
    price INTEGER,
    isFavorite BOOLEAN
);