// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Verify{
    struct Record{
        string name;
        string fileDescription;
        string ipfs_hash;
        string rollno;
        string department;
    }

    struct Depart{
        string name;
        string fileDescription;
        string ipfs_hash;
        string rollno;
    }

    mapping(address => Record[]) recordlist;
    mapping(string => Depart[]) department;
    
     function addDoc (string calldata _name,string calldata _desc,string calldata _ipfs,string calldata _rollno,string calldata _depart) public  
      {

            Record memory newRecord = Record(_name,_desc,_ipfs,_rollno,_depart);
            recordlist[msg.sender].push(newRecord);
            
            department[_depart].push(Depart(_name,_desc,_ipfs,_rollno));

      }

      function getDocByDepart(string memory _depart) public view returns(Depart[] memory){
          return department[_depart];
      }

      function getDoc() public view returns(Record[] memory){
          return recordlist[msg.sender];
      }

}