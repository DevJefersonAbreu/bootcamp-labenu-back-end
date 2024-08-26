Arquivos na nuvem - Exercício
Antes de começar
Esse exercício é opcional. Caso prefira não criar uma conta na AWS, use o tempo livre para revisar outros conteúdos ou focar no projeto.

Enunciado
Crie uma API que gerencia users, contendo endpoints de signup, login e getProfile.
Cada user possui id, name, email, password, role, profilePicture e createdAt.
O atributo profilePicture é uma imagem em jpeg ou png, e deve ser armazenado na S3.

Exercício 1
Setup da API (estrutura dos arquivos e pastas, setup do Express, SQLite, etc...)

Exercício 2
Criação dos endpoints de signup e login.

Exercício 3
Criação do endpoint de getProfile que retorna os dados de user (exceto a senha) e com a url pública da imagem de perfil.


RESPOSTA

mkdir user-api
cd user-api
npm init -y

npm install express sqlite3 aws-sdk multer bcryptjs jsonwebtoken



JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_aws_region
S3_BUCKET=your_bucket_name

.env
