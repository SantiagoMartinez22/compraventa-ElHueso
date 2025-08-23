# Mediciones y Evidencias — Antes vs. Después

> Fuente de datos: salidas de build y estimaciones del análisis del bundle (ver `BUNDLE_ANALYSIS.md`).

## ⏱️ Tiempos de build
| Métrica | Valor |
|---|---:|
| Build producción | 591 ms |
| Build desarrollo | ~87 ms |

## 📦 Tamaños por tipo (post-build)
| Tipo | Tamaño |
|---|---:|
| HTML | 24.23 KB |
| CSS | 27.65 KB |
| JS | 4.46 KB |
| Imágenes | 47.14 KB |
| **Total (dist)** | **~368 KB** |

## 🔁 Comparativas por asset
### JavaScript
| Archivo | Original | Optimizado | Reducción |
|---|---:|---:|---:|
| `main.js` | 5.92 KB | 4.46 KB | **24.7% ↓** |

### CSS
> Crece por adopción de Tailwind y utilidades requeridas; el purge elimina clases no usadas en producción.

| Archivo | Original | Optimizado | Variación |
|---|---:|---:|---:|
| `styles.css` | 8.53 KB | 27.65 KB | **+224% ↑** |

### Imágenes
| Archivo | Original | Optimizado | Variación |
|---|---:|---:|---:|
| `corolla.jpeg` | 6.81 KB | 6.66 KB | **2.2% ↓** |
| `crv.jpeg` | 9.30 KB | 9.33 KB | **0.3% ↑** |
| `spark.jpeg` | 8.30 KB | 8.37 KB | **0.8% ↑** |
| `altima.jpeg` | 7.98 KB | 7.96 KB | **0.3% ↓** |
| `cx5.jpeg` | 10.66 KB | 10.71 KB | **0.5% ↑** |
| `340.jpeg` | 4.24 KB | 4.11 KB | **3.1% ↓** |
| **TOTAL** | **47.29 KB** | **47.14 KB** | **0.3% ↓** |

## 🧩 Notas
- Hashing de archivos habilitado (cache busting).
- Tree-shaking activo para JS.
- Autoprefixer y purge activos para CSS.
