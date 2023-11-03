import React, { useState ,useEffect } from 'react'
import { Navbar , Footer} from './'
import profile from '../assets/images/profile.gif';

const Profile = () => {
  const [ethAddress,setEthAddress]=useState('');
  const [ethBalance,setEthBalance]=useState('');

  useEffect(()=>{
    var walletinfo;
    if(localStorage.getItem('wallet') ){walletinfo = JSON.parse(localStorage.getItem('wallet'));}
    
    if(walletinfo){
    setEthAddress(walletinfo.ethAddress.substring(0,8) + "...."+walletinfo.ethAddress.substring(walletinfo.ethAddress.length - 8) );
    setEthBalance(walletinfo.ethBalance);
    }

  },[])
  return (
    <div className=' min-h-screen gradient-bg-common'>
      <Navbar />
      <div  className='text-white'>
        <div className='text-3xl text-center'>Profile Page</div>
        <div className=' flex flex-row  w-full'>
          {/* Details */}
            <div className='flex flex-col justify-center items-center text-xl white-glassmorphism w-[50%] p-4 m-4'>
                <div className='flex flex-row justify-between w-[80%] items-center m-2 '>
                      <div className='w-[40%] blue-glassmorphism p-2 mr-3 text-center border-[0.5px] border-neutral-300'>Name </div>
                      <div className='w-full'>Mohanraj M</div>
                </div>
                <div className='flex flex-row justify-between w-[80%] items-center m-2'>
                      <div className='w-[40%] blue-glassmorphism p-2 mr-3 text-center border-[0.5px] border-neutral-300'>Address </div>
                      <div className='w-full'>{ethAddress}</div>
                </div>
                <div className='flex flex-row justify-between w-[80%] items-center m-2'>
                      <div className='w-[40%] blue-glassmorphism p-2 mr-3 text-center border-[0.5px] border-neutral-300'>Balance </div>
                      <div className='w-full'>{ethBalance}</div>
                </div>
                <div className='flex flex-row justify-between w-[80%] items-center m-2 h-full'>
                      <div className='w-[40%] blue-glassmorphism p-2 mr-3 text-center border-[0.5px] border-neutral-300'>College Name</div>
                      <div className='w-full'>Sri Eshwar College of Engineering , Coimbatore</div>
                </div>
                <div className='flex flex-row justify-between w-[80%] items-center m-2'>
                      <div className='w-[40%] blue-glassmorphism p-2 mr-3 text-center border-[0.5px] border-neutral-300'>Department</div>
                      <div className='w-full'>B.E CSE</div>
                </div>
            </div>

            {/* gif */}
            <img src={profile} alt="profile image" height={"200"} width={"500"} className=' h-[60%] mx-4' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile;