# Compraventa ElHueso — Taller 2: Bundle

> **Estado:** ✅ Documentación y métricas listas — (Diapositivas: ⏳ pendientes por el usuario)

Este README consolida lo necesario para **Taller 2 (Bundle)**: cómo correr el proyecto, qué bundle se usa, evidencias de **minificación/ofuscación/optimización**, métricas **antes vs. después**, y enlaces rápidos a la documentación.

## 🚀 Enlaces rápidos
- 📘 **Guía de configuración y uso**: [`SETUP_GUIDE.md`](./SETUP_GUIDE.md)
- 📊 **Análisis del Bundle**: [`BUNDLE_ANALYSIS.md`](./BUNDLE_ANALYSIS.md)
- 🧪 **Métricas y evidencias (antes/después)**: [`docs/mediciones.md`](./docs/mediciones.md)
- ✅ **Checklist contra requerimientos del taller**: [`docs/TALLER2_CHECKLIST.md`](./docs/TALLER2_CHECKLIST.md)
- 🌐 **GitHub Pages**: _(agrega aquí la URL cuando publiques)_

---

## 🧰 Stack del bundle
- **Parcel 2.12** (bundling, HMR, minificación, tree-shaking, hashing)
- **Tailwind CSS 3.4 + PostCSS** (preprocesado CSS, autoprefixing, purge)
- **Optimización de imágenes** (a través de Parcel)
- **Minificación/Ofuscación** (Terser/CSSnano vía pipeline de producción)

> Detalles y configuración concreta en [`SETUP_GUIDE.md`](./SETUP_GUIDE.md).

## ▶️ Cómo ejecutar
```bash
# 1) Instalar dependencias
npm install

# 2) Desarrollo con HMR
npm run dev

# 3) Build de producción (minificado/optimizado)
npm run build

# 4) Previsualizar build (opcional)
npm run preview
```

> Requisitos: Node 16+ y npm 8+.

## 🧾 Evidencias clave (resumen)
- **Minificación + ofuscación JS**: activa en build de producción.
- **Minificación CSS + purge**: Tailwind + PostCSS.
- **Optimización de imágenes**: habilitada vía Parcel.
- **Tree-shaking y hashing**: habilitados.
- **Métricas y comparativas**: ver [`docs/mediciones.md`](./docs/mediciones.md) y [`BUNDLE_ANALYSIS.md`](./BUNDLE_ANALYSIS.md).

## 🌐 Publicación (GitHub Pages)
1. Ejecuta `npm run build` y confirma que se genera `dist/`.
2. Sube el contenido de `dist/` a **gh-pages** (o configura Pages desde la rama `main` apuntando a `/dist`).  
3. Agrega la **URL de Pages** en la sección de enlaces rápidos de este README.

> Si usas la rama `gh-pages`:
> ```bash
> git subtree push --prefix dist origin gh-pages
> ```
> o usa la acción de GitHub Pages.

---

## 📝 Referentes y material extra
- Parcel Docs: https://parceljs.org
- Tailwind CSS: https://tailwindcss.com
- PostCSS: https://postcss.org

## 👥 Autores
- Equipo Compraventa ElHueso (UPB)

