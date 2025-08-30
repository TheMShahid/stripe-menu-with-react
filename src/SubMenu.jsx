import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleOnMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    // console.log(submenu);
    const { clientX, clientY } = event;
    // const result = submenu.getBoundingClientRect();
    // console.log({ clientX, clientY, result });
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // console.log(result);

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleOnMouseLeave}
      ref={submenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? "1fr 1fr" : "1fr",
        }}>
        {currentPage?.links.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
