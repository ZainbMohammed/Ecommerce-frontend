
const Signup = () => {

  return <>

    <section className='max_padd_container flexCenter flex-col pt-32 mb-6'>

      <div className='max-w-[555px] h-[450px] bg-white  m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>Sign Up</h3>

        <div className='flex flex-col gap-4 mt-5'>
          <input type='text' placeholder="Name" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input type='email' placeholder="Email" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
          <input type='password' placeholder="Password" className='h-10 w-full pl-5 bg-slate-700/15 outline-none rounded-md'/>
        </div>

        <button className='btn_dark_rounded my-5 w-full !rounded-md'>Sign Up</button>
        <p className='text-black font-bold'>
          Already have ab account?
          <a href='/login'><span className='text-sky-600 cursor-pointer underline p-1 hover:text-sky-700'>Login</span>
          </a>
        </p>

        <div className='flexCenter mt-6 gap-2'>
          <input type='checkbox' name='' id='' />
          <p>I agree to the terms of use and privacy policy</p>
        </div>

      </div>

    </section>
  
  </>
}

export default Signup