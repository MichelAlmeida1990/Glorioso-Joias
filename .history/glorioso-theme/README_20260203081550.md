# Glorioso Joias — Tema para Nuvemshop 🚀

**Resumo rápido**
- Tema pronto para upload na Nuvemshop. Inclui `layouts/`, `templates/`, `snipplets/`, `static/`, `config/` e `assets/`.

## Como instalar
1. Acesse o Admin da sua loja → **Layout / Personalizar meu layout / Meus temas**.
2. Clique em **Adicionar tema / Enviar tema** e faça o upload de `glorioso-theme.zip`.
3. Após o upload, **Publicar/Ativar** o tema.

> Alternativa: editar arquivo-a-arquivo em **Editar HTML/CSS** ou usar a CLI (se disponível).

## Checklist pós-upload ✅
- [ ] Ativar o tema.
- [ ] Fazer upload da **logo** no painel (para `{{ store.logo }}` funcionar).
- [ ] Conferir **Cores, Fontes e Slides** no painel do tema (baseado em `config/settings.txt`).
- [ ] Testar: Home, Categoria, Produto, Busca, Carrinho e Checkout (desktop e mobile).
- [ ] Abrir o console do navegador (F12) e verificar 404 e erros JS.

## Erros comuns e correções 🔧
- Imagens 404 → subir arquivos faltantes em `assets/` com o mesmo nome usado em CSS/JS/templates.
- CSS não carregando → confirme que `{{ 'style.css' | static_url | css_tag }}` está presente em `layouts/layout.tpl` e que `static/style.css` existe.
- Snippets → o tema usa `snipplets/product_grid.tpl`. Mantenha o nome igual aos includes ou ajuste os includes para `snippets/` se preferir.
- Erros JS → confira `static/scripts.js` e abra o console do navegador para identificar e corrigir caminhos ou exceções.

## Testes rápidos
- Verifique imagens: abra a página e procure por imagens quebradas (ícone de imagem faltando).
- Verifique console: abra F12 → Console e Rede para ver erros e 404.

## Contato
- Se quiser, posso: gerar checklist automático, corrigir nomes de arquivos com problemas, ou criar o comando para upload via CLI.

---

Obrigado!  
(Arquivo gerado automaticamente)