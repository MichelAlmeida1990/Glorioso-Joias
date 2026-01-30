<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page_title }}</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    {{ head_content }}
    
    <!-- CSS Customizado Premium -->
    {{ 'style.css' | static_url | css_tag }}
</head>
<body>
    <header>
        <div class="topber">
            Frete Grátis para todo o Brasil nas compras acima de R$ 299,00
        </div>
        
        <div class="main-header">
            <div class="search-bar">
                <form action="{{ store.search_url }}" method="get">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="q" placeholder="Buscar...">
                </form>
            </div>
            
            <div class="logo">
                <a href="{{ store.url }}">
                    {% if has_logo %}
                        {{ store.logo | img_tag(store.name) }}
                    {% else %}
                        <span class="logo-text">{{ store.name }}</span>
                    {% endif %}
                </a>
            </div>
            
            <div class="header-actions">
                <a href="{{ store.customer_login_url }}"><i class="fa-regular fa-user"></i> Login</a>
                <div class="cart-icon">
                    <a href="{{ store.cart_url }}">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span class="cart-count">{{ cart.items_count }}</span>
                    </a>
                </div>
            </div>
        </div>

        <nav class="main-nav">
            <ul>
                {% for item in menu.main %}
                    <li><a href="{{ item.url }}" {% if item.current %}class="active"{% endif %}>{{ item.name }}</a></li>
                {% endfor %}
            </ul>
        </nav>
    </header>

    <main>
        {% template_content %}
    </main>

    <footer>
        <div class="container section-padding">
            <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px;">
                <div class="footer-about">
                    <div class="logo-footer" style="margin-bottom: 20px;">
                        {% if has_logo %}
                            {{ store.logo | img_tag(store.name, {height: 80}) }}
                        {% endif %}
                    </div>
                    <p style="color: #999; font-size: 0.9rem;">Joias exclusivas com design sofisticado e qualidade incomparável.</p>
                    <div class="social-links" style="margin-top: 20px; display: flex; gap: 15px;">
                        <a href="https://www.instagram.com/joiasglorioso/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://wa.me/5511999999999" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4 style="color: var(--gold); margin-bottom: 20px; font-family: var(--font-heading);">Institucional</h4>
                    <ul style="display: flex; flex-direction: column; gap: 10px; color: #999; font-size: 0.9rem;">
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Política de Troca</a></li>
                        <li><a href="#">Garantia</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                
                <div class="footer-payments">
                    <h4 style="color: var(--gold); margin-bottom: 20px; font-family: var(--font-heading);">Pagamento</h4>
                    <div class="payment-icons" style="display: flex; gap: 10px; font-size: 1.5rem; color: #666;">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-solid fa-barcode"></i>
                        <i class="fa-solid fa-pix"></i>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom" style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #666; font-size: 0.8rem;">
                <p>&copy; {{ "now" | date("Y") }} {{ store.name }}. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</body>
</html>
