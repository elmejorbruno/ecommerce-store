import { useState } from "react";

export default function ProductFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    price: "",
    color: "",
    size: "",
    tag: "",
  });

  const handleChange = (e) => {
    const updated = {
      ...filters,
      [e.target.name]: e.target.value,
    };

    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <aside
      className="w-full md:w-64 p-6 rounded-lg shadow-sm"
      style={{ backgroundColor: "var(--color-fondo-beige)" }}
    >
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--color-black)" }}
      >
        Filtros
      </h3>

      {/* Precio */}
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium"
          style={{ color: "var(--color-black)" }}
        >
          Precio
        </label>
        <select
          name="price"
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="">Todos</option>
          <option value="low">Menos de $50</option>
          <option value="mid">$50 - $100</option>
          <option value="high">Más de $100</option>
        </select>
      </div>

      {/* Color */}
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium"
          style={{ color: "var(--color-black)" }}
        >
          Color
        </label>
        <select
          name="color"
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="">Todos</option>
          <option value="black">Negro</option>
          <option value="white">Blanco</option>
          <option value="beige">Beige</option>
          <option value="red">Rojo</option>
        </select>
      </div>

      {/* Talla */}
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium"
          style={{ color: "var(--color-black)" }}
        >
          Talla
        </label>
        <select
          name="size"
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="">Todas</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
      </div>

      {/* Etiquetas */}
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium"
          style={{ color: "var(--color-black)" }}
        >
          Etiquetas
        </label>
        <select
          name="tag"
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="">Todas</option>
          <option value="new">Nuevo</option>
          <option value="sale">Oferta</option>
          <option value="top">Top</option>
        </select>
      </div>
    </aside>
  );
}
