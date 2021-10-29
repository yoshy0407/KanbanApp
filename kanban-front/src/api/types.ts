export interface Error {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  errors: Error[];
  res: T[];
}
