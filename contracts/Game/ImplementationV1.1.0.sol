// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

interface DataBase {
    enum CharacterType {
        Warrior, //0
        Monster1, //1
        Monster2, //2
        Elderly //3
    }

    function getCharacter(
        uint _index
    ) external view returns (uint, uint, CharacterType);

    function updateCharacter(
        uint _index,
        uint health,
        uint attackPower
    ) external;
}

contract ImplementationV_1_1_0 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    address dataBaseAddress;
    DataBase dataBaseContract;


    struct Character {
        uint health;
        uint attackPower;
        DataBase.CharacterType characterType;
    }

    //AI Code starts here
    modifier stabConstraint(uint _defenderIndex) {
        Character memory defender = getCharacter(_defenderIndex);
        require(
            defender.characterType != DataBase.CharacterType.Elderly,
            "Cannot attack a Elderly!"
        );
        _;
    }

    modifier swingConstraint(uint _defenderIndex) {
        Character memory defender = getCharacter(_defenderIndex);
        require(
            defender.characterType != DataBase.CharacterType.Elderly,
            "Cannot attack a Elderly!"
        );
        _;
    }
    //AI Code ends here

    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
        dataBaseAddress = 0x9d4DCD71f5917d12276c4F2E1e3A5AF735Daced6;
        dataBaseContract = DataBase(dataBaseAddress); 
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}


    function getCharacter(
        uint _index
    ) internal view returns (Character memory) {
        (
            uint _health,
            uint _attackPower,
            DataBase.CharacterType _characterType
        ) = dataBaseContract.getCharacter(_index);
        return Character(_health, _attackPower, _characterType);
    }

    function stab(
        uint _attackerIndex,
        uint _defenderIndex
    ) public stabConstraint(_defenderIndex) {
        Character memory attacker = getCharacter(_attackerIndex);
        Character memory defender = getCharacter(_defenderIndex);
        if (defender.health >= attacker.attackPower) {
            defender.health -= attacker.attackPower;
        } else {
            defender.health = 0;
        }

        dataBaseContract.updateCharacter(
            _defenderIndex,
            defender.health,
            defender.attackPower
        );
    }

    function swing(
    uint _attackerIndex,
    uint _defenderIndex
    ) public swingConstraint(_defenderIndex) {
        Character memory attacker = getCharacter(_attackerIndex);
        Character memory defender = getCharacter(_defenderIndex);
        if (defender.health >= attacker.attackPower) {
            defender.health -= attacker.attackPower;
        } else {
            defender.health = 0;
        }

        dataBaseContract.updateCharacter(
            _defenderIndex,
            defender.health,
            defender.attackPower
        );
    }
}