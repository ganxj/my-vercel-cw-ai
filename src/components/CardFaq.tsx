import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  question: string;
  answer: string;
  secHeading?: boolean;
}

export default function CardFaq({
  href,
  question,
  answer,
  secHeading = true,
}: Props) {
  const headerProps = {
    style: { viewTransitionName: slugifyStr(question) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <p className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
        {secHeading ? (
          <h2 {...headerProps}>{question}</h2>
        ) : (
          <h3 {...headerProps}>{question}</h3>
        )}
      </p>
      {/*<Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />*/}
      <p>{answer}</p>
    </li>
  );
}
