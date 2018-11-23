export class Zapato {
	  id: number;
    colores: string[];
    modelo: string;
    album: string;
    description: string;
    detail: string[];
    price: number;
    categorias: string[];
    properties: {
        piel: string,
        forro: string,
        suela: string,
        tallas: string[],
    };
}
