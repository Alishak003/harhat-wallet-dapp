// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract EtherTransfer {
    uint public amount;

    event Sent(
        address indexed sender,
        address indexed recipient,
        uint256 amount
    );

    receive() external payable {}

    function sendEther(address payable recipient) public payable {
        require(msg.value > 0, "Invalid amount entered");
        require(recipient != msg.sender, "Cannot transfer to self");

        recipient.transfer(msg.value);

        emit Sent(msg.sender, recipient, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
