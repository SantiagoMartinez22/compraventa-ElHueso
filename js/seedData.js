// Script para poblar la base de datos con más de 100 vehículos
// Este archivo se puede ejecutar en la consola del navegador en la página app.html

const vehiculosData = [
  // Toyota
  { marca: 'Toyota', modelo: 'Corolla', anio: 2021, precio: 85000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Camry', anio: 2022, precio: 120000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'RAV4', anio: 2023, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Highlander', anio: 2022, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Prius', anio: 2021, precio: 95000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Tacoma', anio: 2023, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: '4Runner', anio: 2022, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Sienna', anio: 2021, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'Avalon', anio: 2023, precio: 130000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },
  { marca: 'Toyota', modelo: 'C-HR', anio: 2022, precio: 110000000, imagen_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop' },

  // Honda
  { marca: 'Honda', modelo: 'Civic', anio: 2021, precio: 80000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Accord', anio: 2022, precio: 125000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'CR-V', anio: 2023, precio: 145000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Pilot', anio: 2022, precio: 175000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'HR-V', anio: 2021, precio: 105000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Passport', anio: 2023, precio: 165000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Ridgeline', anio: 2022, precio: 155000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Odyssey', anio: 2021, precio: 135000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Insight', anio: 2023, precio: 115000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'Honda', modelo: 'Fit', anio: 2022, precio: 75000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },

  // Ford
  { marca: 'Ford', modelo: 'F-150', anio: 2021, precio: 190000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Explorer', anio: 2022, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Escape', anio: 2023, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Mustang', anio: 2022, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Edge', anio: 2021, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Expedition', anio: 2023, precio: 220000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Bronco', anio: 2022, precio: 210000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Ranger', anio: 2021, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Transit', anio: 2023, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },
  { marca: 'Ford', modelo: 'Focus', anio: 2022, precio: 90000000, imagen_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop' },

  // Chevrolet
  { marca: 'Chevrolet', modelo: 'Silverado', anio: 2021, precio: 185000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Equinox', anio: 2022, precio: 135000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Traverse', anio: 2023, precio: 175000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Malibu', anio: 2022, precio: 120000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Camaro', anio: 2021, precio: 195000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Tahoe', anio: 2023, precio: 210000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Suburban', anio: 2022, precio: 230000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Colorado', anio: 2021, precio: 165000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Blazer', anio: 2023, precio: 155000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Chevrolet', modelo: 'Spark', anio: 2022, precio: 45000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Nissan
  { marca: 'Nissan', modelo: 'Altima', anio: 2021, precio: 110000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Sentra', anio: 2022, precio: 85000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Rogue', anio: 2023, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Murano', anio: 2022, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Pathfinder', anio: 2021, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Armada', anio: 2023, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Frontier', anio: 2022, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Titan', anio: 2021, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Kicks', anio: 2023, precio: 95000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Nissan', modelo: 'Versa', anio: 2022, precio: 70000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // BMW
  { marca: 'BMW', modelo: '3 Series', anio: 2021, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: '5 Series', anio: 2022, precio: 220000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'X3', anio: 2023, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'X5', anio: 2022, precio: 250000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'X1', anio: 2021, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'X7', anio: 2023, precio: 300000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: '7 Series', anio: 2022, precio: 280000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'i3', anio: 2021, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'i8', anio: 2023, precio: 350000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },
  { marca: 'BMW', modelo: 'Z4', anio: 2022, precio: 240000000, imagen_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop' },

  // Mercedes-Benz
  { marca: 'Mercedes-Benz', modelo: 'C-Class', anio: 2021, precio: 190000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'E-Class', anio: 2022, precio: 230000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'S-Class', anio: 2023, precio: 320000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'GLC', anio: 2022, precio: 210000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'GLE', anio: 2021, precio: 260000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'GLS', anio: 2023, precio: 310000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'A-Class', anio: 2022, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'CLA', anio: 2021, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'G-Class', anio: 2023, precio: 400000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },
  { marca: 'Mercedes-Benz', modelo: 'AMG GT', anio: 2022, precio: 450000000, imagen_url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop' },

  // Audi
  { marca: 'Audi', modelo: 'A3', anio: 2021, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'A4', anio: 2022, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'A6', anio: 2023, precio: 240000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'A8', anio: 2022, precio: 300000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'Q3', anio: 2021, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'Q5', anio: 2023, precio: 220000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'Q7', anio: 2022, precio: 280000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'Q8', anio: 2021, precio: 320000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'TT', anio: 2023, precio: 260000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Audi', modelo: 'R8', anio: 2022, precio: 500000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Volkswagen
  { marca: 'Volkswagen', modelo: 'Jetta', anio: 2021, precio: 90000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Passat', anio: 2022, precio: 130000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Tiguan', anio: 2023, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Atlas', anio: 2022, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Golf', anio: 2021, precio: 85000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Arteon', anio: 2023, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'ID.4', anio: 2022, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Beetle', anio: 2021, precio: 95000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'CC', anio: 2023, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Volkswagen', modelo: 'Touareg', anio: 2022, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Mazda
  { marca: 'Mazda', modelo: 'CX-5', anio: 2021, precio: 120000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'CX-9', anio: 2022, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'Mazda3', anio: 2023, precio: 95000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'Mazda6', anio: 2022, precio: 130000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'CX-3', anio: 2021, precio: 100000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'CX-30', anio: 2023, precio: 110000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'MX-5 Miata', anio: 2022, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'CX-50', anio: 2021, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'Tribute', anio: 2023, precio: 125000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Mazda', modelo: 'B-Series', anio: 2022, precio: 135000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Subaru
  { marca: 'Subaru', modelo: 'Outback', anio: 2021, precio: 140000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Forester', anio: 2022, precio: 130000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Impreza', anio: 2023, precio: 90000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Legacy', anio: 2022, precio: 120000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'WRX', anio: 2021, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Ascent', anio: 2023, precio: 170000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Crosstrek', anio: 2022, precio: 110000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'BRZ', anio: 2021, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Tribeca', anio: 2023, precio: 145000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Subaru', modelo: 'Baja', anio: 2022, precio: 125000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Hyundai
  { marca: 'Hyundai', modelo: 'Elantra', anio: 2021, precio: 85000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Sonata', anio: 2022, precio: 120000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Tucson', anio: 2023, precio: 130000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Santa Fe', anio: 2022, precio: 150000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Palisade', anio: 2021, precio: 180000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Kona', anio: 2023, precio: 100000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Venue', anio: 2022, precio: 80000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Accent', anio: 2021, precio: 70000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Genesis', anio: 2023, precio: 200000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Hyundai', modelo: 'Ioniq', anio: 2022, precio: 110000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },

  // Kia
  { marca: 'Kia', modelo: 'Forte', anio: 2021, precio: 80000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Optima', anio: 2022, precio: 115000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Sportage', anio: 2023, precio: 125000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Sorento', anio: 2022, precio: 145000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Telluride', anio: 2021, precio: 175000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Soul', anio: 2023, precio: 90000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Niro', anio: 2022, precio: 105000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Stinger', anio: 2021, precio: 160000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Cadenza', anio: 2023, precio: 135000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' },
  { marca: 'Kia', modelo: 'Sedona', anio: 2022, precio: 155000000, imagen_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop' }
];

// Función para poblar la base de datos
async function seedDatabase() {
  console.log('Iniciando población de base de datos...');
  
  const sb = window.sb;
  if (!sb) {
    console.error('Supabase client no disponible');
    return;
  }

  // Obtener el usuario actual
  const { data: userData } = await sb.auth.getUser();
  if (!userData?.user?.id) {
    console.error('Usuario no autenticado');
    return;
  }

  let successCount = 0;
  let errorCount = 0;

  for (const vehiculo of vehiculosData) {
    try {
      const payload = {
        user_id: userData.user.id,
        ...vehiculo
      };

      const { error } = await sb.from('vehiculos').insert(payload);
      
      if (error) {
        console.error(`Error insertando ${vehiculo.marca} ${vehiculo.modelo}:`, error);
        errorCount++;
      } else {
        console.log(`✅ Insertado: ${vehiculo.marca} ${vehiculo.modelo}`);
        successCount++;
      }

      // Pequeña pausa para no sobrecargar la API
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (err) {
      console.error(`Error general insertando ${vehiculo.marca} ${vehiculo.modelo}:`, err);
      errorCount++;
    }
  }

  console.log(`\n🎉 Población completada:`);
  console.log(`✅ Exitosos: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`📊 Total procesados: ${vehiculosData.length}`);
}

// Exportar para uso en consola
window.seedDatabase = seedDatabase;
window.vehiculosData = vehiculosData;

console.log('Script de población cargado. Usa seedDatabase() para poblar la base de datos.');
