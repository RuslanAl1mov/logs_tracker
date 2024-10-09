const API_BASE_URL = 'http://localhost:8000/api'; // Адрес сервера с API

// Получение списка логов
export const fetchLogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/logs/`);
    if (!response.ok) {
      throw new Error('Ошибка при получении списка логов');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Получение подробной информации о конкретном логе по ID
export const fetchLogById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/logs/${id}/`);
    if (!response.ok) {
      throw new Error(`Ошибка при получении лога с ID: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadLogs = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/upload/`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }

}


