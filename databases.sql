CREATE DATABASE libros;

CREATE TABLE mis_libros(
    seccion int,
    titulo text,
    autor text
);

INSERT INTO mis_libros values
    (1,'node desde cero','jhon mircha'),
    (2,'Pytho desde cero','codigoFacilito'),
    (3,'Dart desde cero','Fernando Herrera');

CREATE TABLE usuarios(
    usuario text,
    contrasena text
);

INSERT INTO usuarios values
    ('LeoPindjs','leo123'),
    ('FeloVago84','felo12345'),
    ('FerHerrera','fer1234');



