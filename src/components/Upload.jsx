import React, {useState} from "react";
import {Navbar, Footer} from "./";
import uploadFile from "../assets/images/upload-file.png";
import {ethers} from "ethers";
import smartcontract from "../contract/verify.json";
import toast from "react-hot-toast";

const Upload = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [rollno, setRollno] = useState();
  const [depart, setDepart] = useState();

  const handleFile = async (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    setFile(file);
    setMessage(file.name);
  };

  async function handleUpload(e) {
    if (!name || !desc || !rollno || !depart || !files) {
      toast.warn("Fill all Details", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({method: "eth_requestAccounts"});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        smartcontract["contract-address"],
        smartcontract.abi,
        signer
      );

      const ipfs =
        "https://ipfs.moralis.io:2053/ipfs/QmPc5KBDmBbHD8ez2ThEsU9Q9WW8gYvjGT63Nt6NyN5UdN/resume";

      try {
        await contract.addDoc(name, desc, ipfs, rollno, depart);
        setName("");
        setDesc("");
        setDepart("");
        setRollno("");
        setMessage("");
        setFile("");
       
        toast.success("Document Uploaded Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } catch (error) {
        toast.warn("Please install Metamask", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } else {
      toast.warn("Ethereum provider not found", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }

  return (
    <div className=" min-h-screen gradient-bg-common">
      <Navbar />

      <div className="text-white">
        <div class="w-full p-10  rounded-xl z-10">
          <div class="text-center">
            <h2 class="mt-5 text-3xl font-semibold text-gradient">
              Upload File
            </h2>
          </div>

          {/* split two division */}

          <div className="flex justify-between items-center w-full white-glassmorphism p-10 my-4">
            {/* upload file design */}
            <div className="w-[50%] p-2">
              <label class="text-lg font-semibold text-white ">
                Attach Document
              </label>
              <div class="flex items-center justify-center w-[60%] bg-slate-200 rounded-md">
                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div class="h-full w-full text-center flex flex-col items-center justify-center  ">
                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      <img
                        class="has-mask h-36 object-center"
                        src={uploadFile}
                        alt="freepik image"
                      />
                    </div>

                    {message ? (
                      <div className="text-black text-lg">{message}</div>
                    ) : (
                      <>
                        <p class="pointer-none text-gray-500 ">
                          <span class="text-sm">Drag and drop</span> files here{" "}
                          <br /> or{" "}
                          <a
                            href=""
                            id=""
                            class="text-blue-600 hover:underline"
                          >
                            select a file
                          </a>{" "}
                          from your computer
                        </p>
                      </>
                    )}
                  </div>
                  <input type="file" class="hidden" onChange={handleFile} />
                </label>
              </div>

              <p class="text-lg text-gray-300 mt-4">
                <span>File type: doc,pdf,types of images</span>
              </p>
              
              <div>
                <button
                  type="submit"
                  class="my-5 w-[50%] flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>

            {/* file details */}
            <div className="w-[50%]">
              <div className="flex flex-col p-2">
                <label class="text-sm font-bold text-white tracking-wide">
                  Name
                </label>
                <input
                  class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[60%]"
                  type="text"
                  placeholder="Enter the your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col p-2">
                <label class="text-sm font-bold text-white tracking-wide">
                  File Description
                </label>
                <textarea
                  name="description"
                  cols="10"
                  rows="10"
                  class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] h-20"
                  placeholder="Enter the File Name"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col p-2">
                <label class="text-sm font-bold text-white tracking-wide">
                  Student RollNo
                </label>
                <input
                  class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[60%]"
                  type="text"
                  placeholder="Enter the Roll No"
                  value={rollno}
                  onChange={(e) => setRollno(e.target.value)}
                />
              </div>
              <div className="flex flex-col p-2">
                <label class="text-sm font-bold text-white tracking-wide">
                  Student Department
                </label>
                <input
                  class="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[60%]"
                  type="text"
                  placeholder="Enter the Department (Eg:CSE)"
                  value={depart}
                  onChange={(e) => setDepart(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
