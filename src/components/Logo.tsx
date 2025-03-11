interface LogoProps {
  alt: string;
  src: string;
}

const logo = (props: LogoProps) => {
  return (
    <div className='w-sm my-0 mx-auto'>
      <img {...props} className='w-[93%]' />
    </div>
  );
};

export default logo;
