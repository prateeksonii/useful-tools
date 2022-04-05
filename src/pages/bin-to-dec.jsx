import Link from "next/link";
import { useState, useEffect } from "react";

const BinToDec = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputBin, setInputBin] = useState(true);
  const [result, setResult] = useState("0");

  const convertBinToDec = (bin) => {
    let dec = 0;
    bin
      .split("")
      .reverse()
      .forEach((digit, index) => {
        dec = dec + (digit === "0" ? 0 : Math.pow(2, index));
      });

    return dec;
  };

  const convertDecToBin = (dec) => {
    let bin = "";
    while (dec !== 0) {
      const remainder = dec % 2;
      if (remainder) {
        bin = "1" + bin;
      } else {
        bin = "0" + bin;
      }
      dec = Math.floor(dec / 2);
    }

    return bin;
  };

  useEffect(() => {
    setInputValue("");
    setResult("0");
  }, [inputBin]);

  useEffect(() => {
    if (inputValue === "") return;
    if (isNaN(inputValue)) return;
    if (inputBin) {
      const dec = convertBinToDec(inputValue);
      setResult(dec + "");
    } else {
      const bin = convertDecToBin(+inputValue);
      setResult(bin + "");
    }
  }, [inputValue, inputBin]);

  return (
    <div className="px-8 my-12">
      <Link href="/">
        <a className="underline text-2xl">Back</a>
      </Link>
      <div className="mx-auto w-[90vw]] md:w-1/3">
        <h1 className="text-center font-bold text-3xl">
          Convert Binary to Decimal
        </h1>
        <div className="mt-12 space-y-8 md:space-y-0">
          {inputBin ? (
            <div className="flex flex-col gap-3">
              <label htmlFor="bin" className="text-xl">
                Binary digits
              </label>
              <input
                type="text"
                className="bg-darker rounded-lg border-none shadow-lg text-white text-2xl p-4"
                placeholder="0"
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <label htmlFor="dec" className="text-xl">
                Decimal
              </label>
              <input
                type="number"
                className="bg-darker rounded-lg border-none shadow-lg text-white text-2xl p-4"
                placeholder="0"
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue === "" ? 0 : +inputValue}
              />
            </div>
          )}
          <div className="py-8 text-7xl text-center font-bold">{result}</div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <button
            className="border-2 border-white px-6 py-3 text-2xl font-bold rounded-lg mt-8"
            onClick={() => setInputBin(!inputBin)}
          >
            Switch
          </button>
        </div>
      </div>
    </div>
  );
};

export default BinToDec;
