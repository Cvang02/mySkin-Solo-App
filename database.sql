-- DATABASE NAME: solo_project_data

-- DROP TABLE WILL DELETE THE TABLES IN POSTGRESQL.
DROP TABLE "post";
DROP TABLE "product";
DROP TABLE "user";

-- THESE ARE OUR DATABASE TABLES.
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "email" VARCHAR (100) NOT NULL,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL,
    "profile_url" VARCHAR,
 	"inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "post" (
    "id" SERIAL PRIMARY KEY,
    "image_url" VARCHAR NOT NULL,
    "description" VARCHAR (100) NOT NULL,
    "product_id" INT REFERENCES "post",
    "user_id" INT REFERENCES "user",
    "inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "product" (
    "id" SERIAL PRIMARY KEY,
    "product_url" VARCHAR NOT NULL,
    "brand_name" VARCHAR (100),
    "description" VARCHAR NOT NULL,
    "user_id" INT REFERENCES "user",
    "inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
