/* Oppgave 1 */

/* data.sql */

INSERT INTO Lager (Navn, Adresse)
VALUES ('Langkaia', 'Langkaia 23');
INSERT INTO Lager (Navn, Adresse)
VALUES ('Moss kai', 'Mossevegen 50');

INSERT INTO Pakke (LID, Eier, Vekt, Volum)
VALUES (1, 'Kaare Larsen', 1.0, 1.0);
INSERT INTO Pakke (LID, Eier, Vekt, Volum)
VALUES (1, 'Ingrid Brostad', 2.5, 0.5);

/* ikke spurt etter i oppgaveteksten - kun for testing av oppgave 7 */
INSERT INTO Bruker (Navn, Passord)
VALUES ('Martin', 'qwerty1234');
