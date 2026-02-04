<div class="product-card">
    <a href="{{ product.url }}">
        <div class="product-image">
            <img src="{{ product.featured_image | product_image_url('large') }}" alt="{{ product.name }}" class="img-front">
            {% if product.images_count > 1 %}
                <img src="{{ product.images[1] | product_image_url('large') }}" alt="{{ product.name }} Modelo" class="img-back">
            {% endif %}
        </div>
    </a>
    <div class="product-info">
        <h3 class="product-title">{{ product.name }}</h3>
        <div class="product-price-container">
            <p class="product-price">{{ product.price | money }}</p>
        </div>
        <p class="product-installments">6x de {{ (product.price / 6) | money }} sem juros</p>
        
        {# Se houver variações de tamanho #}
        {% if product.variations %}
            <p class="product-sizes">Tamanhos disponíveis</p>
        {% endif %}
    </div>
    <div class="text-center" style="margin-top: 15px; padding-bottom: 20px;">
        <a href="{{ product.url }}" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.8rem;">Comprar</a>
    </div>
</div>
