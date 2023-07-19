import { useState, useEffect, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import HeaderSearchBar from "./HeaderSearchBar";

export default function HeaderSearchAtMobile() {
  const [show, setShow] = useState<boolean>();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const searchBtnRef = useRef<HTMLDivElement>(null);

  const showSearchBar = () => {
    setShow(true);
  };

  useEffect(() => {
    const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
      const current = searchBarRef.current as HTMLDivElement;
      const buttonCurrent = searchBtnRef.current as HTMLDivElement;
      if (
        searchBarRef.current &&
        !current.contains(e.target as Node) &&
        !buttonCurrent.contains(e.target as Node)
      ) {
        setShow(false);
      } else setShow(true);
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [searchBarRef]);

  return (
    <>
      <div
        className="header-search-btn"
        onClick={showSearchBar}
        ref={searchBtnRef}
      >
        <CgSearch className="header-search-btn-img" />
      </div>
      {show && (
        <div className="mobile-search-bar" ref={searchBarRef}>
          <HeaderSearchBar />
        </div>
      )}
    </>
  );
}
