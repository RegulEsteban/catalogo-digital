import { Productos } from './productos';

export const PRODUCTOS: Productos[] = [
  {
    url: 'charlie',
    lista: [{
      id: 1,
      colores: ['Negro','Café'],
      modelo: '040 Negro',
      album: '/assets/images/galerias/galeria-charlie/08negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
      price: 455.00,
      categorias: ['damas'],
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: ['25', '25.5', '26']
      }
    }/*,{
      id: 2,
      color: 'Miel',
      modelo: '097 Miel',
      album: '/assets/images/galerias/galeria-charlie/135negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 3,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/202negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 4,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/203cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 5,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/205cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 6,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/206cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 7,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/207cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 8,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/705negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 9,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/710miel',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 10,
      color: 'Negro',
      modelo: '097 Negro',
      album: '/assets/images/galerias/galeria-charlie/710negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    }]
  },
  {
	url: 'dolancy',
	lista: [{ 
	    id: 1, 
	    color: 'Mr. Nice',
	    modelo: '040 Charol',
	    album: '/assets/images/galerias/galeria-dolancy/040charol',
	    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
	    description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
	    price: 455.00,
	    properties: {
	        piel: 'Ternera',
	        forro: 'Flor de cerdo',
	        suela: '100% cuero',
	        tallas: '25 al 29'
	    }
	},{ 
	    id: 2, 
	    color: 'Miel',
	    modelo: '040 Negro',
    album: '/assets/images/galerias/galeria-dolancy/040negro',
	    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
	    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
	    price: 470.00,
	    properties: {
	        piel: 'Ternera',
	        forro: 'Flor de cerdo',
	        suela: '100% cuero',
	        tallas: '25 al 29'
	    }
	},{ 
	    id: 3, 
	    color: 'Negro',
	    modelo: '097 Gris',
    album: '/assets/images/galerias/galeria-dolancy/097gris-t',
	    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
	    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
	    price: 470.00,
	    properties: {
	        piel: 'Ternera',
	        forro: 'Flor de cerdo',
	        suela: '100% cuero',
	        tallas: '25 al 29'
	    }
	},{
    id: 4,
    color: 'Negro',
    modelo: '097 Miel',
    album: '/assets/images/galerias/galeria-dolancy/097miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 5,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-dolancy/097negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 6,
    color: 'Negro',
    modelo: '210 Negro',
    album: '/assets/images/galerias/galeria-dolancy/210negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 7,
    color: 'Negro',
    modelo: '210 Miel',
    album: '/assets/images/galerias/galeria-dolancy/210miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 8,
    color: 'Negro',
    modelo: '221 Miel',
    album: '/assets/images/galerias/galeria-dolancy/221miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 9,
    color: 'Negro',
    modelo: '221 Negro',
    album: '/assets/images/galerias/galeria-dolancy/221negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 10,
    color: 'Negro',
    modelo: '221 Negro',
    album: '/assets/images/galerias/galeria-dolancy/221negro-sn',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 11,
    color: 'Negro',
    modelo: '950 Miel',
    album: '/assets/images/galerias/galeria-dolancy/950miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 12,
    color: 'Negro',
    modelo: '950 Negro',
    album: '/assets/images/galerias/galeria-dolancy/950negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 13,
    color: 'Negro',
    modelo: '960 Azul/Miel',
    album: '/assets/images/galerias/galeria-dolancy/960azul-miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 14,
    color: 'Negro',
    modelo: '960 Negro/Gris',
    album: '/assets/images/galerias/galeria-dolancy/960negro-gris',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  }]
},
  {
  url: 'gian-carlo',
  lista: [{
    id: 1,
    color: 'Mr. Nice',
    modelo: '040 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/202negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
    price: 455.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 2,
    color: 'Miel',
    modelo: '097 Miel',
    album: '/assets/images/galerias/galeria-gian-carlo/254cafe',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 3,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/270negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 4,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/271miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 5,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/293miel',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 6,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/295cafe',
    detail: ['1.jpg', '2.jpg', '3.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 7,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/614negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 8,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/615negro',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  },{
    id: 9,
    color: 'Negro',
    modelo: '097 Negro',
    album: '/assets/images/galerias/galeria-gian-carlo/616cafe',
    detail: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
    price: 470.00,
    properties: {
      piel: 'Ternera',
      forro: 'Flor de cerdo',
      suela: '100% cuero',
      tallas: '25 al 29'
    }
  }]
},
  {
    url: 'hnos-perez',
    lista: [{
      id: 1,
      color: 'Mr. Nice',
      modelo: '014 Café',
      album: '/assets/images/galerias/galeria-hnos-perez/014cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
      price: 455.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 2,
      color: 'Miel',
      modelo: '025 Café',
      album: '/assets/images/galerias/galeria-hnos-perez/025cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 3,
      color: 'Negro',
      modelo: '076 Cereza',
      album: '/assets/images/galerias/galeria-hnos-perez/076cereza',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 4,
      color: 'Negro',
      modelo: '406 Negro',
      album: '/assets/images/galerias/galeria-hnos-perez/406negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 5,
      color: 'Negro',
      modelo: '410 Negro',
      album: '/assets/images/galerias/galeria-hnos-perez/410negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 6,
      color: 'Negro',
      modelo: '709 Café',
      album: '/assets/images/galerias/galeria-hnos-perez/709cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 7,
      color: 'Negro',
      modelo: '712 Café',
      album: '/assets/images/galerias/galeria-hnos-perez/712cafe',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 8,
      color: 'Negro',
      modelo: '803 Marrón',
      album: '/assets/images/galerias/galeria-hnos-perez/803marron',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 9,
      color: 'Negro',
      modelo: '807 Negro',
      album: '/assets/images/galerias/galeria-hnos-perez/807negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 10,
      color: 'Negro',
      modelo: 'Karla',
      album: '/assets/images/galerias/galeria-hnos-perez/Karla',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    }]
  },
  {
    url: 'jimmy',
    lista: [{
      id: 1,
      color: 'Mr. Nice',
      modelo: 'Betsy',
      album: '/assets/images/galerias/galeria-jimmy/betsy',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
      price: 455.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 2,
      color: 'Miel',
      modelo: 'chanel',
      album: '/assets/images/galerias/galeria-jimmy/chanel',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 3,
      color: 'Negro',
      modelo: 'Livia',
      album: '/assets/images/galerias/galeria-jimmy/livia',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 4,
      color: 'Negro',
      modelo: 'Matilda',
      album: '/assets/images/galerias/galeria-jimmy/matilda',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 5,
      color: 'Negro',
      modelo: 'Melitza',
      album: '/assets/images/galerias/galeria-jimmy/melitza',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 6,
      color: 'Negro',
      modelo: 'Ozono',
      album: '/assets/images/galerias/galeria-jimmy/ozono',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 7,
      color: 'Negro',
      modelo: 'Renata',
      album: '/assets/images/galerias/galeria-jimmy/renata',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 8,
      color: 'Negro',
      modelo: 'Rossy',
      album: '/assets/images/galerias/galeria-jimmy/rossy',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 9,
      color: 'Negro',
      modelo: 'Sofía',
      album: '/assets/images/galerias/galeria-jimmy/sofia',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 10,
      color: 'Negro',
      modelo: 'Yadhira',
      album: '/assets/images/galerias/galeria-jimmy/yadhira',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    }]
  },
  {
    url: 'romers',
    lista: [{
      id: 1,
      color: 'Mr. Nice',
      modelo: '050 Negro',
      album: '/assets/images/galerias/galeria-romers/050negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
      price: 455.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 2,
      color: 'Miel',
      modelo: '105 - D',
      album: '/assets/images/galerias/galeria-romers/105-d',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 3,
      color: 'Negro',
      modelo: '164 Negro',
      album: '/assets/images/galerias/galeria-romers/164negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 4,
      color: 'Negro',
      modelo: '610 Negro',
      album: '/assets/images/galerias/galeria-romers/610negro',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 5,
      color: 'Negro',
      modelo: '765 Charol',
      album: '/assets/images/galerias/galeria-romers/765charol',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 6,
      color: 'Negro',
      modelo: 'Anel',
      album: '/assets/images/galerias/galeria-romers/anel',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 7,
      color: 'Negro',
      modelo: 'Belem',
      album: '/assets/images/galerias/galeria-romers/belem',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 8,
      color: 'Negro',
      modelo: 'Kali',
      album: '/assets/images/galerias/galeria-romers/kali',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 9,
      color: 'Negro',
      modelo: 'Mela',
      album: '/assets/images/galerias/galeria-romers/mela',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    },{
      id: 10,
      color: 'Negro',
      modelo: 'Tin Tin - C',
      album: '/assets/images/galerias/galeria-romers/tin-tin-c',
      detail: ['1.jpg', '2.jpg', '3.jpg'],
      description: 'Estos zapatos pueden acompañar perfectamente a un traje en la oficina como también a un atuendo de lo más casual.',
      price: 470.00,
      properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
      }
    }*/]
  }
];
