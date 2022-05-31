import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import outroImageUrl from "../../assets/outro.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
  
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de um lâmpada",
    },
  },
  OUTRO: {
    title: "Outro",
    image: {
      source: outroImageUrl,
      alt: "Imagem de um balão",
    },
  },
};

 export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback(){
    setfeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
      ):(
        <FeedbackContentStep feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        />
      )} 

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a className="underline underline-offset-2" href="#">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
