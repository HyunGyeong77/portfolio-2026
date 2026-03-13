import SectionLayout from "../components/layout/SectionLayout";
import SectionTitle from "../components/common/section/title/SectionTitle";
import SectionContent from "../components/common/section/content/SectionContent";
import Slides from "./components/slides/Slides";

export default function Projects() {
  return (
    <SectionLayout>
      <SectionTitle title="Projects" />
      <SectionContent>
        <Slides />
      </SectionContent>
    </SectionLayout>
  );
}