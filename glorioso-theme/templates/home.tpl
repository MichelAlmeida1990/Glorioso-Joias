{# Hero Section / Slideshow #}
<section class="hero-section">
    <div class="hero">
        <div class="hero-content">
            <h1>Joias de Alta Qualidade</h1>
            <p>Elegância, sofisticação e durabilidade em cada peça. Descubra nossa coleção premium.</p>
            <div class="hero-buttons">
                <a href="{{ store.products_url }}" class="btn btn-primary">Ver Produtos</a>
                <a href="#destaques" class="btn btn-outline">Destaques</a>
            </div>
        </div>
        <div class="hero-scroll-indicator">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
</section>

{# Categories Section #}
<section class="container section-padding">
    <div class="section-header text-center">
        <h2>Navegue por Categorias</h2>
        <p>Encontre a joia que mais combina com você</p>
        <div class="divider"></div>
    </div>
    
    <div class="categories-grid">
        {% for category in categories %}
            <a href="{{ category.url }}" class="category-item">
                <div class="img-circle" style="background-image: url('{{ category.image | category_image_url('medium') }}');"></div>
                <span>{{ category.name }}</span>
                <small>Ver Seleção</small>
            </a>
        {% endfor %}
    </div>
</section>

{# Highlights Section #}
<section id="destaques" class="container section-padding">
    <div class="section-header text-center">
        <h2>Nossos Destaques</h2>
        <p>Peças selecionadas para brilhar com você</p>
        <div class="divider"></div>
    </div>
    
    <div class="products-grid">
        {% for product in sections.primary.products %}
            {% include 'snipplets/product_grid.tpl' with {'product': product} %}
        {% endfor %}
    </div>
    
    <div class="text-center" style="margin-top: 50px;">
        <a href="{{ store.products_url }}" class="btn btn-outline">Ver Loja Completa</a>
    </div>
</section>
