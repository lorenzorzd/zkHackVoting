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

  const [response, setResponse] = useState(null)


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
  //GET REQUEST
  async function executeGet() {
      fetch('http://127.0.0.1:8000/hello', {
        method: 'GET',
      })
      .then(res => res.text()) // assuming that the server returns plain text
      .then(data => {
          setResponse(data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }


  //POST REQUEST
  async function executePost() {
    const message = {
      message: 'Candidate1',
    };

    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then(res => res.text()) // assuming that the server returns plain text
      .then(data => {
          setResponse(data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });

  };


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




  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center"> 
        <button onClick={() => executePost()}>vote</button> 
      {response && <div>{response}</div>}
      </div>



    </div>
  );
}
