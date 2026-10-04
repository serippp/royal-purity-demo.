# Royal Purity — demo estática

## Abrir localmente

Extraia o ZIP completo para uma pasta e abra `index.html`. Mantenha `styles.css`, `main.js` e a pasta `assets` junto do HTML. Não abra apenas o HTML dentro do ZIP.

## GitHub + Netlify

O ZIP coloca o `index.html` diretamente na raiz. Publique todos os ficheiros na raiz do repositório. No Netlify, deixe o comando de build em branco e a pasta de publicação em `.`. O `netlify.toml` já define a raiz. Também pode publicar a pasta extraída pelo Netlify Drop.

Não há frameworks, bibliotecas, fontes externas ou dependências de instalação. O único destino externo é o Instagram público da marca, identificado nas referências fornecidas.

## Media

- Hero: `assets/video/clean.mp4`, preparado a partir de `clean(1).mp4`.
- Bastidores: `assets/video/clean1.mp4`, preparado a partir de `clean1(1).mp4`.
- Posters: fotogramas dos respetivos vídeos.
- Antes/depois: recortes das fotografias dos dois trabalhos de colchões anexados; não foram retocadas.
- Sobre: fotografia de colchão com equipamento de limpeza anexada.
- Logótipo e favicon: símbolo vetorial simples de coroa e gota, inspirado nas referências fornecidas.

Os vídeos são H.264, sem áudio e com metadados no início do ficheiro. Em dispositivos que bloqueiem autoplay ou com redução de movimento ativa, mantém-se uma imagem estática de fallback. Nenhum website consegue forçar reprodução automática se o sistema operativo a bloquear.

O contacto abre `https://www.instagram.com/royalpurity.clean/`. Não existe formulário com envio, telefone ou preços inventados. Confirme os conteúdos com a marca antes de lançar como website oficial.

## Validação desta entrega

A página foi verificada no Chrome em desktop e em enquadramentos de 320 px, 390 px e 768 px. Foram revistos o hero, os serviços, os resultados, o menu móvel e os vídeos. Não houve overflow horizontal nos tamanhos verificados nem erros da página na consola. Os dois vídeos reproduziram no desktop e no enquadramento móvel de 390 px.

O ZIP foi extraído e os ficheiros foram servidos diretamente por HTTP, sem framework nem processo de build. CSS, JS e todos os media responderam com HTTP 200 e os caminhos relativos foram confirmados. Não foi feita uma publicação na conta Netlify do utilizador nem um teste num iPhone físico.
