import { FaSearch } from "react-icons/fa";
interface SearchBar {
  img: string;
  name: string;
}
export default function SearchBar() {
  return (
    <div className="searchbutton">
      <FaSearch size="25px" /> <input type="text" id="search" placeholder="search" />
    </div>
  );
}
