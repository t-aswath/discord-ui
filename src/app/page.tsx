export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-black font-bold">
      <div>Please enter code !!!!!</div>
      <input
        className="border-black border-2 bg-[#7c87d9] w-80 h-10 my-7 px-2 text-black placeholder:text-black "
        type="text"
        placeholder="xxxxx"
      />
      <div className="flex justify-end">
      <button className="p-2 px-4 bg-green-500 ">Verify</button>
      </div>
    </div>
  );
}
