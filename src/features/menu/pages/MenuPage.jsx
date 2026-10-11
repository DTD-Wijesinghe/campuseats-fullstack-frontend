import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import MenuList from "../components/MenuList";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  const apiBase = import.meta.env.VITE_API_URL;
  const menuUrl = apiBase ? `${apiBase}/api/menu` : "/menu.json";
  const { data: dishes, isLoading, error } = useFetch(menuUrl);

  if (isLoading) return <p>Loading menu…</p>; // 1. loading
  if (error) return <p>Could not load menu: {error}</p>; // 2. error

  // 3. success → render search + <MenuList dishes={...} />
  const filtered = dishes.filter((d) =>
    d.name.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
      />
      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;
