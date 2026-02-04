# Instruções para Instalação do Tema Premium - Glorioso Joias na Nuvemshop

Este pacote contém o design customizado da Glorioso Joias adaptado para a plataforma Nuvemshop.

## Estrutura do Pacote

- `/layouts/layout.tpl`: Estrutura geral (Header/Footer).
- `/templates/home.tpl`: Página inicial customizada.
- `/snipplets/product_grid.tpl`: Visual dos produtos.
- `/static/`: CSS e Scripts.

## Como Instalar

1. **Acessar o FTP ou Editor de Layout**:
   - Vá no painel da Nuvemshop -> **Personalizar meu layout**.
   - Se for um parceiro especialista, use o **Nuvemshop CLI** ou o editor avançado.

2. **Subir os arquivos**:
   - Substitua o conteúdo dos arquivos `.tpl` correspondentes pelos que estão nesta pasta.
   - Envie o arquivo `style.css` para a pasta `static` do seu tema.

3. **Configurar Ativos**:
   - No painel da Nuvemshop, certifique-se de subir a **Logo** da loja para que a tag `{{ store.logo }}` a reconheça.

> [!IMPORTANT]
> Este tema utiliza os nomes de categorias e produtos cadastrados no seu painel da Nuvemshop. Certifique-se de ter pelo menos uma categoria e alguns produtos com imagens para ver o efeito completo.
