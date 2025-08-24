# 🚀 Guía de Deployment - GitHub Pages

## 📋 Configuración Actual

### ✅ **Estado del Proyecto**
- **Bundle**: Parcel 2.12 configurado ✅
- **Build optimizado**: dist/ con assets minificados ✅
- **GitHub Actions**: Workflow automatizado ✅
- **Rutas relativas**: Configuradas para GitHub Pages ✅

## 🔧 **Configuración de GitHub Pages**

### **1. Habilitar GitHub Pages en tu Repositorio**

1. **Ve a Settings** en tu repositorio de GitHub
2. **Scroll down** hasta la sección "Pages"
3. **Selecciona Source**: "GitHub Actions"
4. **Save** la configuración

### **2. Verificar Configuración del Workflow**

El archivo `.github/workflows/deploy.yml` está configurado para:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]  # Se ejecuta al push a main
  workflow_dispatch:      # También se puede ejecutar manualmente

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout del código
      - Setup Node.js 18
      - Instalar dependencias (npm ci)
      - Build del proyecto (npm run build)
      - Upload de la carpeta dist/
      - Deploy a GitHub Pages
```

### **3. Scripts de Build Configurados**

```json
{
  "scripts": {
    "build": "parcel build src/index.html --dist-dir dist --public-url ./",
    "build:gh-pages": "parcel build src/index.html --dist-dir dist --public-url ./"
  }
}
```

**Nota**: `--public-url ./` es crucial para que las rutas funcionen en GitHub Pages.

## 🚀 **Proceso de Deployment**

### **Automático (Recomendado)**

1. **Haz push a la rama main**:
   ```bash
   git add .
   git commit -m "feat: deploy to GitHub Pages"
   git push origin main
   ```

2. **El workflow se ejecutará automáticamente**:
   - ✅ Instala Node.js 18
   - ✅ Instala dependencias
   - ✅ Ejecuta `npm run build`
   - ✅ Sube la carpeta `dist/` a GitHub Pages
   - ✅ Despliega el sitio

3. **Tu sitio estará disponible en**:
   ```
   https://[tu-usuario].github.io/[nombre-repositorio]/
   ```

### **Manual (Alternativo)**

1. **Ejecuta el build localmente**:
   ```bash
   npm run build
   ```

2. **Ve a Actions** en GitHub y ejecuta el workflow manualmente
   - Click en "Deploy to GitHub Pages"
   - Click en "Run workflow"
   - Selecciona la rama "main"
   - Click en "Run workflow"

## 📊 **Verificación del Deployment**

### **✅ Checklist de Verificación**

- [ ] **GitHub Actions ejecutándose sin errores**
- [ ] **Build completado exitosamente** (tiempo: ~1-2 minutos)
- [ ] **Sitio accesible** en la URL de GitHub Pages
- [ ] **Imágenes cargando correctamente**
- [ ] **CSS y JavaScript funcionando**
- [ ] **Carrusel y modales operativos**
- [ ] **Responsive design funcionando**

### **🔍 Debugging de Problemas Comunes**

#### **1. Build Fallando**
```bash
# Error en GitHub Actions
Error: Process completed with exit code 1

# Solución: Verificar build local
npm run build
# Si falla localmente, arreglar errores primero
```

#### **2. Assets No Cargan**
```bash
# Problema: Rutas absolutas en lugar de relativas
# Verificar en package.json:
"build": "... --public-url ./"  ✅
"build": "... --public-url /"   ❌
```

#### **3. Página 404**
- Verificar que GitHub Pages esté habilitado
- Confirmar que el workflow se ejecutó exitosamente
- Esperar 5-10 minutos para propagación

#### **4. CSS/JS No Funciona**
- Verificar que `dist/` contenga todos los archivos
- Comprobar que las rutas en HTML sean relativas
- Revisar la consola del navegador para errores

## 📈 **Optimizaciones para Producción**

### **🚀 Performance**
El build actual genera:
```
dist/index.html                    24.23 kB
dist/compraventa-ElHueso.css       27.65 kB (minificado)
dist/compraventa-ElHueso.js         4.46 kB (minificado)
dist/[imágenes optimizadas]        47.14 kB total
```

### **🔧 Optimizaciones Adicionales**

1. **Comprimir imágenes adicional**:
   ```bash
   # Opcional: usar imagemin para mayor compresión
   npm install --save-dev imagemin-cli
   ```

2. **Habilitar Gzip** (GitHub Pages lo hace automáticamente)

3. **Service Worker** (para cache offline):
   ```bash
   # Futuro: implementar PWA
   npm install --save-dev workbox-cli
   ```

## 🔄 **Workflow Completo de Desarrollo**

### **Desarrollo Local**
```bash
# 1. Desarrollar localmente
npm run dev

# 2. Probar build local
npm run build
npm run preview

# 3. Commit y push
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# 4. GitHub Actions despliega automáticamente
```

### **Estructura de Archivos Desplegados**
```
dist/ (GitHub Pages root)
├── index.html (24.23 kB)
├── compraventa-ElHueso.[hash].css (27.65 kB)
├── compraventa-ElHueso.[hash].js (4.46 kB)
├── corolla.[hash].jpeg (6.66 kB)
├── crv.[hash].jpeg (9.33 kB)
├── spark.[hash].jpeg (8.37 kB)
├── altima.[hash].jpeg (7.96 kB)
├── cx5.[hash].jpeg (10.71 kB)
└── 340.[hash].jpeg (4.11 kB)
```

## 🌐 **URLs y Acceso**

### **URL Principal**
```
https://[tu-usuario].github.io/compraventa-ElHueso/
```

### **URLs de Assets (con hash para cache)**
```
https://[tu-usuario].github.io/compraventa-ElHueso/compraventa-ElHueso.9ad6f3af.css
https://[tu-usuario].github.io/compraventa-ElHueso/compraventa-ElHueso.17e2673d.js
https://[tu-usuario].github.io/compraventa-ElHueso/corolla.5403fc00.jpeg
```

## 📱 **Testing del Sitio Desplegado**

### **✅ Funcionalidades a Probar**

1. **Navegación**:
   - [ ] Header fijo funcionando
   - [ ] Menú hamburguesa en móvil
   - [ ] Navegación suave entre secciones

2. **Carrusel**:
   - [ ] Flechas cambian slides
   - [ ] Dots funcionan correctamente
   - [ ] Auto-slide cada 5 segundos
   - [ ] Botones de acción navegan a secciones

3. **Galería de Vehículos**:
   - [ ] Todas las imágenes cargan
   - [ ] Filtros por categoría funcionan
   - [ ] Modales se abren correctamente
   - [ ] Hover effects activos

4. **Formulario**:
   - [ ] Validación HTML5 funciona
   - [ ] Estilos de focus aplicados
   - [ ] Botón de envío responde

5. **Responsive**:
   - [ ] Móvil (320px+)
   - [ ] Tablet (768px+)
   - [ ] Desktop (1024px+)

## 🚨 **Troubleshooting**

### **GitHub Actions Failing**

1. **Verificar logs** en la pestaña "Actions"
2. **Errores comunes**:
   ```bash
   # Node version incompatible
   Error: The engine "node" is incompatible
   # Solución: Verificar node-version en workflow
   
   # Dependencias faltantes
   npm ERR! missing script: build
   # Solución: Verificar package.json
   
   # Build failing
   Build failed with exit code 1
   # Solución: npm run build localmente para debug
   ```

### **Sitio No Accesible**

1. **Verificar GitHub Pages settings**
2. **Confirmar workflow exitoso**
3. **Esperar propagación DNS** (5-10 minutos)
4. **Limpiar cache del navegador**

### **Assets 404**

1. **Verificar rutas relativas** en el build
2. **Comprobar --public-url ./** en package.json
3. **Revisar estructura de dist/**

## 🎯 **Próximos Pasos**

### **Inmediatos**
1. ✅ Configurar GitHub Pages
2. ✅ Hacer push para trigger deployment
3. ✅ Verificar sitio funcionando

### **Futuras Mejoras**
1. 🔄 **Custom domain** (opcional)
2. 🔒 **HTTPS enforcement** (automático en GitHub Pages)
3. 📊 **Analytics** (Google Analytics)
4. 🚀 **PWA features** (Service Worker)
5. 🔍 **SEO optimization** (meta tags, sitemap)

---

## 📞 **Soporte**

Si tienes problemas con el deployment:

1. **Revisa los logs** en GitHub Actions
2. **Verifica el build local** con `npm run build`
3. **Comprueba la configuración** de GitHub Pages
4. **Consulta la documentación** de GitHub Pages

**¡Tu sitio estará live en GitHub Pages en pocos minutos!** 🎉
