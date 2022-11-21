import Navmid from "../Navmid/Navmid";
import Navbar from "../NavBar/NavBar";
import Navsearch from "../Navsearch/Navsearch";

export default function Header() {
  return (
    <>
      <Navbar />
      <Navmid />
      <Navsearch />
    </>
  );
}
