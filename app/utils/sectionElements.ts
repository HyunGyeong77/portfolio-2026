export const sectionElements = () => {
  const sectionTitle = document.querySelector<HTMLElement>('[data-testid="title"]');
  const sectionContent = document.querySelector<HTMLDivElement>('[data-testid="content"]');

  return {sectionTitle, sectionContent};
}