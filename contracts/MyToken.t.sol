// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Test } from "forge-std/Test.sol";
import { MyToken } from "./MyToken.sol";

contract MyTokenTest is Test {
  MyToken public token;
  address public owner;
  address public recipient;

  uint256 private constant INITIAL_SUPPLY = 1000000 * 10**18;

  function setUp() public {
    token = new MyToken();
    owner = address(this);
    recipient = address(0x1234567890123456789012345678901234567890);
  }

  function _balance(address account) internal view returns (uint256) {
    return token.balanceOf(account);
  }

  function _mint(uint256 amount) internal {
    token.mint(amount);
  }

  function testInitialSupply() public {
    uint256 expectedSupply = INITIAL_SUPPLY;
    uint256 actualSupply = token.totalSupply();
    assertEq(actualSupply, expectedSupply, "Incorrect initial supply");
  }

  function testMint() public {
    uint256 amount = 100;

    _mint(amount);

    uint256 expectedBalance = INITIAL_SUPPLY + amount;
    uint256 actualBalance = _balance(owner);
    assertEq(actualBalance, expectedBalance, "Incorrect balance after minting");
  }

  function testTransfer() public {
    uint256 amount = 100;

    token.transfer(recipient, amount);

    uint256 expectedSenderBalance = INITIAL_SUPPLY - amount;
    uint256 actualSenderBalance = _balance(owner);
    assertEq(actualSenderBalance, expectedSenderBalance, "Incorrect balance after transfer from sender");

    uint256 expectedRecipientBalance = amount;
    uint256 actualRecipientBalance = _balance(recipient);
    assertEq(actualRecipientBalance, expectedRecipientBalance, "Incorrect balance after transfer to recipient");
  }
}
