import SeasonPage from "../components/SeasonPage";
import { SEASON_PAGE_CONFIG } from "../config/seasonpage";

export default function Spring() {
  return <SeasonPage season="Spring" config={SEASON_PAGE_CONFIG.Spring} />;
}
