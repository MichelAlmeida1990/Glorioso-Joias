<div class="container section-padding">
    <div class="category-header text-center mb-5">
        <h1 style="font-family: var(--font-heading); color: var(--gold);">{{ category.name }}</h1>
        <div class="divider mx-auto"></div>
        {% if category.description %}
            <p class="mt-3 text-muted">{{ category.description }}</p>
        {% endif %}
    </div>

    <div class="row">
        {# Sidebar Filtros (Opcional) #}
        <aside class="col-md-3 d-none d-md-block">
            <h4 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 20px;">Filtrar por</h4>
            <div class="filter-group mb-4">
                <p class="font-weight-bold">Categorias</p>
                <ul class="list-unstyled">
                    {% for cat in categories %}
                        <li><a href="{{ cat.url }}" style="color: #999; text-decoration: none;">{{ cat.name }}</a></li>
                    {% endfor %}
                </ul>
            </div>
        </aside>

        {# Grid de Produtos #}
        <div class="col-md-9">
            <div class="products-grid">
                {% for product in products %}
                    {% include 'snipplets/product_grid.tpl' with {'product': product} %}
                {% else %}
                    <p class="text-center w-100">Nenhum produto encontrado nesta categoria.</p>
                {% endfor %}
            </div>

            {# Paginação #}
            {% if pages.total > 1 %}
                <div class="pagination mt-5 d-flex justify-content-center gap-3">
                    {% if pages.previous %}
                        <a href="{{ pages.previous.url }}" class="btn btn-outline-gold"><i class="fa-solid fa-chevron-left"></i> Anterior</a>
                    {% endif %}
                    
                    <span class="active-page p-2">{{ pages.current }} / {{ pages.total }}</span>

                    {% if pages.next %}
                        <a href="{{ pages.next.url }}" class="btn btn-outline-gold">Próximo <i class="fa-solid fa-chevron-right"></i></a>
                    {% endif %}
                </div>
            {% endif %}
        </div>
    </div>
</div>
