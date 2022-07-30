export interface Producto {
    idPro: number;
    nomPro: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    idEstatus: number;
    idCatPro: number;
    idUsuario: number;
    imgProducto: Blob;
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