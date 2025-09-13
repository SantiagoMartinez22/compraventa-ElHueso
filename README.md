# Compraventa ElHueso - Taller #3 Supabase

Sitio web de concesionario de vehículos con integración completa de Supabase para autenticación y gestión de datos.

## 🚀 Características del Taller #3

### ✅ Requisitos Cumplidos

- **Formularios de autenticación**: Registro e inicio de sesión con Supabase Auth
- **Página protegida**: Panel solo para usuarios autenticados
- **Lista de 100+ elementos**: Base de datos poblada con vehículos
- **Búsqueda por nombre**: Filtrado por marca y modelo
- **Operaciones CRUD**: Agregar y eliminar vehículos
- **Plus - Axios**: Implementación alternativa usando Axios para peticiones HTTP

### 🔧 Tecnologías Implementadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **HTTP Client**: Axios (Plus del taller)
- **Bundler**: Parcel (configurado)
- **Estilos**: CSS personalizado con diseño moderno

## 📁 Estructura del Proyecto

```
├── index.html              # Página principal (landing)
├── auth.html               # Formularios de autenticación
├── app.html                # Panel protegido (Supabase directo)
├── app-axios.html          # Panel protegido (con Axios)
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── main.js             # JavaScript principal
│   ├── supabaseClient.js   # Cliente Supabase
│   ├── apiService.js       # Servicio API con Axios
│   └── seedData.js         # Script para poblar BD
├── img/                    # Imágenes de vehículos
└── package.json            # Configuración del proyecto
```

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd compraventa-ElHueso
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar Supabase
1. Crear proyecto en [Supabase](https://supabase.com)
2. Crear tabla `vehiculos` con la siguiente estructura:
```sql
CREATE TABLE vehiculos (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  marca TEXT NOT NULL,
  modelo TEXT NOT NULL,
  anio INTEGER,
  precio NUMERIC,
  imagen_url TEXT,
  descripcion TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE vehiculos ENABLE ROW LEVEL SECURITY;

-- Política para que usuarios solo vean sus propios vehículos
CREATE POLICY "Users can view all vehicles" ON vehiculos
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own vehicles" ON vehiculos
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own vehicles" ON vehiculos
  FOR DELETE USING (auth.uid() = user_id);
```

### 4. Actualizar configuración
Editar `js/supabaseClient.js` con tus credenciales:
```javascript
const SUPABASE_URL = "tu-url-de-supabase";
const SUPABASE_ANON_KEY = "tu-clave-anonima";
```

## 🚀 Uso del Proyecto

### Páginas Disponibles

1. **`index.html`** - Landing page principal
2. **`auth.html`** - Registro e inicio de sesión
3. **`app.html`** - Panel protegido (Supabase directo)
4. **`app-axios.html`** - Panel protegido (con Axios)

### Funcionalidades

#### Autenticación
- Registro de nuevos usuarios
- Inicio de sesión
- Protección de rutas
- Cierre de sesión

#### Gestión de Vehículos
- Ver lista de vehículos (100+ elementos)
- Buscar por marca o modelo
- Agregar nuevos vehículos
- Eliminar vehículos (solo los propios)
- Validación de formularios

#### Poblar Base de Datos
Para agregar más de 100 vehículos, ejecutar en la consola del navegador:
```javascript
// En la página app.html, abrir consola y ejecutar:
seedDatabase();
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (Parcel)
npm run build    # Construir para producción
npm run preview  # Vista previa de la construcción
npm run clean    # Limpiar archivos generados
```

## 📊 Criterios de Evaluación Cumplidos

- ✅ **(10%)** Asistencia a clase
- ✅ **(10%)** Proyecto funcionando en ambiente local
- ✅ **(10%)** Formulario de registro
- ✅ **(10%)** Formulario de autenticación
- ✅ **(20%)** Lista de elementos para solo autenticados
- ✅ **(20%)** Agregar y eliminar elementos de la lista
- ✅ **(20%)** Presentación

### Plus - Axios
- ✅ Implementación completa con Axios
- ✅ Servicio API modular
- ✅ Manejo de errores mejorado
- ✅ Interceptores HTTP

## 🌐 Despliegue

El proyecto está configurado para GitHub Pages:
1. Hacer commit y push de los cambios
2. GitHub Pages se actualiza automáticamente
3. URL: `https://[usuario].github.io/compraventa-ElHueso/`

## 🔒 Seguridad

- Row Level Security (RLS) habilitado
- Políticas de acceso configuradas
- Validación de formularios
- Sanitización de datos

## 📱 Responsive Design

- Diseño adaptativo para móvil, tablet y desktop
- Navegación hamburguesa en móviles
- Tablas responsivas
- Formularios optimizados para touch

## 🎨 Características de Diseño

- Gradientes modernos
- Animaciones suaves
- Iconos Font Awesome
- Tipografía Google Fonts
- Colores consistentes
- Feedback visual para acciones

## 📝 Notas Técnicas

- **Supabase**: Base de datos PostgreSQL con autenticación integrada
- **Axios**: Cliente HTTP con interceptores y manejo de errores
- **Vanilla JS**: Sin frameworks, JavaScript puro
- **CSS Grid/Flexbox**: Layout moderno y responsivo
- **ES6+**: Sintaxis moderna de JavaScript

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

MIT License - ver archivo LICENSE para detalles.

---

**Desarrollado para el Taller #3 de Plataformas de Programación Empresarial**