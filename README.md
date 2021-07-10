# blog-post
Blogposts

### Tabelas users e blogpost
Abaixo o código das tabelas criadas manualmente no MySQL:

CREATE TABLE users(
	id varchar(255) NOT NULL CHECK(LTRIM(RTRIM(id))<>''),
    name varchar(255) NOT NULL CHECK(LTRIM(RTRIM(name))<>''),
    username varchar(255) UNIQUE NOT NULL CHECK(LTRIM(RTRIM(username))<>''),
    password varchar(255) NOT NULL CHECK(LTRIM(RTRIM(password))<>''),
    PRIMARY KEY(id)
);


CREATE TABLE blog_post(
	id varchar(255) NOT NULL CHECK(LTRIM(RTRIM(id))<>''),
	title varchar(255) NOT NULL CHECK(LTRIM(RTRIM(title))<>''),
	content TEXT NOT NULL CHECK(LTRIM(RTRIM(content))<>''),
	slug varchar(255) NOT NULL CHECK(LTRIM(RTRIM(slug))<>''),
	created_by varchar(255) NOT NULL CHECK(LTRIM(RTRIM(created_by))<>''),
    PRIMARY KEY(id),
    FOREIGN KEY(created_by) REFERENCES users (id)
);




## EndPoints:
#### 1.Signup - Cadastro de usuários

##### Método: post
##### url: /blogpost/signup
##### body={
    name:"name"
    username:"username"
    password: "password"
}

* name, username e passwords não podem ser nulos.
* password tem que ter mais de 6 caracteres.
* O username é único para cada usuário.

##### Resposta:
Em caso de sucesso: {message:Signup Succed} 
#### 1.login - Login de usuários

##### Método: post
##### url: /blogpost/login
##### body={
    username:"username"
    password: "password"
}

* username e passwords não podem ser nulos.
* password tem que ter mais de 6 caracteres.

##### Resposta:
Em caso de sucesso: {token: 'valor do token'}