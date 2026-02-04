<div class="container section-padding">
    <div class="cart-header text-center mb-5">
        <h1 style="font-family: var(--font-heading); color: var(--gold);">Sua Sacola</h1>
        <div class="divider mx-auto"></div>
    </div>

    {% if cart.items %}
        <div class="row">
            {# Lista de Itens #}
            <div class="col-md-8">
                <div class="cart-items-list border-top border-dark">
                    {% for item in cart.items %}
                        <div class="cart-item py-4 border-bottom border-dark d-flex align-items-center gap-4">
                            <div class="item-image" style="width: 100px;">
                                <img src="{{ item.featured_image | product_image_url('medium') }}" alt="{{ item.name }}" class="img-fluid border-gold">
                            </div>
                            <div class="item-details flex-grow-1">
                                <h4 style="font-size: 1.1rem; margin-bottom: 5px;">{{ item.name }}</h4>
                                {% if item.variant.name %}
                                    <p class="text-muted small">Tamanho: {{ item.variant.name }}</p>
                                {% endif %}
                                <p style="color: var(--gold); font-weight: 600;">{{ item.unit_price | money }}</p>
                            </div>
                            <div class="item-quantity d-flex align-items-center gap-2">
                                <span class="text-muted small">Qtd: {{ item.quantity }}</span>
                            </div>
                            <div class="item-total">
                                <p style="font-weight: 700;">{{ item.subtotal | money }}</p>
                            </div>
                            <div class="item-remove">
                                <a href="{{ item.remove_url }}" style="color: #666;"><i class="fa-solid fa-trash-can"></i></a>
                            </div>
                        </div>
                    {% endfor %}
                </div>
            </div>

            {# Resumo da Compra #}
            <div class="col-md-4">
                <div class="cart-summary p-4 bg-dark border border-gold rounded">
                    <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 25px; color: var(--gold);">Resumo do Pedido</h3>
                    
                    <div class="d-flex justify-content-between mb-3" style="color: #ccc;">
                        <span>Subtotal</span>
                        <span>{{ cart.total | money }}</span>
                    </div>
                    
                    <div class="d-flex justify-content-between mb-4 pb-4 border-bottom border-secondary">
                        <span>Frete</span>
                        <span class="text-success" style="font-size: 0.8rem;">Calculado no checkout</span>
                    </div>

                    <div class="d-flex justify-content-between mb-5" style="font-size: 1.2rem; font-weight: 700;">
                        <span>Total</span>
                        <span style="color: var(--gold);">{{ cart.total | money }}</span>
                    </div>

                    <a href="{{ store.checkout_url }}" class="btn btn-primary w-100 py-3 mb-3" style="font-size: 1.1rem; letter-spacing: 1px;">
                        FINALIZAR COMPRA
                    </a>
                    
                    <a href="{{ store.products_url }}" class="btn btn-outline-gold w-100" style="font-size: 0.8rem;">
                        CONTINUAR COMPRANDO
                    </a>
                </div>
            </div>
        </div>
    {% else %}
        <div class="text-center py-5">
            <i class="fa-solid fa-bag-shopping" style="font-size: 4rem; color: #333; margin-bottom: 20px;"></i>
            <h3>Sua sacola está vazia</h3>
            <p class="text-muted">Explore nossas coleções e encontre sua peça ideal.</p>
            <a href="{{ store.products_url }}" class="btn btn-primary mt-4">VER PRODUTOS</a>
        </div>
    {% endif %}
</div>
