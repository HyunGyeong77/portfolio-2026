import Button from '../button/Button';

type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: Props) {

  const menuOpen = () => {
    props.setIsOpenMenu(true);
  }

  return (
    <Button content="메뉴" onClick={menuOpen} />
  );
}