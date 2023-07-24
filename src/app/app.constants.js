export const HOST = import.meta.env.VITE_HOST;
export const PORT = import.meta.env.VITE_PORT;

export const apiUrl = `http://${HOST}${PORT ? ":" + PORT : ""}`;

export const DEFAULT_API_ERROR_MESSAGE = 'Не удалось получить данные';