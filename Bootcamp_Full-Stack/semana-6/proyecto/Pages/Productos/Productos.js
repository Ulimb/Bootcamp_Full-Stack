// productos.js

const productosPorCategoria = {
    Carnes: [
        {
            nombre: 'Chorizo parrillero x KG',
            descripcion: [
                'Chorizo colorado de ternera.',
                'El peso puede variar ligeramente.'
            ],
            precio: 5000,
            imagen: '../../imagenes/categorías/carnes/chorizos.jpg',
            descuento: 25
        },
        {
            nombre: 'Lomo x KG',
            descripcion: [
                'Lomo de ternera.',
                'El peso puede variar ligeramente.'
            ],
            precio: 8500,
            imagen: '../../imagenes/categorías/carnes/lomo.jpg',
            descuento: 0
        },
        {
            nombre: 'Milanesas de pollo x KG',
            descripcion: [
                'Milanesas de carne de pechuga de pollo.',
                'El peso puede variar ligeramente.'
            ],
            precio: 6000,
            imagen: '../../imagenes/categorías/carnes/milanesas.jpg',
            descuento: 0
        }, 
        {
            nombre: 'Carne picada común x KG',
            descripcion: [
                'Carne picada con alto contenido de grasa.',
                'El peso puede variar ligeramente.'
            ],
            precio: 4000,
            imagen: '../../imagenes/categorías/carnes/picada.jpg',
            descuento: 0
        }
    ],
    Gaseosas: [
        {
            nombre: 'Coca Cola',
            descripcion: ['Gaseosa con azucar.', 'Botella de 1 litro.'],
            precio: 2300,
            imagen: '../../imagenes/categorías/gaseosas/cocacola.jpg',
            descuento: 10
        },
        {
            nombre: 'SevenUp',
            descripcion: ['Gaseosa con azucar.', 'Botella de 1 litro.'],
            precio: 2300,
            imagen: '../../imagenes/categorías/gaseosas/7up.jpg',
            descuento: 0
        },
        {
            nombre: 'Fanta',
            descripcion: ['Gaseosa con azucar.', 'Botella de 1 litro.'],
            precio: 2000,
            imagen: '../../imagenes/categorías/gaseosas/fanta.jpg',
            descuento: 0
        },
        {
            nombre: 'Pomelo',
            descripcion: ['Cunnington Clasia.', 'Botella de 1 litro.'],
            precio: 1800,
            imagen: '../../imagenes/categorías/gaseosas/pomelo.jpg',
            descuento: 0
        }

    ], Lacteos: [
        {
            nombre: 'Crema de Leche',
            descripcion: ['La Paulina', 'Contiene 350cc'],
            precio: 1500,
            imagen: '../../imagenes/categorías/lacteos/crema.jpg',
            descuento: 0
        },
        {
            nombre: 'Leche',
            descripcion: ['Leche Fresca.', 'Sache de 1 litro.'],
            precio: 1300,
            imagen: '../../imagenes/categorías/lacteos/leche.jpg',
            descuento: 0
        },
        {
            nombre: 'Manteca',
            descripcion: ['Manteca SarCor', 'Contiene 200g'],
            precio: 3000,
            imagen: '../../imagenes/categorías/lacteos/manteca.jpg',
            descuento: 20
        },
        {
            nombre: 'Quesardo',
            descripcion: ['EL QUESO', 'El mejor queso del barrio'],
            precio: 1000,
            imagen: '../../imagenes/categorías/lacteos/quesosardo.jpg',
            descuento: 0
        }
    ], Limpieza: [
        {
            nombre: 'Desinfectante',
            descripcion: ['Desinfectante Poett', 'Botella de 900ml'],
            precio: 2500,
            imagen: '../../imagenes/categorías/limpieza/desinfectante.jpg',
            descuento: 30
        },
        {
            nombre: 'Detergente',
            descripcion: ['Detergente Cif', 'Botella de 500ml.'],
            precio: 2300,
            imagen: '../../imagenes/categorías/limpieza/detergente.jpg',
            descuento: 0
        },
        {
            nombre: 'Esponja',
            descripcion: ['Esponja Clasica', 'Sirve como ¡¡¡ESPONJA!!!'],
            precio: 3000,
            imagen: '../../imagenes/categorías/limpieza/esponja.jpg',
            descuento: 0
        },
        {
            nombre: 'Lavandina',
            descripcion: ['Agua Lavandina comun ', 'Botella de 1 litro'],
            precio: 1000,
            imagen: '../../imagenes/categorías/limpieza/lavandina.jpg',
            descuento: 0
        }
    ],Verduleria: [
        {
            nombre: 'Banana x KG',
            descripcion: ['Banana 🐒', 'El peso puede variar ligeramente'],
            precio: 1200,
            imagen: '../../imagenes/categorías/verduleria/banana.jpg',
            descuento: 0
        },
        {
            nombre: 'Cebolla x KG',
            descripcion: ['Cebolla Comun 🧅', 'El peso puede variar ligeramente.'],
            precio: 1500,
            imagen: '../../imagenes/categorías/verduleria/cebolla.jpg',
            descuento: 25
        },
        {
            nombre: 'Manzana x KG',
            descripcion: ['Manzana roja 🍎', 'El peso puede variar ligeramente.'],
            precio: 1000,
            imagen: '../../imagenes/categorías/verduleria/manzana.jpg',
            descuento: 0
        },
        {
            nombre: 'Papa x Kg',
            descripcion: ['Papa comun 🥔', 'El peso puede variar ligeramente'],
            precio: 1000,
            imagen: '../../imagenes/categorías/verduleria/papa.jpg',
            descuento: 0
        }
    ],
    Vinos: [
        {
            nombre: 'Helechos',
            descripcion: ['Los Helechos', 'Soy una planta 🌿'],
            precio: 1200,
            imagen: '../../imagenes/categorías/vinos/helechos.jpg',
            descuento: 0
        },
        {
            nombre: 'Magnolia',
            descripcion: ['Vino tinto Cabernet Sauvignon.', 'Reserva 2021. Origen Mendoza'],
            precio: 6000,
            imagen: '../../imagenes/categorías/vinos/magnolia.jpg',
            descuento: 15
        },
        {
            nombre: 'Nobles',
            descripcion: ['Los Nobles', 'Soy Noble'],
            precio: 7000,
            imagen: '../../imagenes/categorías/vinos/nobles.jpg',
            descuento: 0
        },
        {
            nombre: 'Terrazas',
            descripcion: ['Terrazas', 'Estoy arriba de tu edificio'],
            precio: 3000,
            imagen: '../../imagenes/categorías/vinos/terrazas.jpg',
            descuento: 0
        }
    ], Ofertas: [
        {
            nombre: 'Chorizo parrillero x KG',
            descripcion: [
                'Chorizo colorado de ternera.',
                'El peso puede variar ligeramente.'
            ],
            precio: 5000,
            imagen: '../../imagenes/categorías/carnes/chorizos.jpg',
            descuento: 25
        },
        {
            nombre: 'Coca Cola',
            descripcion: ['Gaseosa con azucar.', 'Botella de 1 litro.'],
            precio: 2300,
            imagen: '../../imagenes/categorías/gaseosas/cocacola.jpg',
            descuento: 10
        },
        {
            nombre: 'Manteca',
            descripcion: ['Manteca SarCor', 'Contiene 200g'],
            precio: 3000,
            imagen: '../../imagenes/categorías/lacteos/manteca.jpg',
            descuento: 20
        },
        {
            nombre: 'Desinfectante',
            descripcion: ['Desinfectante Poett', 'Botella de 900ml'],
            precio: 2500,
            imagen: '../../imagenes/categorías/limpieza/desinfectante.jpg',
            descuento: 30
        }, 
        {
            nombre: 'Cebolla x KG',
            descripcion: ['Cebolla Comun 🧅', 'El peso puede variar ligeramente.'],
            precio: 1500,
            imagen: '../../imagenes/categorías/verduleria/cebolla.jpg',
            descuento: 25
        },
        {
            nombre: 'Magnolia',
            descripcion: ['Vino tinto Cabernet Sauvignon.', 'Reserva 2021. Origen Mendoza'],
            precio: 6000,
            imagen: '../../imagenes/categorías/vinos/magnolia.jpg',
            descuento: 15
        },
    ]


};
