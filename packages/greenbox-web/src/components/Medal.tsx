import AlphaImage from "./AlphaImage";

type Props = {
  title?: string;
};

export default function Medal({ title }: Props) {
  return <AlphaImage src="itemimages/fdkol_medal.gif" title={title} />;
}
