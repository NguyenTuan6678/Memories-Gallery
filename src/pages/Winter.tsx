import SeasonPage from "../components/SeasonPage";
import { SEASON_PAGE_CONFIG } from "../config/seasonpage";

export default function Winter() {
  return <SeasonPage season="Winter" config={SEASON_PAGE_CONFIG.Winter} />;
}
