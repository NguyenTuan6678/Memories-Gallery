import SeasonPage from "../components/SeasonPage";
import { SEASON_PAGE_CONFIG } from "../config/seasonpage";

export default function Summer() {
  return <SeasonPage season="Summer" config={SEASON_PAGE_CONFIG.Summer} />;
}
