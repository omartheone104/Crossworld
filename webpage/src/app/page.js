"use client";
import Image from "next/image";

// export default function ClientSideFetch() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('localhost:8080/creditscore')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   return JSON.stringify(data, null, 2);
// }
export default function Home() {
  function handleClick() {
    // alert("WOW");
    const myElement = document.getElementById("text1");
    if (myElement) {
      myElement.innerText = "You chose!";
    }
    // var data = ClientSideFetch()
    // alert(data)
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/omah.png"
          alt="OMAR"
          width={399}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li id="text1" className="mb-2 tracking-[-.01em]">
            BRANCH TEST BRANCH TEST {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.js
            </code>
            .
          </li>
          <li id="text2" className="tracking-[-.01em]">
            BRANCH TEST BRANCH TEST!!!
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={handleClick} 
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Destroy Omar
          </button>
          <button
            onClick={handleClick} 
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Save Omar
          </button>
        </div>
      </main>
    </div>
  );
}
 