'use client'

import {
    Bank,
    GithubLogo,
    XLogo,
    InstagramLogo,
    Envelope,
    GraduationCap,
    Coffee,
    Butterfly,
    Pill,
    WechatLogo,
    DiscordLogo
} from '@phosphor-icons/react'

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
switch (name) {
    case 'bank':
    return <Bank size={size} weight="duotone" />;
    case 'github':
    return <GithubLogo size={size} weight="duotone" />;
    case 'x':
    return <XLogo size={size} weight="duotone" />;
    case 'instagram':
    return <InstagramLogo size={size} weight="duotone" />;
    case "bsky":
    return <Butterfly size={size} weight="duotone" />
    case 'email':
    return <Envelope size={size} weight="duotone" />;
    case "college":
    return <GraduationCap size={size} weight="duotone" />;
    case "coffee":
    return <Coffee size={size} weight="duotone" />;
    case "pill":
    return <Pill size={size} weight="duotone" />;
    case "wechat":
    return <WechatLogo size={size} weight="duotone" />;
    case "discord":
    return <DiscordLogo size={size} weight="duotone" />;
    default:
    return null
    }
}