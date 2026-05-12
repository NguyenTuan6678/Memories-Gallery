import SeasonPage from "../components/SeasonPage";
import { SEASON_PAGE_CONFIG } from "../config/seasonpage";

export default function Autumn() {
  return <SeasonPage season="Autumn" config={SEASON_PAGE_CONFIG.Autumn} />;
}
