import React, { useState } from "react";
import { MENU_ITEMS } from "../data/config";

const AdminMenu = () => {
  // Simulate database state
  const [items, setItems] = useState(
    MENU_ITEMS.map((i) => ({ ...i, available: true })),
  );

  const toggleAvailability = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item,
      ),
    );
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-[var(--theme-primary)]">
        Admin Dashboard
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>

            <button
              onClick={() => toggleAvailability(item.id)}
              className={`px-4 py-2 rounded font-bold transition-all ${
                item.available
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              {item.available ? "Available" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
