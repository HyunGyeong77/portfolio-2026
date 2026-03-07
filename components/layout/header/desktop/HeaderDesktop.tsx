import Stats from '@layout/header/components/stats/Stats';

export default function HeaderDesktop() {
  return (
    <header>
      <Stats 
        statsWidth="400px"
        statsHeight="204px"
        expWidth={201}
        expHeight={21}
      />
    </header>
  );
}