import Popup from "reactjs-popup";
import { useContext, useState } from "react";
import { Context } from "@/context/context";

const Filter = (): JSX.Element => {
  const { categories, getSelectedCategories, selectedCategories } =
    useContext(Context);
  console.log(selectedCategories);

  return (
    <Popup
      trigger={
        <button style={{ height: "31.5px", width: "38px" }}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 3H17.25M7.5 3C7.5 3.39782 7.34196 3.77936 7.06066 4.06066C6.77936 4.34196 6.39782 4.5 6 4.5C5.60218 4.5 5.22064 4.34196 4.93934 4.06066C4.65804 3.77936 4.5 3.39782 4.5 3M7.5 3C7.5 2.60218 7.34196 2.22064 7.06066 1.93934C6.77936 1.65804 6.39782 1.5 6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3M0.75 3H4.5M7.5 15H17.25M7.5 15C7.5 15.3978 7.34196 15.7794 7.06066 16.0607C6.77936 16.342 6.39782 16.5 6 16.5C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15M7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15M0.75 15H4.5M13.5 9H17.25M13.5 9C13.5 9.39782 13.342 9.77936 13.0607 10.0607C12.7794 10.342 12.3978 10.5 12 10.5C11.6022 10.5 11.2206 10.342 10.9393 10.0607C10.658 9.77936 10.5 9.39782 10.5 9M13.5 9C13.5 8.60218 13.342 8.22064 13.0607 7.93934C12.7794 7.65804 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.65804 10.9393 7.93934C10.658 8.22064 10.5 8.60218 10.5 9M0.75 9H10.5"
              stroke="#2B3E59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      }
      position="bottom right"
      nested
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 15.75C6.58561 15.7457 11.898 16.4522 17.047 17.851C17.774 18.049 18.5 17.509 18.5 16.755V15.75M2.75 1.5V2.25C2.75 2.44891 2.67098 2.63968 2.53033 2.78033C2.38968 2.92098 2.19891 3 2 3H1.25M1.25 3V2.625C1.25 2.004 1.754 1.5 2.375 1.5H19.25M1.25 3V12M19.25 1.5V2.25C19.25 2.664 19.586 3 20 3H20.75M19.25 1.5H19.625C20.246 1.5 20.75 2.004 20.75 2.625V12.375C20.75 12.996 20.246 13.5 19.625 13.5H19.25M20.75 12H20C19.8011 12 19.6103 12.079 19.4697 12.2197C19.329 12.3603 19.25 12.5511 19.25 12.75V13.5M19.25 13.5H2.75M2.75 13.5H2.375C2.07663 13.5 1.79048 13.3815 1.5795 13.1705C1.36853 12.9595 1.25 12.6734 1.25 12.375V12M2.75 13.5V12.75C2.75 12.5511 2.67098 12.3603 2.53033 12.2197C2.38968 12.079 2.19891 12 2 12H1.25M14 7.5C14 8.29565 13.6839 9.05871 13.1213 9.62132C12.5587 10.1839 11.7956 10.5 11 10.5C10.2044 10.5 9.44129 10.1839 8.87868 9.62132C8.31607 9.05871 8 8.29565 8 7.5C8 6.70435 8.31607 5.94129 8.87868 5.37868C9.44129 4.81607 10.2044 4.5 11 4.5C11.7956 4.5 12.5587 4.81607 13.1213 5.37868C13.6839 5.94129 14 6.70435 14 7.5V7.5ZM17 7.5H17.008V7.508H17V7.5ZM5 7.5H5.008V7.508H5V7.5Z"
            stroke="#637ACC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p style={{ color: "#637ACC", fontSize: "12px" }}>Price</p>
      </div>
      <form style={{ margin: "10px" }}>
        {categories !== undefined && categories.length > 1
          ? categories.map((category, i) => {
              return (
                <div key={i} style={{ marginBottom: "5px" }}>
                  <input
                    onChange={(e) => {
                      if (e.target.checked) {
                        getSelectedCategories([
                          ...selectedCategories,
                          e.target.value,
                        ]);
                      }
                    }}
                    type="checkbox"
                    value={category.list_name}
                  />
                  <label>{category.list_name}</label>
                </div>
              );
            })
          : ""}
      </form>
    </Popup>
  );
};

export default Filter;
