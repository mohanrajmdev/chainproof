import React, {  useState ,useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import toast from 'react-hot-toast';
import { ethers } from 'ethers';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Welcome = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [ethAddress,setEthAddress] = useState("");
  const [ethName,setEthName] = useState("");
  const [ethSymbol,setEthSymbol] = useState("");

  const getbalance = (address) => {
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        setEthBalance(ethers.utils.formatEther(balance));
        toast.success('Wallet Connected',
              {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
        );
        if(ethAddress && ethBalance){
          if(localStorage.getItem('wallet')){
            localStorage.removeItem('wallet');
          }
          localStorage.setItem('wallet',JSON.stringify({ethAddress,ethBalance}));
        }
      });
  };

  useEffect(()=>{
    var walletinfo;
    if(localStorage.getItem('wallet') ){walletinfo = JSON.parse(localStorage.getItem('wallet'));}
    
    if(walletinfo){
    setEthAddress(walletinfo.ethAddress.substring(0,8) + "...."+walletinfo.ethAddress.substring(walletinfo.ethAddress.length - 8) );
    setEthBalance(walletinfo.ethBalance);
    }

  },[])
  
  const accountChangeHandler = async(account) => {
    setEthAddress(account.substring(0,8) + "...."+account.substring(account.length - 8));
    getbalance(account);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const network = await provider.getNetwork();
    setEthName(network.name);
    console.log(network)
    setEthSymbol(network.symbol);
  };
  
  const connectWallet = async() => {
    try {
      const {ethereum} = window;
      if(ethereum) {
        console.log(ethereum);
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
        setIsConnected(true);
        console.log(ethSymbol);
      }
      else{
        alert("Please install the metamask!")
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-14 py-10 px-3">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-100"> 
          <h1 className="text-5xl sm:text-8xl text-white text-gradient py-8">
            Validate Documents <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-4xl sm:text-4xl">
            Explore the web3 world. Validate and Verify your documents on ChainProof.
          </p>
          {!isConnected && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          {isConnected && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Change Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Polygon
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        

        <div className="flex flex-col flex-1 items-center justify-start w-full h-full mf:mt-14 mt-8">
  <div className="p-4 flex justify-end items-start flex-col rounded-3xl h-[16rem] sm:w-96 w-full my-5 eth-card white-glassmorphism">
    <div className="flex justify-between flex-col w-full h-full">
      <div className="flex justify-between items-start">
        <div className="w-16 h-16 rounded-full border-4 border-white flex justify-center items-center">
          <SiEthereum fontSize={28} color="#fff" />
        </div>
        <BsInfoCircle fontSize={24} color="#fff" />
      </div>
      <div>
            <div className="">
                <p className="text-white font-medium text-2xl">
                  Address
                </p>
                {
                  ethAddress && (
                    <p className="text-white font-light text-lg">
                  {ethAddress} 
                </p>
                  )
                }
                
            </div>
  
        <p className="text-white  font-medium text-2xl">
          Balance
        </p>
        <p className="text-white font-light text-lg">
          {ethBalance && (ethBalance)}
        </p>
        <p className="text-white font-semibold text-2xl mt-3">
          {ethName}
        </p>
      </div>
    </div>
  </div>
          
        </div>
      </div>
    </div>
  );
};

export default Welcome;
