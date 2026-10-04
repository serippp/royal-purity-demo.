# Royal Purity — pacote estático corrigido

Todos os ficheiros estão na raiz. Apenas caminhos e organização de media foram alterados; HTML visual, textos, CSS e JS mantidos.

Publicação manual: extrair o ZIP e publicar a pasta completa que contém index.html e os ficheiros JPG/MP4/SVG. Não publicar apenas HTML/CSS/JS.

Netlify: publish directory '.', sem build command. GitHub: incluir todos os 17 ficheiros.

Hero: clean.mp4 e hero.jpg. Bastidores: clean1.mp4 e em-acao.jpg. Sobre: colchao-servico.jpg. Resultados: os quatro ficheiros colchao-*-antes/depois.jpg. Identidade: logo-symbol.svg e favicon.svg.

Diagnóstico: no site publicado, pedidos aos assets devolviam a página 404. O pacote original tinha os ficheiros, mas esses caminhos não estavam disponíveis na publicação. Sem acesso ao painel/repositório, não é possível determinar como foram omitidos nem substituir o deploy.

Validação: Chrome desktop (1348 px úteis) e layout mobile num iframe de 390 px (375 px úteis com scrollbar), menu funcional, sem overflow; imagens carregadas e ambos os vídeos com readyState=4 e reprodução confirmada. CSS e JavaScript sem alterações de conteúdo. A validação de HTTP do ZIP extraído encontra-se em VALIDACAO.json. Não foi efetuado deploy na conta Netlify.
