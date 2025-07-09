'use client';

import { useDisclosure } from '@mantine/hooks';
import {
  AppShell,
  Text,
  Group,
  Burger,
  Avatar,
  Table,
  Button,
  TextInput,
  ActionIcon,
  Badge,
  Menu,
  Container,
  Title,
  Select,
  Image,
  Flex,
  Box,
  UnstyledButton,
  rem,
  Stack,
  Indicator
} from '@mantine/core';
import {
  IconDashboard,
  IconChecklist,
  IconBulb,
  IconUsers,
  IconSettings,
  IconBell,
  IconSearch,
  IconPlus,
  IconDotsVertical,
  IconPhone,
  IconMail,
  IconNotification
} from '@tabler/icons-react';
import { useState } from 'react';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavItem {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: IconDashboard, label: 'Dashboard', href: '/' },
  { icon: IconChecklist, label: 'Tasks', href: '/tasks' },
  { icon: IconBulb, label: 'Solutions', href: '/solutions' },
  { icon: IconUsers, label: 'Engineers', href: '/engineers' },
  { icon: IconSettings, label: 'Ops', href: '/ops' },
  { icon: IconNotification, label: 'Notification', href: '/notifications' }
];

interface NavbarItemProps {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

function NavbarItem({ icon: Icon, label, href, active, onClick }: NavbarItemProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        padding: rem(10),
        borderRadius: rem(4),
        color: active ? '#339af0' : '#8b949e',
        backgroundColor: active ? 'rgba(51, 154, 240, 0.1)' : 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(51, 154, 240, 0.05)'
        }
      }}
    >
      <Group>
        <Icon size={18} />
        <Text size="sm" fw={500}>
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

// Layout Component
export function Layout({ children }: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Navbar
        p="md"
        fw={{ base: 250 }}
        style={{
          backgroundColor: '#0f1419',
          borderRight: '1px solid #21262d'
        }}
      >
        <AppShell.Section grow style={{ padding: '20px 16px' }}>
          <Group mb="xl">
            <Image
              h={30}
              w="auto"
              fit="contain"
              src="https://res.cloudinary.com/dfjm3z7es/image/upload/v1752056574/logo_jzjgae.png"
            />
          </Group> 

          <Stack>
            {navItems.map((item) => (
              <NavbarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={pathname === item.href}
                onClick={() => handleNavClick(item.href)}
              />
            ))}
          </Stack>
        </AppShell.Section>

        <AppShell.Section style={{ padding: '16px', borderTop: '1px solid #21262d' }}>
          <Group>
            <Avatar size={32} radius="xl" color="blue">
              IM
            </Avatar>
            <Text size="sm" fw={500} style={{ color: 'white' }}>
              Ibrahim Musa
            </Text>
          </Group>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}