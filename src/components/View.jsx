import React, { useState } from 'react'
import { Navbar , Footer} from './'
import contractCode from '../contract/verify.json';
import { ethers } from 'ethers';
import fileIcon from '../assets/images/file-icon.jpg';
import { Worker ,Viewer ,SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const address = contractCode['contract-address'];

const View = () => {
  const [record,setRecord] =useState([]);
  const [ethAddress,setEthAddress] = useState("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
      sidebarTabs: (defaultTabs) => [],
  });

  const getFiles = async(e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" }).then(res => setEthAddress(res[0]));
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(address, contractCode["abi"], provider);
          console.log(ethAddress);
            try {
              const records = await contract.getDoc(address);
              const depart = await contract.getDocByDepart("cse");
              setRecord(records);
              console.log(record,records);
            } catch (error) {
              console.error("Error fetching greeting:", error);
            }
            
          } else {
            console.error("Ethereum provider not found");
          }
  }

  return (
    <div className=' min-h-screen gradient-bg-common'>
      <Navbar />

      {/* <div  className='text-white text-center'>
        <button onClick={getFiles} >click</button>
      </div> */}

      <div className=' flex flex-row w-full'>
        {/* file list */}
          <div className=' flex flex-col items-center justify-center w-[60%] blue-glassmorphism m-10 p-4 text-white'>
                  {/* file card */}
                  <div className='flex w-full white-glassmorphism m-4'>
                        <img src={fileIcon} alt="File Icon" className='h-[200px] w-[20%] rounded-lg' />
                        <div className='flex flex-col m-4 w-full'>
                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl w-[40%]'>Name</div>
                            <div className='text-xl '>Mohanraj</div>
                          </div>

                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl  w-[40%]'>Description</div>
                            <div className='text-xl '>Javascript Framework (React JS & Redux)</div>
                          </div>

                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl  w-[40%]'>Roll No</div>
                            <div className='text-xl '>21BEADMCS095</div>
                          </div>
                            
                            <div className='flex flex-row items-center w-full'>
                                <div className='text-xl w-[40%] '>Department</div>
                                <div className='text-xl '>CSE</div>
                            </div>

                            <div className='flex flex-row items-center w-full'>
                            <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd]"
                              >
                                <p className="text-white text-lg font-semibold">
                                  View
                                </p>
                              </button>
                                
                              <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#bd2525] p-2 rounded-xl cursor-pointer hover:bg-[#bd3925b0]"
                              >
                                <p className="text-white text-lg font-semibold">
                                  Delete
                                </p>
                              </button>
                            </div>
                        </div>
                  </div>

                  <div className='flex w-full white-glassmorphism m-4'>
                        <img src={fileIcon} alt="File Icon" className='h-[200px] w-[20%] rounded-lg' />
                        <div className='flex flex-col m-4 w-full'>
                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl w-[40%]'>Name</div>
                            <div className='text-xl '>Deepa S</div>
                          </div>

                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl  w-[40%]'>Description</div>
                            <div className='text-xl '>Python Crash Course</div>
                          </div>

                          <div className='flex flex-row items-center w-full'>
                            <div className='text-xl  w-[40%]'>Roll No</div>
                            <div className='text-xl '>21BEADMEC115</div>
                          </div>
                            
                            <div className='flex flex-row items-center w-full'>
                                <div className='text-xl w-[40%] '>Department</div>
                                <div className='text-xl '>ECE</div>
                            </div>

                            <div className='flex flex-row items-center w-full'>
                            <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd]"
                              >
                                <p className="text-white text-lg font-semibold">
                                  View
                                </p>
                              </button>
                                
                              <button
                                type="button"
                                className="mx-4 mt-2 flex flex-row justify-center items-center my-1 bg-[#bd2525] p-2 rounded-xl cursor-pointer hover:bg-[#bd3925b0]"
                              >
                                <p className="text-white text-lg font-semibold">
                                  Delete
                                </p>
                              </button>
                            </div>
                        </div>
                  </div>
          </div>

          {/* File viewer */}
          <div className={" border-[2px] shadow-lg h-[500px] w-[40%] rounded-md mt-10 mr-5" }>

              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl="https://ipfs.io/ipfs/bafybeifbtoiykba3lgbgt6szlxhl6i4uy4chwxx5zev6du5mnd24ao7yha" defaultScale={SpecialZoomLevel.PageFit} plugins={[defaultLayoutPluginInstance]}  />
              </Worker>

          </div>

      </div>

      
      <Footer />
    </div>
  )
}

export default View