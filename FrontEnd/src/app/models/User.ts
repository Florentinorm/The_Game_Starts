export interface User {
  id: number;
  nombre: string;
  apellidopaterno: string;
  apellidomaterno: string;
  email: string;
  password: string;
  idUsuario: number;
}

export interface UserResponse {
  message: string;
  token: string;
  code: number;
  idRol: number;
}

