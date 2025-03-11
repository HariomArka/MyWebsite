import React from "react";

type QuestionProps = {
    Question:string;
    Answer:string;
};

const Question: React.FC<QuestionProps> = ({Question,Answer }) => {
    return (
        <div className="bg-slate-800 w-[100%] text-left rounded-lg my-3 px-3">
            <div className="flex justify-center">{Question}
                {/* <img src="/instagram.svg" alt="" /> */}
            </div>
            <div>{Answer}</div>
        </div>
    );
};

export default Question;
