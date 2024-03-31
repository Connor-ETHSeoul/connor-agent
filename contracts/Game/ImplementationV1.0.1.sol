// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

interface DataBase {
    enum CharacterType {
        Warrior, //0
        Devil, //1
        Zombie, //2
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

contract ImplementationV_1_0_1 is Initializable, UUPSUpgradeable, OwnableUpgradeable {
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
            "Cannot stab a Elderly!"
        );
        _;
    }

    modifier swingConstraint(uint _defenderIndex) {
        Character memory defender = getCharacter(_defenderIndex);
        require(
            defender.characterType != DataBase.CharacterType.Elderly,
            "Cannot Swing a Elderly!"
        );
        _;
    }
    //AI Code ends here

    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
        dataBaseAddress = 0xf1fd2568de86E78da981d4ba75D8AF16f25884B6;
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
            // 그렇지 않으면 방어자의 체력을 0으로 설정
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
            // 그렇지 않으면 방어자의 체력을 0으로 설정
            defender.health = 0;
        }

        dataBaseContract.updateCharacter(
            _defenderIndex,
            defender.health,
            defender.attackPower
        );
    }
}