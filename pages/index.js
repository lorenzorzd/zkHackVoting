import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
//import { abi } from "../constants/abi";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Voting from "../build/contracts/Voting.json"

export const injected = new InjectedConnector();


export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const [numOfCandidates, setNumOfCandidates] = useState(0);
  const [candidateNames, setCandidateNames] = useState([]);
  const [contractABI, setContractABI] = useState(null);
  const [contractAdress, setContractAdress] = useState(null);

  useEffect(() => {
    setContractAdress(Voting.networks[5777].address)
    setContractABI(Voting.abi);
  }, []);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    } 
  });
  

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  //CONTRACT FUNCIONS
  //
  //
  async function execute() {
    if (active) {
      const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAdress, contractABI, signer);
      try {

        const data = await contract.getNumofCandidates();
        setNumOfCandidates(data.toString());

        // Retrieve names of each candidate and update state
        const names = [];
        for(let i = 1; i <= data; i++) {
          const name = await contract.getCandidateName(i);
          names.push(name);
        }
        setCandidateNames(names);
        
        
      
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  {/**
    async function voteForCandidate(candidateId) {
    // This function would contain the logic for voting for a specific candidate
    // candidateId is the id of the candidate to vote for
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAdress, contractABI, signer);
      try {
        // Call the vote function in the smart contract
        const transaction = await contract.vote(candidateId);
        await transaction.wait(); // Wait for the transaction to be mined
        console.log("Vote successful");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }


  }

*/}
  

  const voteForCandidate = async (candidateIndex) => {
    const requestData = {
      id: null, // Optionally provide an ID if needed
      message: "message",
    };

    try {
      const response = await fetch('http://127.0.0.1:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // The request was successful
        const responseData = await response.json();
        console.log('Response:', responseData);
        // Handle any UI updates or feedback here
      } else {
        // Handle error here
        console.error('Error:', response.statusText);
        // Handle error UI feedback if needed
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error UI feedback if needed
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">

      {hasMetamask ? (
        active ? (
          <p className="">Connected to Address: {account}</p>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold underl ine items-center">Connect To metamask</h1>
            <button onClick={() => connect()} className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
              Connect
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
              </div>
             </button>
          </div>
        )
      ) : (
        "Please install metamask"
      )}
  
     
     
      <div className="flex flex-col items-center"> 
        <button onClick={() => execute()}>View Elections</button> 
        {candidateNames.map((name, index) => (
          <button key={index} onClick={() => voteForCandidate(index + 1)}>{name}</button>
        ))}
      </div>



    </div>
  );
}
