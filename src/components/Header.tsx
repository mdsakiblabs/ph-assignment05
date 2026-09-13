import headerImg from '../assets/banner-stack.png'

const Header = () => {
  return (
    <div className="max-w-280 m-auto h-screen flex items-center justify-around gap-20 ">
      <div>
        <h1 className='text-6xl leading-15 font-bold'>Build Your Ideal <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
        <h2 className='mt-6 pr-19 text-left text-[18px]  leading-6.8'>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </h2>
        <div className='mt-8 flex gap-5'>
          <button className='px-4 py-1 text-white rounded bg-linear-to-r from-[#F97316] to-[#EC4899] cursor-pointer '>Explore Technologies</button>
          <button className='px-8 rounded py-1 border-[1.3px] border-[#dfd7d7] cursor-pointer'>Learn More</button>
        </div>
      </div>
      <div>
        <img src={headerImg} alt="" className='w-210' />
      </div>
    </div>
  );
};

export default Header;
