O projeto busca notícias da News API (https://newsapi.org/) e permite salvar, editar e excluir seus favoritos em um arquivo local.

Realizado primeiro a criação do GET geral, onde irá buscar todas as notícias de forma dinâmica.

Após isso, realizada a criação do GET Favoritos, que lê e exibe as notícias armazenadas no arquivo favoritos.json.

Foi criado o POST Favoritos, responsável por receber uma notícia e salvá-la no arquivo, gerando automaticamente um ID único para cada item.

Implementado o PUT Favoritos, que permite editar as informações de uma notícia já salva, localizando-a pelo seu ID.

Por fim, criado o DELETE Favoritos, que remove uma notícia específica da lista de favoritos baseando-se no ID informado.


As configurações de API_KEY e PORT ficam armazenadas em um arquivo local .env, que é ignorado pelo Git através do arquivo .gitignore.