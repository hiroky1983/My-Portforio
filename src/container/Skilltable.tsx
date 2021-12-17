import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { skillsTable } from "../../utils/skills";

export const SkillTable = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>スキル</Th>
          <Th>学習内容</Th>
          <Th>期間</Th>
        </Tr>
      </Thead>
      {skillsTable.map((skill) => (
        <Tbody key={skill.id}>
          <Tr>
            <Td>{skill.name}</Td>
            <Td>{skill.learn}</Td>
            <Td>{skill.duration}</Td>
          </Tr>
        </Tbody>
      ))}
    </Table>
  );
};
