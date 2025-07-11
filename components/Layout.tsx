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
  icon: string; // Changed to string for image URLs
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752134026/icon_Dashboard_rw2jrw.png', label: 'Dashboard', href: '/' },
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752131915/icon_Task_x6h2zo.png', label: 'Tasks', href: '/tasks' },
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752134025/icon_Solution_uatfns.png', label: 'Solutions', href: '/solutions' },
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752134025/icon_engineer_o5ddsq.png', label: 'Engineers', href: '/engineers' },
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752134025/icon_Customer-Support_qdomb0.png', label: 'Ops', href: '/ops' },
  { icon: 'https://res.cloudinary.com/dfjm3z7es/image/upload/v1752134025/icon_notification_fa1mza.png', label: 'Notification', href: '/notifications' }
];

interface NavbarItemProps {
  icon: string;
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

function NavbarItem({ icon, label, href, active, onClick }: NavbarItemProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        fontWeight: 600,
        padding: rem(10),
        borderRadius: rem(4),
        color: active ? '#339af0' : '#ffff',
        backgroundColor: active ? 'rgba(51, 154, 240, 0.1)' : 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(51, 154, 240, 0.05)'
        }
      }}
    >
      <Group>
        <Image
          src={icon}
          alt={label}
          h={35}
          w="auto"
          fit="contain"
          style={{

            filter: active ? 'none' : 'white',
            transition: 'filter 0.2s ease'
          }}
        />
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
            <Avatar
              size={32}
              radius="xl"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
            >
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