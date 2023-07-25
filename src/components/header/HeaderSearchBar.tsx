import { useState, useEffect, useRef } from "react";
import axios from "axios";
import HeaderFilterItem from "./HeaderFilterItem";
import { ProductProps } from "../product/_Card.interface";

export default function HeaderSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const filterListRef = useRef<HTMLUListElement>(null);
  const [input, setInput] = useState<string>();
  const [filtered, setFiltered] = useState<Array<ProductProps>>();
  const [show, setShow] = useState<boolean>();

  const onChangeInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  };

  useEffect(() => {
    input &&
      axios
        .get("https://fakestoreapi.com/products")
        .then((response: any) => {
          const list = response.data.filter(
            (item: any) =>
              input.length > 0 && item.title.toLowerCase().includes(input.toLowerCase()),
          );
          setFiltered(list);
        })
        .catch((error) => {
          console.log(error);
        });

    !input && setFiltered(undefined);
  }, [input]);

  useEffect(() => {
    const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
      const filterList = filterListRef.current as HTMLUListElement;
      const input = inputRef.current as HTMLDivElement;
      if (
        filterListRef.current &&
        !filterList.contains(e.target as Node) &&
        !input.contains(e.target as Node)
      ) {
        setShow(false);
      } else setShow(true);
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [filterListRef]);

  return (
    <>
      <input
        className="header-search-bar-input"
        ref={inputRef}
        type="text"
        value={input}
        placeholder="검색"
        onChange={onChangeInput}
      ></input>
      <ul
        className={filtered ? `header-filter-list active` : `header-filter-list`}
        ref={filterListRef}
      >
        {show &&
          filtered &&
          filtered.map((item) => {
            return <HeaderFilterItem key={item.id} item={item} />;
          })}
      </ul>
    </>
  );
}
