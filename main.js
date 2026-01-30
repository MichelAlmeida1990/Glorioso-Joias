const products = {
    finas: [
        {
            name: "Corrente Piastrini Fina",
            price: 89.90,
            image: "assets/corrente_ponto_luz.webp",
            sizes: ["40cm", "45cm", "50cm"],
            thickness: "1mm"
        },
        {
            name: "Corrente Veneziana Delicada",
            price: 109.90,
            image: "assets/feminina/colar_delicado_v15.webp",
            sizes: ["40cm", "45cm", "50cm"],
            thickness: "1.2mm"
        },
        {
            name: "Corrente Elo Vazado Delicado",
            price: 119.90,
            image: "assets/corrente_elo_vazado.webp",
            sizes: ["45cm", "50cm", "55cm"],
            thickness: "2mm"
        }
    ],
    medias: [
        {
            name: "Corrente Grumet com Placa",
            price: 159.90,
            image: "assets/corrente_grumet.webp",
            sizes: ["50cm", "60cm", "70cm"],
            thickness: "3mm"
        },
        {
            name: "Corrente Elo Português",
            price: 189.90,
            image: "assets/corrente_elo_portugues.webp",
            sizes: ["50cm", "60cm", "70cm"],
            thickness: "4mm"
        },
        {
            name: "Corrente Cadeado",
            price: 219.90,
            image: "assets/corrente_cadeado.webp",
            sizes: ["50cm", "60cm", "70cm"],
            thickness: "5mm"
        }
    ],
    grossas: [
        {
            name: "Corrente Grumet Grossa",
            price: 289.90,
            image: "assets/corrente_grumet_grossa.webp",
            sizes: ["60cm", "70cm", "80cm"],
            thickness: "6mm"
        },
        {
            name: "Corrente Anker Robusta",
            price: 329.90,
            image: "assets/corrente_anker_robusta.webp",
            sizes: ["60cm", "70cm", "80cm"],
            thickness: "8mm"
        },
        {
            name: "Conjunto Cadeado Duplo com Cruz",
            price: 389.90,
            image: "assets/corrente_cadeado_duplo.webp",
            sizes: ["60cm", "70cm", "80cm"],
            thickness: "10mm"
        }
    ],
    feminina: [
        {
            name: "Colar Medalha Milagrosa",
            price: 189.90,
            image: "assets/feminina/colar_medalha_milagrosa_produto.webp",
            imageHover: "assets/feminina/colar_medalha_milagrosa_modelo.webp",
            sizes: ["45cm + 5cm extensor"],
            thickness: "Venaziana V15"
        },
        {
            name: "Colar Trevo Inspiração",
            price: 149.90,
            image: "assets/feminina/colar_trevo_produto.webp",
            imageHover: "assets/feminina/colar_trevo_modelo.webp",
            sizes: ["45cm"],
            thickness: "Elo Português"
        },
        {
            name: "Corrente Malha Serpente",
            price: 129.90,
            image: "assets/feminina/corrente_malha_serpente_produto.webp",
            imageHover: "assets/feminina/corrente_malha_serpente_modelo.webp",
            sizes: ["40cm", "45cm"],
            thickness: "3mm"
        },
        {
            name: "Conjunto Colar + Brincos Butterfly",
            price: 239.90,
            image: "assets/feminina/conjunto_colar_brincos_produto.webp",
            imageHover: "assets/feminina/conjunto_colar_brincos_modelo.webp",
            sizes: ["45cm"],
            thickness: "Delicado"
        },
        {
            name: "Anel Solitário Cravejado",
            price: 119.90,
            image: "assets/feminina/anel_solitario_produto.webp",
            imageHover: "assets/feminina/anel_solitario_modelo.webp",
            sizes: ["14", "16", "18", "20", "22"],
            thickness: "Aro Médio"
        },
        {
            name: "Pulseira Bolinhas Delicada",
            price: 99.90,
            image: "assets/feminina/pulseira_bolinhas_produto.webp",
            imageHover: "assets/feminina/pulseira_bolinhas_modelo.webp",
            sizes: ["18cm", "20cm"],
            thickness: "2mm"
        },
        {
            name: "Anel Aparador Meia Aliança",
            price: 159.90,
            image: "assets/feminina/anel_aparador_produto.webp",
            imageHover: "assets/feminina/anel_aparador_modelo.webp",
            sizes: ["16", "18", "20", "22"],
            thickness: "Zircônias"
        },
        {
            name: "Brinco Botão Zircônia Premium",
            price: 79.90,
            image: "assets/feminina/brinco_botao_produto.webp",
            imageHover: "assets/feminina/brinco_botao_modelo.webp",
            sizes: ["Único"],
        },
        {
            name: "Pingente Cruz Trabalhada",
            price: 69.90,
            image: "assets/feminina/pingente_cruz_produto.webp",
            imageHover: "assets/feminina/pingente_cruz_modelo.webp",
            sizes: ["Médio"],
            thickness: "-"
        },
        {
            name: "Anel Coração Vazado",
            price: 99.90,
            image: "assets/feminina/anel_coracao_produto.webp",
            imageHover: "assets/feminina/anel_coracao_modelo.webp",
            sizes: ["14", "16", "18"],
            thickness: "-"
        },
        {
            name: "Colar Mandala Fé",
            price: 139.90,
            image: "assets/feminina/colar_mandala_fe.webp",
            sizes: ["45cm"],
            thickness: "Fina"
        },
        {
            name: "Anel Zircônia Elegance",
            price: 129.90,
            image: "assets/feminina/anel_zirconia.webp",
            sizes: ["16", "18", "20"],
            thickness: "Fina"
        },
        {
            name: "Pendente Estrela Cadente",
            price: 89.90,
            image: "assets/feminina/pendente_estrela.webp",
            sizes: ["Único"],
        },
        {
            name: "Brinco Argola Clássica",
            price: 109.90,
            image: "assets/feminina/brinco_argola.webp",
            sizes: ["Média"],
        },
        {
            name: "Colar Gratidão",
            price: 149.90,
            image: "assets/feminina/colar_gratidao.webp",
            sizes: ["45cm"],
        },
        {
            name: "Anel Infinito",
            price: 99.90,
            image: "assets/feminina/anel_infinito.webp",
            sizes: ["16", "18", "20"],
        },
        {
            name: "Anel Cravejado Duplo",
            price: 169.90,
            image: "assets/feminina/anel_cravejado_duplo.webp",
            sizes: ["18", "20"],
        },
        {
            name: "Colar Ponto de Fé",
            price: 119.90,
            image: "assets/feminina/colar_ponto_fe.webp",
            sizes: ["45cm"],
        },
        {
            name: "Bracelete Torcido Luxo",
            price: 199.90,
            image: "assets/feminina/bracelete_torcido.webp",
            sizes: ["18cm"],
        },
        {
            name: "Conjunto Brilhante Veredas",
            price: 259.90,
            image: "assets/feminina/conjunto_brilhante.webp",
            sizes: ["45cm"],
        },
        {
            name: "Brinco Pérola Natural",
            price: 89.90,
            image: "assets/feminina/brinco_perola.webp",
            sizes: ["Pequeno"],
        },
        {
            name: "Conjunto Coração do Mar",
            price: 229.90,
            image: "assets/feminina/conjunto_coracao.webp",
            sizes: ["45cm"],
        },
        {
            name: "Pulseira Ouro 18k Gourmet",
            price: 179.90,
            image: "assets/feminina/pulseira_ouro_18k.webp",
            sizes: ["19cm"],
        },
        {
            name: "Gargantilha Luxo Real",
            price: 289.90,
            image: "assets/feminina/gargantilha_luxo.webp",
            sizes: ["42cm"],
        },
        {
            name: "Choker Malha Italiana",
            price: 159.90,
            image: "assets/feminina/choker_malha.webp",
            sizes: ["38cm"],
        },
        {
            name: "Anel Ajustável Moderno",
            price: 79.90,
            image: "assets/feminina/anel_ajustavel.webp",
            sizes: ["Ajustável"],
        },
        {
            name: "Anel Solitário Mini",
            price: 89.90,
            image: "assets/feminina/anel_solitario_mini.webp",
            sizes: ["14", "16"],
        },
        {
            name: "Pulseira Riviera Cristal",
            price: 189.90,
            image: "assets/feminina/pulseira_riviera.webp",
            sizes: ["18cm"],
            thickness: "3mm"
        }
    ],
    masculino: [
        {
            name: "Pulseira Infantil Menino",
            price: 79.90,
            image: "assets/feminina/pulseira_infantil_menino.webp",
            sizes: ["14cm", "16cm"],
            thickness: "2mm"
        },
        {
            name: "Escapulário Masculino Sagrado",
            price: 149.90,
            image: "assets/escapulario_masculino.webp",
            sizes: ["60cm"],
            thickness: "3mm"
        },
        {
            name: "Corrente Grumet Escurecida",
            price: 169.90,
            image: "assets/corrente_grumet.webp",
            sizes: ["60cm", "70cm"],
            thickness: "4mm"
        }
    ],
    kits: [
        {
            name: "Kit Personalizado Nome",
            price: 249.90,
            image: "assets/kit_nome.webp",
            sizes: ["45cm", "50cm"],
            thickness: "Especial"
        },
        {
            name: "Kit Cruz de Malta Premium",
            price: 199.90,
            image: "assets/kit_cruz.webp",
            sizes: ["60cm"],
            thickness: "3mm"
        },
        {
            name: "Conjunto Pérola Real",
            price: 219.90,
            image: "assets/feminina/conjunto_perola.webp",
            sizes: ["45cm"],
            thickness: "Premium"
        }
    ],
    pingentes: [
        {
            name: "Pingente Fé Banhado",
            price: 59.90,
            image: "assets/pingente_fe.webp",
            sizes: ["Único"],
            thickness: "Premium"
        },
        {
            name: "Escapulário Sagrado Prata/Ouro",
            price: 129.90,
            image: "assets/escapulario_sagrado.webp",
            sizes: ["60cm"],
            thickness: "Delicado"
        },
        {
            name: "Pingente Divino Espírito Santo",
            price: 79.90,
            image: "assets/feminina/pingente_divino.webp",
            imageHover: "assets/feminina/pingente_divino_detalhe.webp",
            sizes: ["Único"],
        }
    ]
};

function renderProductsByCategory(category, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid || !products[category]) return;

    grid.innerHTML = products[category].map(product => `
        <div class="product-card" data-category="${category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="img-front">
                ${product.imageHover ? `<img src="${product.imageHover}" alt="${product.name} Modelo" class="img-back">` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price-container">
                    <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <p class="product-installments">6x de R$ ${(product.price / 6).toFixed(2).replace('.', ',')} sem juros</p>
                <p class="product-sizes">Tamanhos: ${product.sizes.join(', ')}</p>
                <p class="product-thickness">Espessura: ${product.thickness || '-'}</p>
            </div>
            <div class="text-center" style="margin-top: 15px; padding-bottom: 20px;">
                <button class="btn btn-primary" style="padding: 8px 20px; font-size: 0.8rem;" onclick="addToCart('${product.name}', ${product.price})">Comprar</button>
            </div>
        </div>
    `).join('');
}

const categoryDescriptions = {
    finas: "Delicadeza e elegância para seu dia a dia.",
    medias: "O equilíbrio perfeito entre presença e sofisticação.",
    grossas: "Peças robustas para quem busca destaque e estilo.",
    feminina: "A beleza feminina realçada por joias exclusivas.",
    masculino: "Estilo e personalidade em peças masculinas selecionadas.",
    kits: "Conjuntos selecionados com descontos especiais.",
    pingentes: "O complemento ideal para sua corrente preferida."
};

function renderHomeHighlights() {
    const gridId = 'destaques-grid-home';
    const grid = document.getElementById(gridId);
    if (!grid) return;

    // Seleciona alguns produtos de diferentes categorias para os destaques
    const highlights = [
        { ...products.finas[0], category: 'finas' },
        { ...products.medias[0], category: 'medias' },
        { ...products.grossas[2], category: 'grossas' }, // Cadeado Duplo com Cruz
        { ...products.feminina[10], category: 'feminina' }, // Colar Mandala Fé
        { ...products.feminina[19], category: 'feminina' }, // Conjunto Brilhante
        { ...products.masculino[1], category: 'masculino' }  // Escapulário Masculino
    ];

    grid.innerHTML = highlights.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="img-front">
                ${product.imageHover ? `<img src="${product.imageHover}" alt="${product.name} Modelo" class="img-back">` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price-container">
                    <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <p class="product-installments">6x de R$ ${(product.price / 6).toFixed(2).replace('.', ',')} sem juros</p>
                <p class="product-sizes">Tamanhos: ${product.sizes.join(', ')}</p>
                <p class="product-thickness">Espessura: ${product.thickness || '-'}</p>
            </div>
            <div class="text-center" style="margin-top: 15px; padding-bottom: 20px;">
                <button class="btn btn-primary" style="padding: 8px 20px; font-size: 0.8rem;" onclick="addToCart('${product.name}', ${product.price})">Comprar</button>
            </div>
        </div>
    `).join('');
}

function renderAllProducts() {
    // Renderiza os destaques da Home se o elemento existir
    renderHomeHighlights();
    
    // Lógica para a página de produtos (products.html)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const gridId = 'category-products-grid';

    if (category && document.getElementById(gridId)) {
        // Atualiza Título e Descrição
        const titleEl = document.getElementById('category-title');
        const descEl = document.getElementById('category-description');
        
        const friendlyNames = {
            finas: "Correntes Finas",
            medias: "Correntes Médias",
            grossas: "Correntes Grossas",
            feminina: "Coleção Feminina",
            masculino: "Linha Masculina",
            kits: "Kits Especiais",
            pingentes: "Pingentes"
        };

        if (titleEl) titleEl.textContent = friendlyNames[category] || "Nossos Produtos";
        if (descEl) descEl.textContent = categoryDescriptions[category] || "Confira nossa seleção exclusiva.";
        
        renderProductsByCategory(category, gridId);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts();
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (header) header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            if (header) header.style.boxShadow = "none";
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // Cart Logic
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const toast = document.getElementById('toast');

    window.addToCart = function(productName, price) {
        cartCount++;
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        showToast(`${productName} adicionado ao carrinho!`);
    };

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.className = "toast show";
        setTimeout(() => { 
            toast.className = "toast"; 
        }, 3000);
    }

    // Newsletter Logic
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            if (emailInput && emailInput.value) {
                showToast("Obrigado por se cadastrar!");
                emailInput.value = '';
            }
        });
    }
});
