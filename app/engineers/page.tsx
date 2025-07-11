'use client';
import React, { useState, useMemo } from 'react';
import {
  Container,
  Title,
  Table,
  Avatar,
  Text,
  Group,
  ActionIcon,
  TextInput,
  Button,
  Select,
  Paper,
  Badge,
  Menu,
  rem,
  Box,
  Stack,
  Flex
} from '@mantine/core';
import {
  IconSearch,
  IconPlus,
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconEye,
  IconPhone,
  IconMail,
  IconDotsCircleHorizontal
} from '@tabler/icons-react';
import { Layout } from '@/components/Layout';
import { AddEngineerModal } from '@/components/addEngineers';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';


const engineersData = [
  {
    id: 1,
    name: 'Name',
    email: 'umar.eee@house.co.uk',
    phone: '+44 12 461 3200',
    tasks: 28,
    status: 'active',
    avatar: null
  },
  {
    id: 2,
    name: 'Name',
    email: 'umar.eee@house.co.uk',
    phone: '+44 12 461 3200',
    tasks: 28,
    status: 'active',
    avatar: null
  },
  {
    id: 3,
    name: 'Name',
    email: 'umar.eee@house.co.uk',
    phone: '+44 12 461 3200',
    tasks: 28,
    status: 'active',
    avatar: null
  }
];

export default function EngineerPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [engineers, setEngineers] = useState(engineersData);
  const router = useRouter()
  const handleModalSubmit = (data: { name: string; email: string; phone: string }) => {
    const newEngineer = {
      id: engineers.length + 1,
      ...data,
      tasks: 0,
      status: 'active',
      avatar: null
    };
    setEngineers((prev) => [...prev, newEngineer]);
  };
  const handleAddEngineer = () => {
    open();
  };

  const handleViewDetails = (engineerId: any) => {
    router.push(`/engineers/${engineerId}`);
  };
  const rows = engineersData.map((engineer) => (
    <Table.Tr key={engineer.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar
            size={40}
            radius="xl"
            color="blue"
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            {engineer.name.charAt(0)}
          </Avatar>
          <Text size="sm" fw={500} c="white">
            {engineer.name}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <IconMail size={16} color="white" />
          <Text size="sm"  c="white">
            {engineer.email}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <IconPhone size={16} color="white" />
          <Text size="sm"  c="white">
            {engineer.phone}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="white">
          {engineer.tasks} tasks done
        </Text>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDotsCircleHorizontal size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}
              onClick={() => handleViewDetails(engineer.id)}

            >
              View Details
            </Menu.Item>
            <Menu.Item
              leftSection={<IconEdit style={{ width: rem(14), height: rem(14) }} />}

            >
              Edit
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="red"
              leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}

            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Layout>
      <AddEngineerModal opened={opened} onClose={close} onSubmit={handleModalSubmit} />
      <Box
        style={{
          backgroundColor: '#0f172a',
          minHeight: '100vh',
          padding: '2rem'
        }}
      >
        <Container fluid>
          <Stack gap="xl">
            {/* Header */}
            <Flex justify="space-between" align="center">
              <Title order={1} c="white" size="h2" fw={600}>
                Engineers
              </Title>

              <Group>
                <Flex gap="md" align="center">
                  <Select

                    data={['This month', 'Last month', 'This quarter', 'This year']}
                    style={{ width: 150 }}
                    styles={{
                      input: {
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        color: 'white',
                        '&::placeholder': {
                          color: '#64748b'
                        }
                      },
                      dropdown: {
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155'
                      },
                      option: {
                        backgroundColor: '#1e293b',
                        color: 'white',
                        '&[data-selected]': {
                          backgroundColor: '#0ea5e9'
                        },
                        '&:hover': {
                          backgroundColor: '#334155'
                        }
                      }
                    }}
                  />
                  <TextInput
                    placeholder="Search"
                    leftSection={<IconSearch size={16} />}
                    style={{ flex: 1, maxWidth: 300 }}
                    styles={{
                      input: {
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        color: 'white',
                        '&::placeholder': {
                          color: '#64748b'
                        }
                      }
                    }}
                  />
                </Flex>
                <Button
                  leftSection={<IconPlus size={16} />}
                  onClick={handleAddEngineer}
                  style={{
                    backgroundColor: '#0ea5e9',
                    border: 'none'
                  }}
                >
                  Add Engineer
                </Button>
              </Group>
            </Flex>

          
            <Paper
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '0.5rem'
              }}
            >
              <Table
                verticalSpacing="md"
                horizontalSpacing="xl"
                style={{
                  '& thead tr': {
                    backgroundColor: '#0f172a'
                  }
                }}
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">
                        Name
                      </Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">
                        Email
                      </Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">
                        Phone
                      </Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size="sm" fw={500} c="dimmed">
                        Tasks
                      </Text>
                    </Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </Paper>

          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}