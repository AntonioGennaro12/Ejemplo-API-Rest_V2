CREATE DATABASE misAmigos_db; /* Crea la base de Amigos */

SHOW DATABASES;

USE misAmigos_db; /*  inicio sesión con base de datos Clientes */

SHOW TABLES;

/* Creo la tabla segun los datos mínimos requeridos */
CREATE TABLE tabla_amigos(
    nro_orden INT NOT NULL AUTO_INCREMENT,
    amigo_nombre VARCHAR(25) NOT NULL,
    amigo_apellido VARCHAR(25) NOT NULL, 
    amigo_telefono BIGINT NOT NULL,  
    amigo_email VARCHAR (40),
    PRIMARY KEY (nro_orden)
);

SHOW TABLES;

/* Describe la estructura de la tabla de amigos */
DESCRIBE tabla_amigos;

/*Muestra TODO(*) el contenido de la tabla indicada*/
SELECT * FROM tabla_amigos;
/* indica "Empty set" */

/* Inserta un par de  registros en la tabla creada */
INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES ("Juan Pablo", "Martinez", 1149477788, "juanpimartinez@gmail.com");
SELECT * FROM tabla_amigos;
/* muestra registro nro 1 OK */
INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES ("Alejandro", "Fernández", 1153026699, "");
SELECT * FROM tabla_amigos;
/* muestra registro nro 1 y 2 OK */ 


SELECT amigo_nombre FROM tabla_amigos;
/* Muestra todos los campos "amigos_nombre" que son 2 */

/* AGREGO 2 AMIGOS MAS */

INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES ("Pedro Ignacio", "Rodriguez", 1160011234, "peterrodriguez@gmail.com");
SELECT * FROM tabla_amigos;

INSERT INTO tabla_amigos (amigo_nombre, amigo_apellido, amigo_telefono, amigo_email) VALUES ("Fernando", "López", 1156785678, "");
SELECT * FROM tabla_amigos;


UPDATE tabla_amigos amigo_email = ferlopez@gmail.com WHERE nro_orden =  4; 
SELECT * FROM tabla_amigos;
/* esta es la salida */ 

UPDATE tabla_amigos amigo_email = alefernandez@gmail.com WHERE nro_orden =  2; 
SELECT * FROM tabla_amigos;
/* esta es la salida */ 

/*FIN*/