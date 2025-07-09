'use client';
import React, { useState } from 'react';
import {
    Container,
    Title,
    Avatar,
    Text,
    Group,
    Button,
    Paper,
    Stack,
    Flex,
    Box,
    ActionIcon,
    Select
} from '@mantine/core';
import {
    IconPlus,
    IconDotsVertical,
    IconEdit,
    IconChevronDown,
    IconArrowLeft
} from '@tabler/icons-react';
import { Layout } from '@/components/Layout';

const engineer = {
    id: 1,
    name: 'Name Person',
    email: 'umar.eee@house.co.uk',
    phone: '+44 12 461 3200',
    tasks: 22,
    status: 'active',
    avatar: null
};

// Simulate task generation
const generateTasks = (completedTasks: number) => {
    const ongoing = Array.from({ length: 1 }, (_, i) => ({
        id: `ongoing-${i}`,
        serviceName: `Service Name`,
        companyName: `Company Name`,
        date: '23 Oct 2022',
        progress: 75
    }));

    const previous = Array.from({ length: completedTasks }, (_, i) => ({
        id: `prev-${i}`,
        serviceName: `Service Name`,
        companyName: `Company Name`,
        date: '23 Oct 2022'
    }));

    return { ongoing, previous };
};

export default function EngineerDetailsPage() {
    const [selectedPeriod, setSelectedPeriod] = useState('Last month');

    const { ongoing, previous } = generateTasks(engineer.tasks);

    const engineerDetails = {
        ...engineer,
        employeeNo: `7008921`,
        firstName: 'Umar',
        lastName: 'Exe',
        role: 'Engineer',
        startedOn: '22 Jun 2019'
    };

    const TaskCard = ({ task, showProgress = false }: any) => (
        <Paper
            style={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '0.5rem'
            }}
        >
            <Flex justify="space-between" align="center">
                <Box style={{ flex: 1 }}>
                    <Text size="sm" fw={500} c="white" mb="xs">
                        {task.serviceName}
                    </Text>
                    <Group gap="xs" align="center" mb={showProgress ? "sm" : "0"}>
                        <Avatar
                            size={20}
                            radius="xl"
                            style={{
                                backgroundColor: '#64748b',
                                color: 'white',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            C
                        </Avatar>
                        <Text size="xs" c="#64748b">{task.companyName}</Text>
                    </Group>
                    {showProgress && (
                        <Box mt="sm">
                            <Box style={{
                                width: '100%',
                                height: '6px',
                                backgroundColor: '#1e293b',
                                borderRadius: '3px',
                                overflow: 'hidden'
                            }}>
                                <Box style={{
                                    width: `${task.progress}%`,
                                    height: '100%',
                                    backgroundColor: '#0ea5e9',
                                    borderRadius: '3px'
                                }} />
                            </Box>
                        </Box>
                    )}
                </Box>
                <Text size="xs" c="#64748b" style={{ textAlign: 'right', marginLeft: '1rem' }}>
                    {task.date}
                </Text>
            </Flex>
        </Paper>
    );

    return (
        <Layout>
            <Box style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '', paddingTop: '0px' }}>
                <Container fluid>
                  

                    <Flex gap="2rem" align="flex-start">
                        {/* Left Panel */}
                        <Box style={{  flexShrink: 0,flex: 1 }}>
                            <Paper style={{
                                backgroundColor: '#0f172a',
                             
                                borderRadius: '0.5rem',
                                padding: '2rem'
                            }}>
                                <Flex justify="space-between" mb="xl">
                                    <Title order={2} c="white" fw={600}>{engineerDetails.name}</Title>
                                    <Group gap="xs">
                                        <Button
                                            size="sm"
                                            leftSection={<IconPlus size={14} />}
                                            style={{
                                                backgroundColor: '#0ea5e9',
                                                border: 'none',
                                                color: 'white'
                                            }}
                                        >
                                            Assign Task
                                        </Button>
                                        <ActionIcon variant="subtle" color="gray" size="sm">
                                            <IconDotsVertical size={16} />
                                        </ActionIcon>
                                    </Group>
                                </Flex>

                                <Flex align="flex-start" gap="xl" mb="xl">
                                    <Avatar
                                        size={80}
                                        radius="xl"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        style={{
                                            border: '2px solid #334155'
                                        }}
                                    />
                                    <Box style={{ flex: 1 }}>
                                        <Flex justify="space-between" align="center" mb="md">
                                            <Title order={4} c="#0ea5e9" fw={500}>About</Title>
                                            <ActionIcon variant="subtle" color="gray" size="sm">
                                                <IconEdit size={14} />
                                            </ActionIcon>
                                        </Flex>
                                    </Box>
                                </Flex>

                                <Stack gap="md">
                                    {[
                                        ['Employee no:', engineerDetails.employeeNo],
                                        ['First name:', engineerDetails.firstName],
                                        ['Last name:', engineerDetails.lastName],
                                        ['Role:', engineerDetails.role],
                                        ['Started on:', engineerDetails.startedOn],
                                        ['Email:', engineerDetails.email],
                                        ['Phone:', engineerDetails.phone],
                                        ['Status:', engineerDetails.status]
                                    ].map(([label, value]) => (
                                        <Flex justify="space-between" key={label}>
                                            <Text size="sm" c="white" fw={400}>{label}</Text>
                                            <Text size="sm" c={label === 'Status:' && value === 'active' ? '#10b981' : '#64748b'}>
                                                {value}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Stack>
                            </Paper>
                        </Box>

                        {/* Right Panel */}
                        <Box style={{ flex: 1, width: '460px', backgroundColor: '#030E1BE5',padding: '2rem' }}>
                            {/* Ongoing */}
                            <Box mb="xl">
                                <Title order={3} c="#0ea5e9" fw={600} mb="md">
                                    {ongoing.length} Ongoing tasks
                                </Title>
                                {ongoing.length > 0 ? (
                                    ongoing.map(task => <TaskCard key={task.id} task={task} showProgress={true} />)
                                ) : (
                                    <Paper style={{
                                        backgroundColor: '#1e293b',
                                        border: '1px solid #334155',
                                        padding: '2rem',
                                        textAlign: 'center'
                                    }}>
                                        <Text c="#64748b">No ongoing tasks</Text>
                                    </Paper>
                                )}
                            </Box>

                            {/* Previous */}
                            <Box>
                                <Flex justify="space-between" align="center" mb="md">
                                    <Title order={3} c="#0ea5e9" fw={600}>
                                        {previous.length} Previous tasks
                                    </Title>
                                    <Select
                                        value={selectedPeriod}
                                      
                                        data={['Last month', 'This month', 'Last quarter', 'This year']}
                                        rightSection={<IconChevronDown size={14} />}
                                        size="sm"
                                        style={{ width: 140 }}
                                        styles={{
                                            input: {
                                                backgroundColor: '#1e293b',
                                                border: '1px solid #334155',
                                                color: 'white'
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
                                                }
                                            }
                                        }}
                                    />
                                </Flex>
                                {previous.length > 0 ? (
                                    previous.map(task => <TaskCard key={task.id} task={task} />)
                                ) : (
                                    <Paper style={{
                                        backgroundColor: '#1e293b',
                                        border: '1px solid #334155',
                                        padding: '2rem',
                                        textAlign: 'center'
                                    }}>
                                        <Text c="#64748b">No previous tasks</Text>
                                    </Paper>
                                )}
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Layout>
    );
}