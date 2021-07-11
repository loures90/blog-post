# blog-post

## Resumo 
Neste trabalho foi desenvolvido uma API REST em Node.JS para um sistema de criação, edição, visualização e exclusão de Blogposts. Para isso também foi criado um sistema de autenticação simples de usuários. Pois somente usuários autenticados podem criar/editar/excluir blogposts.
### Tabelas users e blogpost

Tive problemas para configurar as migrations. Portanto estas tabelas devem ser inseridas manualmente no MySQL.
A url base da API é http://localhost:3003/.


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

### Url Base: http://localhost:3003/
### Users
#### 1.Signup - Cadastro de usuários
##### Método: post
##### url: /blogpost/signup
##### body
{
    name:"name"
    username:"username"
    password: "password"
}
* name, username e passwords não podem ser nulos.
* password tem que ter mais de 6 caracteres.
* O username é único para cada usuário.
##### Resposta:
Em caso de sucesso: {message:Signup Succed} 

#### 2.login - Login de usuários
##### Método: post
##### url: /blogpost/login
##### body
{
    username:"username"
    password: "password"
}
* username e passwords não podem ser nulos.
* password tem que ter mais de 6 caracteres.

##### Resposta:
Em caso de sucesso: {token: 'valor do token'}

### BlogPost

#### 1.Create Post 
##### Método: post
##### url: /blogpost/
##### body
{
    "title": "title",
    "content": "content",
    "slug": "slug"
}
##### Headers
Authorization: token recuperado do login
* title, content e slug são strings e não podem ser nulos.
##### Resposta:
Em caso de sucesso: {message:Success} 

#### 2.Edit Post 

##### Método: patch
##### url: /blogpost/:id
##### Path Params id:
Id do post.
##### body
{
    "title": "new title",
    "content": "new content",
    "slug": "new slug"
}
##### Headers
Authorization: token recuperado do login.
* title, content e slug são strings e não podem ser nulos.
##### Resposta:
Em caso de sucesso: {message:Success} 

#### 3.Delete Post 
##### Método: delete
##### url: /blogpost/:id
##### Path Params id:
Id do post.
##### Headers
Authorization: token recuperado do login.
* id é uma string e não pode ser nula.
##### Resposta:
Em caso de sucesso: {message:Success} 

#### 4. Get Post 
##### Método: get
##### url: /blogpost/:id
##### Path Params id:
Id do post.
##### Headers
Authorization: token recuperado do login
* id é uma string e não pode ser nula.
##### Resposta:
Em caso de sucesso: 
[
    {
    "id": "id do post",
    "title": "title",
    "content": "content",
    "slug": "slug",
    "created_by": "id do usuário criador",
    }
] 

#### 5. Get All Posts 

##### Método: get
##### url: /blogpost/
##### Path Params id:
Id do post.
##### Headers
Authorization: token recuperado do login
* id é uma string e não pode ser nula.
##### Resposta:
Em caso de sucesso: 
[
    {
    "id": "id do post",
    "title": "title",
    "content": "content",
    "slug": "slug",
    "created_by": "id do usuário criador",
    },
    {
    "id": "id do post",
    "title": "title",
    "content": "content",
    "slug": "slug",
    "created_by": "id do usuário criador",
    }
    ....
]

