<div class="container section-padding">
    <div class="search-header text-center mb-5">
        <h1 style="font-family: var(--font-heading); color: var(--gold);">Resultados de Busca</h1>
        <div class="divider mx-auto"></div>
        <p class="mt-3 text-muted">Você buscou por: <strong>"{{ last_search_query }}"</strong></p>
    </div>

    {% if products %}
        <div class="products-grid">
            {% for product in products %}
                {% include 'snipplets/product_grid.tpl' with {'product': product} %}
            {% endfor %}
        </div>
    {% else %}
        <div class="text-center py-5">
            <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 3rem; color: #333; margin-bottom: 20px;"></i>
            <h3>Nenhum produto encontrado</h3>
            <p>Tente buscar por termos mais genéricos como "corrente" ou "anel".</p>
            <a href="{{ store.url }}" class="btn btn-outline-gold mt-4">Voltar para a Home</a>
        </div>
    {% endif %}
</div>
