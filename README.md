### Desafio - Crack the Code EloGroup

Esse projeto foi desenvolvido de acordo com os requisitos solicitados no desafio "Crack The Code", durante o processo seletivo da empresa EloGroup.

O projeto consiste em uma aplicação de cadastro de Leads, tendo os seguintes módulos:

- Cadastro de Usuário;
- Cadastro de Lead;
- Painel para visualização e edição dos leads cadastrados.



##### Contexto do desafio:

- A aplicação que será desenvolvida, tem como objetivo fazer a manutenção de Leads;
- Cada componente deverá ter suas responsabilidades bem definidas, um critério que será avaliado é a  coesão na separação de responsabilidades dos componentes ;
- Implementar os componentes de apresentação gráfica (GUI) sempre em arquivos específicos,  evitando misturar por exemplo Controladores e Views, Services e Views em um mesmo arquivo;
- Não precisa enviar dados ao backend, uma vez que o desfaio consiste na implementação dos  componentes de FrontEnd;
- Utilizar o localstorage do navegador como mecanismo de persistência para armazenar a lista de  Leads, bem como os novos usuários criados;
- Os componentes podem ter suas  nomenclaturas variadas de acordo com o Framework escolhido, mas a responsabilidade de cada um  deles deve ser respeitada.



##### Tecnologias e ferramentas utilizadas:

- Frontend: ReactJS;
- Persistência de dados: localStorage (Requisito do desafio);
- Validação de dados dos formulários: Joi;
- Estrutura do projeto: MVC;



##### Executando o projeto:

1. Após clonar o projeto, vá até a pasta raiz;

2. Agora precisamos instalar todos pacotes essenciais para execução da aplicação. Para tal, execute o seguinte comando no terminal:

   ```
   npm install
   ```

3. Após o termino da instalação, iremos iniciar nossa aplicação através do comando:

   ```
   npm start
   ```

4. Após o término do processo de compilação, acesse a aplicação no seu navegador através da URL:

   ```
   http://localhost:3000
   ```