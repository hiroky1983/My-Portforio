import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { skillsTable } from "../../utils/skills";

export const SkillTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th w="20%">スキル</Th>
          <Th textAlign="center" w="60%">学習内容</Th>
          <Th w="20%">期間</Th>
        </Tr>
      </Thead>
      {skillsTable.map((skill) => (
        <Tbody key={skill.id}>
          <Tr>
            <Td w="20%">{skill.name}</Td>
            <Td w="60%">{skill.learn}</Td>
            <Td w="20%">{skill.duration}</Td>
          </Tr>
        </Tbody>
      ))}
    </Table>
  );
};
