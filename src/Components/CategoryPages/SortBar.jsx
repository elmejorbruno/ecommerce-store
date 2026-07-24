import React from "react";

const SortBar = ({
  sort = "relevance",
  perPage = 12,
  view = "grid",
  onChange = () => {}
}) => {
  const handleSort = (e) => onChange({ type: "sort", value: e.target.value });
  const handlePerPage = (e) => onChange({ type: "perPage", value: Number(e.target.value) });
  const handleView = (newView) => onChange({ type: "view", value: newView });

  return (
    <div className="w-full bg-transparent py-4" aria-label="Barra de orden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
        {/* Grupo izquierdo: ordenar y mostrar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
          <label className="sr-only" htmlFor="sort-select">Ordenar por</label>
          <select
            id="sort-select"
            value={sort}
            onChange={handleSort}
            className="appearance-none bg-white border rounded-md px-3 py-2 text-sm text-[var(--color-black)] shadow-sm"
            style={{ minWidth: 160 }}
          >
            <option value="relevance">Relevancia</option>
            <option value="newest">Más nuevo</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="popular">Más popular</option>
          </select>

          <label className="sr-only" htmlFor="perpage-select">Mostrar por página</label>
          <select
            id="perpage-select"
            value={perPage}
            onChange={handlePerPage}
            className="appearance-none bg-white border rounded-md px-3 py-2 text-sm text-[var(--color-black)] shadow-sm"
            style={{ minWidth: 120 }}
          >
            <option value={8}>8 por página</option>
            <option value={12}>12 por página</option>
            <option value={24}>24 por página</option>
            <option value={48}>48 por página</option>
          </select>
        </div>

        {/* Grupo derecho: vista y resultados */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <div className="text-sm text-[var(--color-black)] opacity-80 hidden sm:block">
            <span className="font-medium">Mostrando</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-pressed={view === "grid"}
              onClick={() => handleView("grid")}
              className={`p-2 rounded-md transition-all border ${view === "grid" ? "bg-[var(--color-black)] text-white" : "bg-white text-[var(--color-black)]"}`}
              title="Vista en cuadrícula"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 0h4v4H9V9zM15 3h2v2h-2V3zM15 9h2v2h-2V9z"/></svg>
            </button>

            <button
              aria-pressed={view === "list"}
              onClick={() => handleView("list")}
              className={`p-2 rounded-md transition-all border ${view === "list" ? "bg-[var(--color-black)] text-white" : "bg-white text-[var(--color-black)]"}`}
              title="Vista en lista"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
