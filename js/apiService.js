// Servicio de API usando Axios para peticiones HTTP
import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'https://sppzbrmslxadplopnker.supabase.co/rest/v1',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcHpicm1zbHhhZHBsb3Bua2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NzQ4MDAsImV4cCI6MjA1MTU1MDgwMH0.8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcHpicm1zbHhhZHBsb3Bua2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NzQ4MDAsImV4cCI6MjA1MTU1MDgwMH0.8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q'
  }
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en petición HTTP:', error);
    return Promise.reject(error);
  }
);

// Servicios para vehículos
export const vehiculosService = {
  // Obtener todos los vehículos
  async getAll(query = '') {
    try {
      let url = '/vehiculos?select=*&order=created_at.desc&limit=500';
      
      if (query) {
        url = `/vehiculos?select=*&or=(marca.ilike.%${query}%,modelo.ilike.%${query}%)&order=created_at.desc&limit=500`;
      }
      
      const response = await api.get(url);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  },

  // Crear un nuevo vehículo
  async create(vehiculo) {
    try {
      const response = await api.post('/vehiculos', vehiculo);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  },

  // Eliminar un vehículo
  async delete(id) {
    try {
      const response = await api.delete(`/vehiculos?id=eq.${id}`);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  },

  // Obtener un vehículo por ID
  async getById(id) {
    try {
      const response = await api.get(`/vehiculos?select=*&id=eq.${id}`);
      return { data: response.data[0] || null, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  }
};

// Servicios para autenticación (usando Supabase Auth API)
export const authService = {
  // Registrar usuario
  async signUp(email, password) {
    try {
      const response = await api.post('/auth/v1/signup', {
        email,
        password
      });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  },

  // Iniciar sesión
  async signIn(email, password) {
    try {
      const response = await api.post('/auth/v1/token?grant_type=password', {
        email,
        password
      });
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  },

  // Cerrar sesión
  async signOut() {
    try {
      const response = await api.post('/auth/v1/logout');
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.response?.data || error.message };
    }
  }
};

// Función para obtener información de la API
export const getApiInfo = () => {
  return {
    baseURL: api.defaults.baseURL,
    timeout: api.defaults.timeout,
    headers: api.defaults.headers
  };
};

// Exportar la instancia de axios para uso directo si es necesario
export default api;
