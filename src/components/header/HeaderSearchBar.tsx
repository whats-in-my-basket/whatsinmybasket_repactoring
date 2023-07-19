import { useState } from "react";

export default function HeaderSearchBar() {
  const [input, setInput] = useState<string>();

  const onChangeInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  };

  return (
    <input
      className="header-search-bar-input"
      type="text"
      value={input}
      placeholder="검색"
      onChange={onChangeInput}
    ></input>
  );
}
