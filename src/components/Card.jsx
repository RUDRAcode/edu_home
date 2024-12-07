
export default function Card({image}) {
  return (
    <div className="max-w-[500px] bg-blue-50 rounded-xl p-4 laptop2:max-w-[600px]">
      <div className="w-full flex justify-center p-8">
        <span className="text-2xl font-lexend max-w-[290px] text-center">
        Lorem ipsum dolor sit amet consectetur..
        </span>
      </div>
      <div className="w-full h-56 bg-blue-300 rounded-xl">
        <img src={image} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="w-full flex justify-center p-6">
        <span className="text-lg font-lexend max-w-full text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          voluptate dignissimos. Labore, similique!.
        </span>
      </div>
    </div>
  );
}
