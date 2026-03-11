import SectionTitle from '../components/common/section/title/SectionTitle';
import SectionContent from '../components/common/section/content/SectionContent';
import Content from './components/Content';
import SectionLayout from '../components/layout/SectionLayout';

export default function About() {
  return (
    <SectionLayout>
      <SectionTitle title="About Me" />
      <SectionContent>
        <Content />
      </SectionContent>
    </SectionLayout>
  );
}