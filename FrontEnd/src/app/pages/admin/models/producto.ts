export interface Producto {
    id_producto?: number;
    nomProducto?: string;
    desProducto?: string;
    cantidad?: number;
    precio?: number;
    id_usuario?: number;
    id_Estatus?: number;
    id_catProducto?: number;
    imgProducto?: Blob;
}
export interface ProductoID {
    idPro: number;
    nomPro: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    idEstatus: number;
    estatus: string;
    idCatPro: number;
    nomCat: string;
    idUsuario: number;
}