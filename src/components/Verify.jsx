import React, { useState } from 'react'
import { Navbar , Footer} from '.'
import { Worker ,Viewer ,SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import toast from 'react-hot-toast';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Verify = () => {
  const [certNo,setCertNo] = useState('');
  const [hash,setHash] = useState('');

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
});

  const handleVerify = () => {
    
    let hashId = certNo.trim();
    if(hashId.startsWith("CHAIN-ID-")){
      const id = hashId.substring(9);
      console.log(id);
      setHash(id);
    }
    else{
      toast.error('Certificate Number starts with "CHAIN-ID"',{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }

  }

  const handleToggle = () => {
    setHash('');
    setCertNo('');
  }

  return (
    <div className=' min-h-screen gradient-bg-common'>
        {/* Nav bar component */}
        <Navbar />

          <div className='text-white text-center mt-20'>

              <div className='text-center text-2xl m-2'>
                <div className='text-3xl m-2'>Certificate Verification <span className=' text-yellow-300'>{' '}Portal</span></div> 
                  <div className='m-4'>Powered by <span className=' text-cyan-600'>FalkonX</span></div>
              </div>

              {
                hash?<>

                <div className='flex flex-col justify-center items-center'>
                  
                  <div className=' text-2xl text-gray-400 cursor-pointer hover:text-white m-7' onClick={handleToggle}>Check another Certificate</div>

                  <div className={" border-[2px] shadow-lg h-[600px] w-[60%] rounded-md mt-5 mr-5 " }>
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer fileUrl={`https://ipfs.io/ipfs/${hash}`} defaultScale={SpecialZoomLevel.PageFit}  plugins={[defaultLayoutPluginInstance]}  />
                      </Worker>

                  </div>
                  
                </div>
                
                </>:<>
                <div className='flex justify-center flex-col items-center m-2'>

                <div className='block mb-2 text-lg font-medium text-gray-900 dark:text-white m-2'>Certificate Number</div>

                <input type="text" id="cert-num" className="bg-gray-50 border m-2 text-center border-gray-300 text-white text-lg rounded-[25px] focus:ring-blue-500 focus:border-blue-500 block w-[51%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:text-black dark:focus:bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CHAIN-ID-bafkreigfvngoydofemwj" required value={certNo} onChange={(e) => setCertNo(e.target.value)}></input>

                <div className='w-[50%] bg-yellow-300 hover:bg-yellow-500 cursor-pointer rounded-[30px] p-2 m-2 text-xl text-black font-semibold  tracking-widest border-white border-[3px]' onClick={handleVerify}>VERIFY</div>

              </div>
              </>
              }
          </div>

        {/* footer component */}
        <Footer />
    </div>
  )
}

export default Verify;

// CHAIN-ID-bafybeifbtoiykba3lgbgt6szlxhl6i4uy4chwxx5zev6du5mnd24ao7yha