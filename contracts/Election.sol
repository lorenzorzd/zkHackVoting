pragma solidity >=0.4.22 <0.9.0;

contract Voting {
    // Store candidate & vote count
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Use mapping to get candidate by their id
    mapping(uint => Candidate) public candidates;

    // Use mapping to track if an address has voted
    mapping(address => bool) public voters;

    // Store candidates count
    uint public candidatesCount;

    // Constructor
    constructor() public {
        // add candidates
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) public {
        // increment candidate count
        candidatesCount++;
        // add the candidate
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        // require that the voter hasn't voted before
        require(!voters[msg.sender], "You have already voted");

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");

        // record that the voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;
    }

    function getNumofCandidates() public view returns(uint) {
       return candidatesCount;
    }

    function getCandidateName(uint _candidateId) public view returns (string memory) {
        return candidates[_candidateId].name;
    }

    function getCandidateVotes(uint _candidateId) public view returns (uint) {
        return candidates[_candidateId].voteCount;
    }

}
 