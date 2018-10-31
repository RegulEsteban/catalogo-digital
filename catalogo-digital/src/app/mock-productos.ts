import { Productos } from './productos';

export const PRODUCTOS: Productos[] = [{
	url: 'dolancy',
	lista: [{ 
	    id: 1, 
	    color: 'Mr. Nice',
	    modelo: '040 Negro',
	    album: '/assets/images/catalogo/040-negro',
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
	    album: '/assets/images/catalogo/097-miel',
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
	    album: '/assets/images/catalogo/097-negro',
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
}];