interface VoteCompProps {
    optionA: string;
    optionB: string;
    votesA: number;
    votesB: number;
}

export default function VoteComp() {
    return (
      <section key="1" className="w-full max-w-md mx-auto py-12 px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">Option A</h3>
            </div>
            <span className="text-gray-500 dark:text-gray-400 font-medium">45%</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">Option B</h3>
            </div>
            <span className="text-gray-500 dark:text-gray-400 font-medium">55%</span>
          </div>
        </div>
        <div className="mt-8">
          {/* <Slider
            className="h-6 rounded-full bg-gray-200 dark:bg-gray-800 [&>span:first-child]:bg-primary [&>span:last-child]:bg-secondary"
            defaultValue={[45, 55]}
            disabled
            max={100}
            step={1}
          /> */}
        </div>
      </section>
    )
  }
  
  function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }