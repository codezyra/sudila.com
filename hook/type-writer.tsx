"use client";

import React, { useEffect, useState } from "react";

const Terminal: React.FC = () => {
  const [introArray, setIntroArray] = useState<string[]>([]);

  useEffect(() => {
    const starterArray = [
      "The very first line that needs to finish typing before going to the next line",
      "The second line that needs to start being typed after the first line",
    ];

    const createTypingEffect = async (text: string, index: number) => {
      return Promise.all(
        text.split("").map(
          (c, i) =>
            new Promise<void>((resolve) => {
              setTimeout(() => {
                setIntroArray((prev) => {
                  const updatedArray = [...prev];
                  updatedArray[index] = (updatedArray[index] || "") + c;
                  return updatedArray;
                });
                resolve();
              }, 100 * i);
            })
        )
      );
    };

    const cycle = async () => {
      for (let i = 0; i < starterArray.length; i++) {
        // Add a new line for each starterArray entry
        setIntroArray((prev) => [...prev, ""]);

        await createTypingEffect(starterArray[i], i);
      }
    };

    cycle();
  }, []);

  return (
    <div className="w-1/2 h-1/2 p-5 flex items-start justify-start bg-clip-padding bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-900 rounded">
      <div className="flex flex-col">
        {introArray.map((introLine, index) => (
          <div className="flex items-center" key={index}>
            <p className="text-white">{introLine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
