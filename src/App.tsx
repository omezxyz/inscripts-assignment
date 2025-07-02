import { BottomTabs } from "./components/BottomTabs";
import { HeadingBar } from "./components/HeadingBar";
import { Spreadsheet } from "./components/Spreadsheet";
import { Toolbar } from "./components/Toolbar";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <HeadingBar />
      <Toolbar/>
      <Spreadsheet />
      <div className="mt-auto">
        <BottomTabs />
      </div>
    </div>
  );
}
