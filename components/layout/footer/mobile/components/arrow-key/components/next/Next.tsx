import ArrowSvg from "../ArrowSvg";

type Props = {
  isFocusPosible: () => false | string
}

export default function Next(props: Props) {
  const {isFocusPosible} = props;

  return (
    <button className={`${isFocusPosible()}`}><ArrowSvg /></button>
  );
}