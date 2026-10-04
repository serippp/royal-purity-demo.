# Royal Purity — edição premium

Website estático completo. Sem build command, frameworks, dependências ou fontes externas.

## Apresentação
- Entrada de marca em verde profundo, coroa/gota e linha dourada: 1,6 segundos, sem esperar media; não repete na mesma sessão quando sessionStorage está disponível.
- Hero full-bleed com clean.mp4, poster hero.jpg, overlay cinematográfico, título editorial e CTAs champagne/outline.
- Serviços: destaque de sofás + quatro linhas editoriais numeradas.
- Dois comparadores antes/depois com range nativo, labels e handle; teclado e input touch compatível com browsers móveis. Fotografias originais não retocadas; perspetivas diferentes identificadas na nota.
- clean1.mp4 em composição vertical com moldura deslocada, headline e descrição.
- Header reativo ao scroll, menu móvel, scroll suave e reveals de 650–900 ms.
- prefers-reduced-motion elimina entrada e animações; vídeos decorativos dão lugar aos posters. Comparadores e menu continuam funcionais.
- Sem JavaScript: conteúdo disponível, fotos lado a lado, menu por links e posters.

## Media
Hero: clean.mp4 + hero.jpg. Bastidores: clean1.mp4 + em-acao.jpg.
Sobre: colchao-servico.jpg. Resultados: colchao-1-antes/depois.jpg e colchao-2-antes/depois.jpg.
Identidade: logo-symbol.svg + favicon.svg. Apenas media previamente fornecida, incluindo posters extraídos dos vídeos.
Contacto: Instagram da marca; não foi inventado contacto WhatsApp.

## Publicar
Extrair o ZIP e publicar a PASTA COMPLETA que contém index.html e todos os JPG, MP4 e SVG.
Todos os 18 ficheiros estão diretamente na raiz. Netlify publish directory: '.', sem build command.
No GitHub: incluir todos os ficheiros do ZIP no repositório, preservando nomes.
Abrir index.html funciona com referências relativas; autoplay depende da política do navegador.

## Verificação
Chrome desktop e layouts mobile em iframe 390×844 e 320 px, sem overflow horizontal.
Menu abre/fecha, navegação por anchors, input e teclado nos comparadores; vídeos readyState=4 e reprodução confirmada, sem erros do site capturados.
Fallback sem JavaScript testado num iframe com scripts bloqueados; preloader termina e ambas as fotografias continuam disponíveis.
Não se realizou teste em dispositivo físico iOS/Android nem benchmark de desempenho.
ZIP extraído servido num servidor HTTP estático sem Vite: todos os caminhos referenciados respondem 200, bytes conferidos com os ficheiros e zero 404. Relatório em VALIDACAO.json.
O site Netlify existente não foi atualizado; esta versão tem de ser publicada pelo titular da conta.
