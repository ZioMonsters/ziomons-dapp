pragma solidity ^0.4.24;


/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {

    /**
      * @dev Multiplies two numbers, throws on overflow.
      */
    function mul(uint256 a, uint256 b)
        internal
        pure
        returns (uint256 c)
    {
        // Gas optimization: this is cheaper than asserting "a" not being zero, but the
        // benefit is lost if "b" is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        c = a * b;
        assert(c / a == b);
        return c;
    }

    function sub(uint256 a, uint256 b)
        internal
        pure
        returns (uint256)
    {
        require(b <= a);
        return a - b;
    }

    /**
      * @dev Adds two numbers, throws on overflow.
      */
    function add(uint256 a, uint256 b)
        internal
        pure
        returns (uint256 c)
    {
        c = a + b;
        require(c >= a);
        return c;
    }
}
