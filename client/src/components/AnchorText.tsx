type AnchorPropsType = {
  text: string;
  href?: string;
};

const AnchorText: React.FC<AnchorPropsType> = ({ text, href }) => {
  return (
    <a className="anchor-link" href={href}>
      {text}
    </a>
  );
};

export default AnchorText;
