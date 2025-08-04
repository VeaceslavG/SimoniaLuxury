import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate, useLocation } from "react-router-dom";
import "./burgerMenu.scss";

import MenuLinks from "../MenuLinks";

export default function BurgerMenu({ onCategorySelect }) {
  const [activeSection, setActiveSection] = useState("catalog");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(category) {
    closeMenu();
    const lowerCaseCategory = category.toLowerCase();

    if (location.pathname !== "/") {
      navigate("/", {
        state: { selectedCategory: lowerCaseCategory },
      });
    } else {
      if (onCategorySelect) {
        onCategorySelect(lowerCaseCategory);
      }
    }
  }

  const menuItems = {
    catalog: [
      { text: "Canapele", href: "/canapele", category: "canapele" },
      { text: "Colțare", href: "/coltare", category: "coltare" },
      { text: "Fotolii", href: "/fotolii", category: "fotolii" },
      { text: "Paturi", href: "/paturi", category: "paturi" },
    ],
    menu: [
      { text: "Acasă", href: "/#home" },
      { text: "Beneficii", href: "/#benefits" },
      { text: "Produse", href: "/#products" },
      { text: "Despre Noi", href: "/#about" },
      { text: "Contacte", href: "/#contacts" },
    ],
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      const menuWrap = document.querySelector(".bm-menu-wrap");
      if (menuWrap && !menuWrap.contains(e.target) && isOpen) {
        closeMenu();
      }
    };

    const handleEsc = (e) => e.key === "Escape" && closeMenu();

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={(state) => setIsOpen(state.isOpen)}
      aria-label="Main menu"
    >
      <nav aria-label="Menu sections">
        <div className="burger-switcher" role="tablist">
          <div className="switcher-left">
            <button
              className={activeSection === "catalog" ? "active" : ""}
              onClick={() => setActiveSection("catalog")}
              aria-selected={activeSection === "catalog"}
              role="tab"
              aria-controls="catalog-panel"
              id="catalog-tab"
            >
              Catalog
            </button>
          </div>
          <div className="switcher-right">
            <button
              className={activeSection === "menu" ? "active" : ""}
              onClick={() => setActiveSection("menu")}
              aria-selected={activeSection === "menu"}
              role="tab"
              aria-controls="menu-panel"
              id="menu-tab"
            >
              Meniu
            </button>
          </div>
        </div>

        {activeSection === "catalog" && (
          <div
            id="catalog-panel"
            role="tabpanel"
            aria-labelledby="catalog-tab"
            tabIndex="0"
            className="burger-section"
          >
            {menuItems.catalog.map((item) => (
              <a
                key={item.text}
                className="menu-item"
                href={`/#products`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.category);
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}

        {activeSection === "menu" && (
          <div
            id="menu-panel"
            role="tabpanel"
            aria-labelledby="menu-tab"
            tabIndex="0"
          >
            <MenuLinks onClick={closeMenu} items={menuItems.menu} />
          </div>
        )}
      </nav>
    </Menu>
  );
}
