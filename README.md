# Flora

Aplicação web progressiva (PWA) estática. O workflow publica os ficheiros da app
a partir da raiz do repositório e usa caminhos relativos, pelo que também
funciona no caminho de projeto do GitHub Pages
(`https://<utilizador>.github.io/<repositorio>/`). Os protótipos não são incluídos
no site publicado.

## Publicar no GitHub Pages

1. Envia estes ficheiros para a raiz do repositório GitHub.
2. Se a branch principal não se chamar `main`, altera a branch indicada em
   `.github/workflows/deploy-pages.yml`.
3. Em **Settings > Pages**, seleciona **GitHub Actions** como origem da publicação.
4. Envia uma alteração para a branch principal ou executa manualmente o workflow
   **Deploy Flora to GitHub Pages** no separador **Actions**.
5. Abre o URL apresentado pelo workflow. A instalação PWA e o funcionamento
   offline requerem HTTPS; o GitHub Pages fornece HTTPS.

O service worker guarda a app e os ícones para uso offline. Fontes e imagens
carregadas de serviços externos continuam a precisar de ligação à Internet.
