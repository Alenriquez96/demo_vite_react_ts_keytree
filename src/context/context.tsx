import React from "react";

interface ContextProps {
  theme: string;
  toggleTheme: () => void;
  categories: { list_name?: string }[];
  getCategories: (category: { list_name: string }[]) => void;
  selectedCategories: string[];
  getSelectedCategories: (selected: any) => void;
}

const defaultContext = {
  theme: "",
  toggleTheme: () => null,
  categories: [
    {
      list_name: "",
    },
  ],
  getCategories: () => null,
  selectedCategories: [],
  getSelectedCategories: () => null,
};
export const Context = React.createContext<ContextProps>(defaultContext);
