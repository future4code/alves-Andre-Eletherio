### Exercício 1
a)
Apaga a coluna 'salário' da tabela 'Actor'
b)
Muda a coluna 'gender' para 'sex' com a possibilidade de receber 6 caracteres.
c)
Altera a quantidade de caracteres possíveis a serem recebidos para 255.
d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2
a)
```
UPDATE Actor SET name = 'letra', birth_date = '1990-08-09' WHERE id = '003';
```
b)
```
UPDATE Actor SET name = UPPER(name) WHERE name = 'Juliana Paes';
```
```
UPDATE Actor SET name = 'Juliana Paes' WHERE name = 'JULIANA PAES';
```
c)
```
UPDATE Actor SET id = '030', name = 'Jorge', salary = 300000, birth_date = '1990-08-09', gender = 'male' WHERE id = '005';
```


### Exercício 3
a)
```
DELETE FROM Actor WHERE name = 'Fernanda Montenegro';
```
b)
```
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;
```


### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = 'female';
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = 'female';
```
d)
```
SELECT SUM(salary) FROM Actor;
```


### Exercício 5
a)
Ela retorna os gêneros e a quantidade de pessoas em cada um deles.
b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor ORDER BY salary;
```
d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```


### Exercicio 6
a)
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Filmes CHANGE rating rating FLOAT NOT NULL;
```
c)
```
UPDATE Filmes SET playing_limit_date = '2022-09-15' WHERE id = '001';
```
```
UPDATE Filmes SET playing_limit_date = '2020-09-08' WHERE id = '002';
```
d)
```
DELETE FROM Filmes WHERE id = '001';
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não deu erro, mas tbm não mudou nada.


### Exercicio 7
a)
```
SELECT COUNT(*) FROM Filmes WHERE rating > 7.5;
```
b)
```
SELECT AVG(rating) FROM Filmes;
```
c)
```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date >= CURDATE();
```
d)
```
SELECT COUNT(*) FROM Filmes WHERE release_date > CURDATE();
```
e)
```
SELECT MAX(rating) FROM Filmes;
```
f)
```
SELECT MIN(rating) FROM Filmes;
```


### Exercício 8
a)
```
SELECT * FROM Filmes ORDER BY name;
```
b)
```
SELECT * FROM Filmes ORDER BY name DESC LIMIT 5;
```
c)
```
SELECT * FROM Filmes WHERE release_date <= CURDATE() ORDER BY release_date DESC LIMIT 3;
```
d)
```
SELECT * FROM Filmes ORDER BY rating DESC LIMIT 3;
```
