'use client';
import React from 'react';
import {
    Modal,
    TextInput,
    Button,
    Stack,
    Group,
    Flex
} from '@mantine/core';

interface AddEngineerModalProps {
    opened: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export const AddEngineerModal: React.FC<AddEngineerModalProps> = ({ opened, onClose, onSubmit }) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleSubmit = () => {
        onSubmit({
            name: `${firstName} ${lastName}`,
            email,
            phone
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        onClose();
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Add Engineer"
            centered
            size="md"
            styles={{
                content: {
                    backgroundColor: '#0f172a',
                    
                    border: '1px solid #334155',
                    borderRadius: '8px',
                },
                title: {
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: 500,
                },
                header: {
                    backgroundColor: '#0f172a',
                    borderBottom: '1px solid #373A40',
                },
                body: { color: 'white' },
                close: {
                    color: 'white',
                    '&:hover': { backgroundColor: 'transparent' },
                },
            }}
        >
            <Stack style={{marginTop: 20}} gap="sm">
                <TextInput
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                    placeholder="Umar"
                    styles={{
                        label: { color: 'white' },
                        input: {
                            backgroundColor: '#1e293b',
                            borderColor: '#334155',
                            color: 'white',
                        },
                    }}
                />
                <TextInput
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.currentTarget.value)}
                    placeholder="Eze"
                    styles={{
                        label: { color: 'white' },
                        input: {
                            backgroundColor: '#1e293b',
                            borderColor: '#334155',
                            color: 'white',
                        },
                    }}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder="umar.eze@fieldbase.co.uk"
                    styles={{
                        label: { color: 'white' },
                        input: {
                            backgroundColor: '#1e293b',
                            borderColor: '#334155',
                            color: 'white',
                        },
                    }}
                />
                <TextInput
                    label="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                    placeholder="234 12 461 3200"
                    styles={{
                        label: { color: 'white' },
                        input: {
                            backgroundColor: '#1e293b',
                            borderColor: '#334155',
                            color: 'white',
                        },
                    }}
                />
                <Flex justify="flex-end" gap="md" mt="md">
                    <Button
                        variant="outline"
                        color="gray"
                        onClick={onClose}
                        style={{
                            borderColor: '#334155',
                            color: 'white',
                            backgroundColor: '#0f172a',
                            width: 160,
                            height: 56
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: '#0ea5e9',
                            color: 'white',
                            width: 160,
                            height: 56
                        }}
                    >
                        Add
                    </Button>
                </Flex>
            </Stack>
        </Modal>
    );
};
