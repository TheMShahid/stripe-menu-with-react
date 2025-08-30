import { useGlobalContext } from "./Context";
import sublinks from "./data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            className="nav-link"
            key={pageId}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
