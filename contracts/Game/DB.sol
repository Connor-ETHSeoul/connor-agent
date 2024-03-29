// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SCagentDB {
    enum CharacterType {
        Monster1,
        Monster2, //1
        Elderly
    }

    struct Character {
        uint health;
        uint attackPower;
        CharacterType characterType;
    }

    Character[] private characters;

    function createCharacter(
        uint _health,
        uint _attackPower,
        CharacterType _type
    ) public {
        characters.push(Character(_health, _attackPower, _type));
    }

    function getCharacter(
        uint _index
    ) public view returns (uint, uint, CharacterType) {
        Character memory char = characters[_index];
        return (char.health, char.attackPower, char.characterType);
    }

    function updateCharacter(
        uint _index,
        uint _health,
        uint _attackPower
    ) external {
        characters[_index].health = _health;
        characters[_index].attackPower = _attackPower;
    }
}