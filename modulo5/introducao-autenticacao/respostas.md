Exercício 1

a) Sim, pois como o tipo string permite a combinação de diversos tipos de caracteres, as chances de termos ids repetidos diminui drasticamente.

b)
```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```


Exercício 2

a) O código tem a função de criar um novo usuário, recebendo seu id, email e senha e inserindo na tabela.

b)
```
create table users_ex (
	id varchar(255) primary key,
    email varchar(255) unique not null,
    password varchar(255) not null
);
```


Exercício 3

a) Ela diz ao typescript que o valor da variável passada será uma string. Sem ela, teríamos um erro pelo fato do valor poder ser do tipo jwt.

b)


Exercício 7

a) Ela possibilita que passemos o payload.id sem erro. Sem ela payload.id poderia ser do tipo string ou jwt, o que causaria um erro.

