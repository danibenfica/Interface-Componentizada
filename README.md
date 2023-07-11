![interfaceComponentizada-_online-video-cutter com_](https://github.com/danibenfica/interface-componentizada/assets/103818625/01cb7f91-9d92-49d5-99aa-385f60d3d6af)


# Projeto: Interface componentizada

## Descrição

O projeto "interface-componentizada" é uma aplicação web desenvolvida em React. Ele fornece uma interface para pesquisar usuários do GitHub e exibir informações sobre eles, incluindo seus repositórios e repositórios favoritos.

## Instalação

Para executar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório do projeto:
   ```
   git clone <https://github.com/danibenfica/interface-componentizada.git>
   ```

2. Navegue até a pasta raiz do projeto:
   ```
   cd interface-componentizada
   ```

3. Instale as dependências do projeto usando o gerenciador de pacotes npm:
   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

5. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Acesso Online

O projeto "interface-componentizada" está hospedado online e pode ser acessado através do seguinte [link](https://interface-componentizada.vercel.app/)

## Utilização

1. Na página inicial do projeto, você verá um campo de pesquisa para digitar o nome de usuário do GitHub que deseja pesquisar.

2. Digite o nome de usuário no campo de pesquisa e pressione Enter ou clique no botão de pesquisa.

3. O aplicativo irá buscar as informações do usuário no GitHub e exibirá os resultados.

4. Se o usuário existir, você verá informações como o nome, username, empresa, localização e links para o perfil do usuário e blog,
   além de estatísticas como seguidores, seguindo, gists e repositórios públicos.

5. Na seção de repositórios, você pode alternar entre as guias "Repositories" (repositórios) e "Starred" (repositórios favoritos) para visualizar os respectivos repositórios do usuário.

6. Cada repositório é exibido com o nome e um link para acessá-lo.

## Principais Funções

A aplicação "interface-componentizada" possui as seguintes principais funções:

1. Pesquisa de Usuário:
   - Descrição: Permite pesquisar um usuário do GitHub pelo seu nome de usuário.
   - Funcionalidade: O usuário pode digitar o nome de usuário no campo de pesquisa e pressionar Enter ou clicar no botão de pesquisa   para buscar as informações do usuário.

```
<input
  type="text"
  name="name"
  placeholder="Digite o username para pesquisa..."
  onChange={(event) => setusernameForSearch(event.target.value)}
  id="name"
  required
/>
<button type="submit" value="enviar" id="send" onClick={submitGetUser}>
  <span>Pesquisar</span>
</button>
```

2. Exibição de Informações:
   - Descrição: Exibe informações do usuário, incluindo nome, username, empresa, localização e estatísticas.
   - Funcionalidade: Após realizar a pesquisa do usuário, as informações relevantes são exibidas na tela, permitindo que o usuário conheça detalhes sobre o perfil pesquisado.

```
<S.WrapperImg
  src={githubState.user.avatar}
  alt="avatar of user"
/>
<h1>{githubState.user.name}</h1>
<h3>Username:</h3>
<a href={githubState.user.html_url} target="_blank" rel="noreferrer">
  {githubState.user.login}
</a>
<h3>Company:</h3>
<span>{githubState.user.company}</span>
<h3>Location:</h3>
<span>{githubState.user.location}</span>
<h3>Blog:</h3>
<a href={githubState.user.blog} target="_blank" rel="noreferrer">
  {githubState.user.blog}
</a>

```

3. Lista de Repositórios:
   - Descrição: Apresenta uma lista de repositórios do usuário, incluindo seus próprios repositórios e os repositórios favoritos.
   - Funcionalidade: Ao visualizar o perfil de um usuário, o aplicativo exibe uma seção dedicada aos repositórios desse usuário, divididos em guias "Repositories" e "Starred". Cada repositório é listado com o nome e um link para acessá-lo.

```
<S.WrapperTabs
  selectedTabClassName="is-selected"
  selectedTabPanelClassName="is-selected"
>
  <S.WrapperTabList>
    <S.WrapperTab>Repositories</S.WrapperTab>
    <S.WrapperTab>Starred</S.WrapperTab>
  </S.WrapperTabList>
  <S.WrapperTabPanel>
    {githubState.repositories.map((item) => (
      <RepositoryItem
        key={item.id}
        name={item.name}
        linkToRepo={item.full_name}
        fullName={item.full_name}
      />
    ))}
  </S.WrapperTabPanel>
  <S.WrapperTabPanel>
    {githubState.starred.map((item) => (
      <RepositoryItem
        key={item.id}
        name={item.name}
        linkToRepo={item.full_name}
        fullName={item.full_name}
      />
    ))}
  </S.WrapperTabPanel>
</S.WrapperTabs>

```

Navegação entre Abas: Não há um trecho de código específico para a navegação entre abas, pois esse comportamento é tratado pelo componente S.WrapperTabs fornecido pelo pacote externo react-tabs.

Interação com Links: Os links clicáveis para acessar o perfil do usuário e os repositórios estão presentes nas seções de Exibição de Informações do Usuário e Listagem de Repositórios, conforme mostrado nos trechos de código anteriores.

## Tecnologias Utilizadas

O projeto "interface-componentizada" utiliza as seguintes tecnologias:

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- React Router: Biblioteca para gerenciamento de rotas no React.
- Axios: Biblioteca para fazer requisições HTTP.
- Styled Components: Biblioteca para estilização de componentes no React.
- Web Vitals: Biblioteca para medir e relatar as métricas de desempenho da aplicação.

## Conclusão

O projeto "interface-componentizada" é uma aplicação React que permite pesquisar usuários do GitHub e exibir informações sobre eles, incluindo seus repositórios e repositórios favoritos. Com uma interface intuitiva e funcionalidades principais bem definidas, ele oferece uma maneira fácil de explorar perfis de usuários do GitHub. Utilizando tecnologias modernas como React e Styled Components, o projeto demonstra boas práticas de desenvolvimento front-end.
Resolvi estilizar ao meu gosto, um dos projetos mais divertidos e desafiadores que fiz nesses 3 dias. Aprendi muito mais de React nesse curso, e fico muito feliz com cada passo dado. Espero que gostem!

[Link da playlist do curso](https://www.youtube.com/watch?v=F1HqLD6TgCw&list=PLTv2Rbwcr_Cru7KIHcffE1Shg9X9Eix7a)

Qualquer dúvida ou sugestão, pode entrar em contato comigo! :smile: 
Esse projeto foi um dos mais desafiadores e um dos mais divertidos de criar também! :heart:

