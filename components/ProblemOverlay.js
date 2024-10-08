import { IoMdClose } from "react-icons/io";

export default function ProblemOverlay(props) {
  const { title, description, testCases, constraints, setIsModalOpen } = props;
  return (
    <div className="w-full h-full fixed inset-0 z-50 flex-col flex items-center justify-center bg-opacity-80 bg-background">
      <div className="w-[60%] h-[80%] bg-overlay flex flex-col gap-1 justify-center p-5 rounded-xl">
        <div className="w-full h-fit flex justify-end">
          <button onClick={() => setIsModalOpen(false)}>
            <IoMdClose size={30} />
          </button>
        </div>
        <div className="w-full h-full bg-overlay p-5 flex flex-col gap-2 overflow-auto hide-scrollbar">
          <p className="text-3xl">{title}</p>
          <p className="text-lg">{description}</p>
          {testCases.map((testCase, index) => (
            <div key={index} className="bg-subtleBackground p-3 rounded">
              <p className="font-semibold mb-2">Example {index + 1}</p>
              <div className="flex flex-col gap-1">
                <div>
                  <p className="font-semibold mb-1">Input</p>
                  <p className="font-light">{testCase.input}</p>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-1">Output</p>
                  <p className="font-light">{testCase.expectedOutput}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-subtleBackground p-3 rounded">
            <p className="font-semibold">Constraints</p>
            <div className="flex flex-col gap-2">
              {constraints.map((constraint, index) => (
                <p key={index}>{constraint}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
