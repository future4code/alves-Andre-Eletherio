### Exercício 1
// a)
É o que faz a ligação entra as tables. Nela passamos um referencial de outra tabela, que vai ser utilizado para comparações e exibições conjuntas.
// b)
```
INSERT INTO Rating VALUES ('a', 'Bom Filme' 10, '1'), ('a', 'Filmão' 8, '2'), ('c', 'Melhor' 7, '3');
```
// c)
Cannot add or update a child row: a foreign key constraint fails (`opa`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))
Dá um erro pois não a FOREIGN KEY não consegue referenciar nada.
// d)
```
ALTER TABLE movies DROP rating;
```
// e)
Cannot delete or update a parent row: a foreign key constraint fails (`opa`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))
Não é possível apagar um elemento de uma tabela caso ele esteja ligado a outra através de uma FOREIGN KEY.

### Exercício 2
// a)
Essa tabela funciona como um meio termo, relacionando atores a filmes, nela colocamos os id dos atores e dos filmes, para que possamos ligá-los.
// c) Cannot add or update a child row: a foreign key constraint fails (`opa`.`moviecast`, CONSTRAINT `moviecast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`))
Já que o ator não existe, dá erro, pois o FOREIGN KEY somente aceita valores que existam em outras tabelas.
// d)
Cannot delete or update a parent row: a foreign key constraint fails (`opa`.`moviecast`, CONSTRAINT `moviecast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`))
Não é possível apagar um item que esteja sendo referenciado como FOREIGN KEY em outra tabela.

### Exercício 3
// a) O operador 'ON' faz com que apenas sejam retornados os dados que cumpram a condição que vem em seguida.
// b)
```
SELECT name, movies.id, rate FROM movies
JOIN rating ON movies.id = rating.movie_id;
```

### Exercício 4
// a)
```
SELECT name, movies.id, rate, comment from movies left join rating on movies.id = rating.movie_id;
```
// b)
```
SELECT movies.id, movies.name, actor_id FROM movies JOIN movieCast ON movies.id = movieCast.movie_id;
```
// c)
```
SELECT name, AVG(rate) as media from movies left join rating on movies.id = rating.movie_id group by name;
```

### Exercício 5
// a) Pois nós desejamos juntar 3 tabelas, então juntamos as 2 primeiras (1 JOIN), e depois juntamos o resultado com o 3 tabela (2 JOIN).
// b)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name
FROM Movie m
LEFT JOIN MovieCast mc
ON m.id = mc.movie_id
JOIN Actor a
ON a.id = mc.actor_id;
```
// c)
```
SELECT m.name, a.name, comment, rate 
FROM movies m
JOIN movieCast mc
ON m.id = mc.movie_id
JOIN actors a
ON mc.actor_id = a.id
JOIN rating r
ON m.id = r.movie_id;
```
