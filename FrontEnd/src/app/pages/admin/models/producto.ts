export interface Producto {
    id_producto?: number;
    nomProducto?: string;
    desProducto?: string;
    cantidad?: number;
    precio?: number;
    id_usuario?: number;
    id_Estatus?: number;
    id_catProducto?: number;
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
export interface Categoria{
    id_catProducto?: number;
    nomCategoria?: string;
}