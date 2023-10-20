import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Section = () => {
    return (
        <>
        <div className='w-full bg-black phone:w-full phone:h-[70px] '>
        <div className='w-full h-[100px]  flex phone:w-full'>
        <div className='w-[40%] h-[100px] phone:w-full phone:text-3xl phone:h-[70px] flex items-center justify-center text-white font-bold text-5xl'>
        
        <h1>Urban Vault</h1>
        </div>
        <div className=' w-[60%] h-[100px] underline flex items-center justify-evenly cursor-pointer text-white font-bold  phone:flex phone:items-center phone:justify-center phone:gap-5 phone:h-[70px] phone:w-full'>
            <a href="https://www.urbanvault.in/blogs/"><span className='hoverStyle '>Blogs</span>
</a>
<a href="https://www.urbanvault.in/spaces.html"><span className=' hoverStyle'>Spaces</span>
</a>
        <span  className='phone:hidden w-1 h-14 bg-white border-l-4 border-white'></span>  
       <button className='phone:hidden w-[150px] h-[40px] bg-white rounded-xl text-black'>Book a Tour</button>
       <button className= 'phone:hidden w-[210px] h-[40px] bg-white rounded-xl text-black'><i class="fa-solid fa-phone"></i>+++++++1234567890</button>
       </div>

        </div>
        </div>
        <div className='w-full h-[50vh] bg-black flex items-center justify-center'>

            <div className=' phone:w-full phone:h-[45vh] phone:flex phone:items-center phone:justify-center w-[80%] h-[45vh] text-white flex items-start gap-8 justify-center flex-col text-[19px] phone:text-lg phone:p-7'>
                <h1 className='text-5xl phone:text-3xl  font-bold'>Marathahalli</h1>
                <p>One of the largest office space providers in Bangalore, Urbanvault is now in Marathahalli with over one lakh sqft of beautifully designed and superfunctional office spaces in the heart of the city.</p>
            </div>
        </div>
        <div className='w-full h-screen bg-black flex items-center justify-center phone:flex-col phone:w-full phone:h-[130vh] '>
            <div className='w-[50%] h-[95vh] flex items-center phone:w-full phone:h-[50vh]  justify-center flex-col'>
                <div className='w-[80%] h-[60vh]'>
                <Carousel>
                <div>
                    <img className='rounded-xl' src="https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.jpg?s=2048x2048&w=is&k=20&c=WMSbD_zX89rVxkyyLclg8fHRoAwBZemyvUHsiVRV2F0=" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className='rounded-xl 'src="https://media.istockphoto.com/id/1448386210/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-pathway.jpg?s=2048x2048&w=is&k=20&c=zAL_rNWzPGGFcH-a3ZtMIZSy2r8RtP1vCRpKSLr0xGM=" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className='rounded-xl ' src="https://media.istockphoto.com/id/484270482/photo/autumn-in-vermont.jpg?s=2048x2048&w=is&k=20&c=w45aB41l4YTIqv-Ed9ZCJwoiGQFAWlRWNHfr3rjt7tQ=" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className='rounded-xl ' src="https://plus.unsplash.com/premium_photo-1692117162315-35dad308ebf0?auto=format&fit=crop&q=80&w=1429&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>

                </div>
            </div>
            <div className='w-[50%] h-[95vh] phone:w-full phone:h-[75vh] phone:flex phone:items-center phone:justify-center flex items-start justify-center flex-col pt-12 gap-2'>
<div className=' w-[80%] h-[20vh] flex flex-col items-start text-white justify-center'>
    <span className='color w-32  h-2'></span>
<h1 className='text-2xl font-bold phone:text-xl'>Available workspace</h1>
<h2 className='text-xl font-bold phone:text-lg'>Monthly Subscription</h2>



</div>
<div className='phone:w-[90%] w-[80%] h-[25vh] bg-white flex rounded-2xl border-2'>
<div className='w-[35%]'>
    <img className='w-full h-[138px] phone:w-full phone:h-full rounded-l-2xl' src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
<div className='w-[75%] flex items-start gap-2 justify-center flex-col'>
<h1 className='text-2xl phone:text-xl'>Dedicated Desks</h1>
<p  className='text-lg phone:text-sm'>Desk space in a shared lockable office</p>
<p  className='text-xl phone:text-base'>from ₹ 5000/month</p>


</div>

</div>
<div className='w-[80%] h-[25vh] bg-white flex rounded-2xl phone:w-[90%]'>
<div className='w-[35%] '>
    <img className='w-full h-[138px] rounded-l-2xl phone:w-full phone:h-full' src="https://images.unsplash.com/photo-1677107129789-3b0241fb727a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
<div className='w-[75%] flex items-start justify-center flex-col'>
<h1 className='text-2xl phone:text-xl'>Private Office</h1>
<p  className='text-lg phone:text-base'>Lockable office space for teams of all sizes</p>
<p  className='text-xl phone:text-sm'>from ₹ 5000/month</p>
</div>


</div> 
 <div className='phone:w-[90%] w-[80%] h-[12vh] bg-white flex items-center justify-evenly rounded-2xl'>
 <i class=" fa-solid fa-users"></i>
 <p className='text-xl phone:text-lg'>For 5+ individuals</p>
 <button className='button w-[100px] h-[30px] bg-black text-white rounded-xl '>Contact Us</button>
 </div>

            </div>
        </div> 
          <div className=' phone:w-full phone:h-[70vh] phone:gap-5 phone:pr-10 w-full pl-24 h-[50vh] bg-white flex items-start justify-center flex-col'>
<h1 className='text-4xl font-bold phone:text-xl'>About this office space</h1>
<p className='w-[95%] text-lg  phone:text-sm'> UrbanVault is offering a wide range of office spaces in Marathahalli - business centers, fully furnished offices, coworking office spaces, plug and play offices. What's more - we truly value our space partner's productivity and space customization and management is something we truly excel at - so be assured of amazing office experience with our completely customized solutions.</p>
          </div>
          <div className='phone:w-full phone:h-[25vh]  w-full h-[40vh] bg-white flex items-start pl-24 justify-center flex-col'>
            <span className='color w-[200px] h-[10px] flex  phone:w-[150px]'></span>
<h1 className='text-4xl font-bold phone:text-3xl '>Amenities</h1>
<p className='phone:text-sm'>Updated with your health and safety in mind</p>
          </div>
        
        <div className='w-full h-[60vh] phone:w-full phone:h-[170vh] '>
<div className='phone:w-full phone:flex-col phone:h-[80vh] w-full h-[30vh] bg-white flex items-center justify-center gap-4 '>
    <span className='phone:w-[80%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center flex-col gap-3'>
    <i class=" phone:text-4xl text-5xl fa-solid fa-car"></i>
    <p className='text-xl phone:text-base'>Sufficient Parking</p>
    </span>
    <span className='phone:w-[80%] phone:h-[100px]  w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center flex-col gap-3'>
    <i class="text-5xl phone:text-4xl fa-solid fa-wifi"></i>
    <p className='text-xl phone:text-lg'>Blazing Fast WiFi</p>
    </span>
    <span className='phone:w-[80%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center flex-col gap-3'>
    <i class="text-5xl phone:text-4xl fa-solid fa-laptop"></i>
    <p className='text-xl phone:text-lg'>Built for you, open 24/7</p>
    </span>
    <span className='phone:w-[80%] phone:h-[100px]  w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center flex-col gap-3'>
    <i class="text-5xl phone:text-4xl fa-solid fa-battery-full"></i>
    <p className='text-xl phone:text'>Power Backup</p>
        
    </span>
</div>
<div className=' w-full  h-[30vh] phone:w-full phone:h-[90vh] phone:flex-col bg-white flex items-center justify-center gap-4'>
<span className=' phone:w-[90%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center flex-col gap-3'>
<i class="text-5xl phone:text-4xl fa-solid fa-mug-hot"></i>
<p className='text-xl phone:text-lg '>Micro-ground Coffee</p>
</span>
    <span className='phone:w-[90%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center gap-3 flex-col'>
    <i class="text-5xl phone:text-4xl fa-solid fa-camera"></i>
        <p className='text-xl phone:text-lg'>Security</p>
    </span>
    <span className='phone:w-[90%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center gap-3 flex-col'>
    <i class="text-5xl phone:text-4xl fa-brands fa-discord"></i>
        <p className='text-xl phone:text-lg'>Lounge & Cafateria</p>
    </span>   <span className='phone:w-[90%] phone:h-[100px] w-[20%] h-[120px] shadow-2xl bg-white rounded-xl flex items-center justify-center gap-3 flex-col'>
    <i class="text-5xl phone:text-4xl fa-solid fa-circle-xmark"></i>
        <p className='text-xl phone:text-lg'>Air conditioning</p>
    </span>
</div>

        </div>
        <div className=' phone:w-full phone:h-[100vh] w-[100%] h-[60vh] bg-gray-700 flex items-center justify-center'>
            
<footer class=" w-full ">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500  dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>
</footer>

        </div>
        
        
        
        
        
        
        </>
        
        
        )
    }
    
    export default Section
    