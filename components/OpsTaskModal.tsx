'use client';
import React, { useState } from 'react';
import {
    Modal,
    TextInput,
    Button,
    Stack,
    Group,
    Flex,
    Select
} from '@mantine/core';

interface AddOpsTaskModalProps {
    opened: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export const AddOpsTaskModal: React.FC<AddOpsTaskModalProps> = ({ opened, onClose, onSubmit }) => {

    const [formData, setFormData] = useState({
        company: 'Acme Company',
        vesselName: 'Titanic',
        location: 'Lagos',
        invoiceTo: 'Full name',
        taskType: '',
        equipment: 'Icom M800',
        engineer: 'Umar',
        estimatedDelivery: '23 Aug 2022'
    });

    const handleInputChange = (field: string, value: string | null) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
    };
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Add Task to Ibrahim"
            size="md"
            centered
            styles={{
                title: {
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: 500,
                },
                header: {
                    backgroundColor: '#0f172a',
                    borderBottom: '1px solid #373A40',
                },
                body: {
                   backgroundColor: '#0f172a',
                    padding: '24px',
                },
                content: {
                    backgroundColor: '#0f172a',
                }
            }}
        >
            <Stack gap="md">
                <TextInput
                    label="Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <TextInput
                    label="Vessel Name"
                    value={formData.vesselName}
                    onChange={(e) => handleInputChange('vesselName', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                            backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <TextInput
                    label="Location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <TextInput
                    label="Invoice to"
                    value={formData.invoiceTo}
                    onChange={(e) => handleInputChange('invoiceTo', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                            backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <Select
                    label="Task type"
                    placeholder="Choose"
                    value={formData.taskType}
                    onChange={(value) => handleInputChange('taskType', value)}
                    data={[
                        { value: 'installation', label: 'Installation' },
                        { value: 'maintenance', label: 'Maintenance' },
                        { value: 'repair', label: 'Repair' },
                        { value: 'inspection', label: 'Inspection' },
                    ]}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        },
                        dropdown: {
                            backgroundColor: '#1A1B1E',
                            border: '1px solid #373A40',
                        },

                    }}
                />

                <TextInput
                    label="Equipment"
                    value={formData.equipment}
                    onChange={(e) => handleInputChange('equipment', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <Select
                    label="Engineer"
                    value={formData.engineer}
                    onChange={(value) => handleInputChange('engineer', value)}
                    data={[
                        { value: 'umar', label: 'Umar' },
                        { value: 'ahmed', label: 'Ahmed' },
                        { value: 'fatima', label: 'Fatima' },
                        { value: 'ibrahim', label: 'Ibrahim' },
                    ]}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        },
                        dropdown: {
                            backgroundColor: '#1A1B1E',
                            border: '1px solid #373A40',
                        },

                    }}
                />

                <TextInput
                    label="Estimated Delivery"
                    value={formData.estimatedDelivery}
                    onChange={(e) => handleInputChange('estimatedDelivery', e.target.value)}
                    styles={{
                        label: { color: '#C1C2C5', marginBottom: '8px' },
                        input: {
                           backgroundColor: '#0f172a',
                            border: '1px solid #373A40',
                            color: '#fff',
                            '&:focus': {
                                borderColor: '#228be6'
                            }
                        }
                    }}
                />

                <Group justify="space-between" mt="lg">
                    <Button
                        variant="outline"

                        styles={{
                            root: {
                                border: '1px solid #373A40',
                                color: '#C1C2C5',
                                '&:hover': {
                                    backgroundColor: '#373A40',
                                }
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        styles={{
                            root: {
                                backgroundColor: '#00bcd4',
                                '&:hover': {
                                    backgroundColor: '#00acc1',
                                }
                            }
                        }}
                    >
                        Add
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};
