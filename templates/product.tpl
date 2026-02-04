<div class="container section-padding">
    <div class="product-detail-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px;">
        
        {# Galeria de Imagens #}
        <div class="product-gallery">
            <div class="main-image mb-4">
                <a href="{{ product.featured_image | product_image_url('huge') }}" id="zoom-image">
                    {{ product.featured_image | product_image_url('large') | img_tag(product.name, {class: 'img-fluid w-100'}) }}
                </a>
            </div>
            {% if product.images_count > 1 %}
                <div class="thumbnails-grid" style="display: flex; gap: 10px; overflow-x: auto;">
                    {% for image in product.images %}
                        <div class="thumb-item" style="width: 80px; height: 80px; cursor: pointer;">
                            <img src="{{ image | product_image_url('small') }}" alt="{{ product.name }}" class="img-fluid border" onclick="document.querySelector('#zoom-image img').src='{{ image | product_image_url('large') }}'">
                        </div>
                    {% endfor %}
                </div>
            {% endif %}
        </div>

        {# Informações do Produto #}
        <div class="product-info-column">
            <nav class="breadcrumb-nav mb-3" style="font-size: 0.8rem; color: #666;">
                <a href="{{ store.url }}">Home</a> / 
                {% if product.category %}
                    <a href="{{ product.category.url }}">{{ product.category.name }}</a> /
                {% endif %}
                <span>{{ product.name }}</span>
            </nav>

            <h1 class="product-title" style="font-family: var(--font-heading); color: var(--gold); font-size: 2rem; margin-bottom: 20px;">{{ product.name }}</h1>
            
            <div class="product-price-section mb-4">
                <span class="price-original" style="font-size: 1.5rem; font-weight: 700;">{{ product.price | money }}</span>
                <p class="installments-text" style="color: #28a745; font-size: 0.9rem;">
                    Ou 6x de {{ (product.price / 6) | money }} sem juros no cartão
                </p>
            </div>

            <hr style="border-color: #333;">

            {# Botão de Compra e Opções #}
            <form action="{{ store.cart_url }}" method="post" class="mt-4">
                <input type="hidden" name="add_to_cart" value="{{ product.id }}">
                
                {% if product.variations %}
                    <div class="variation-selectors mb-4">
                        {% for variation in product.variations %}
                            <label class="d-block mb-2">{{ variation.name }}:</label>
                            <select name="variation[{{ variation.id }}]" class="form-control bg-dark text-white border-gold mb-3">
                                {% for option in variation.options %}
                                    <option value="{{ option.id }}">{{ option.name }}</option>
                                {% endfor %}
                            </select>
                        {% endfor %}
                    </div>
                {% endif %}

                <button type="submit" class="btn btn-primary w-100 py-3" style="font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;">
                    Adicionar ao Carrinho
                </button>
            </form>

            <div class="product-shipping-calc mt-4 p-3 border border-dark rounded">
                <p style="font-size: 0.9rem;"><i class="fa-solid fa-truck"></i> Calcule o frete:</p>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="00000-000">
                    <button class="btn btn-outline-gold">Calcular</button>
                </div>
            </div>

            <div class="product-description mt-5">
                <h4 style="color: var(--gold); border-bottom: 1px solid var(--gold); display: inline-block; padding-bottom: 5px; margin-bottom: 15px;">Descrição</h4>
                <div class="content" style="color: #ccc; line-height: 1.6;">
                    {{ product.description }}
                </div>
            </div>
        </div>
    </div>
</div>
