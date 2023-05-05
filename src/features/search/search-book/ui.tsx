import { useState } from "react";

import { Button } from "shared/ui";

type SearchBookPropsType = {
  onSearch: (str: string) => void;
  placeholder: string;
};

export const SearchBook = ({
  onSearch,
  placeholder = "Поиск книжных клубов",
}: SearchBookPropsType) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchValue);
        }}
      >
        <div className="search__item">
          <div className="search__item_icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z"
                fill="#222222"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="search__item_input"
            placeholder={placeholder}
            required
          />
        </div>

        <Button text="Найти" type="submit" className="search__form_btn" />
      </form>
    </div>
  );
};
