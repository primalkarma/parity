import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NpmIcon } from "./_icons/Npm";
import { GitlabIcon } from "./_icons/Gitlab";
import { VueIcon } from "./_icons/Vue";
import { BitcoinIcon } from "./_icons/Bitcoin";
import { DiscordIcon } from "./_icons/Discord";
import { HtmlIcon } from "./_icons/Html";
import { LaravelIcon } from "./_icons/Laravel";
import { TailwindIcon } from "./_icons/Tailwind";
import { MongoIcon } from "./_icons/Mongo";
import { DropboxIcon } from "./_icons/Dropbox";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormatCompactNumber } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_80%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell Bigger !
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimise your business with the best pricing solution for your NFT
          project. We'll help you set your prices, manage your inventory, and
          get the best deals for your NFT project.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2 ">
            {" "}
            Get Started for Free <ArrowRight className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col items-center justify-center gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance ">
            Trusted by the top NFT projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://www.npmjs.com/">
              <NpmIcon className="w-40 h-40" />
            </Link>
            <Link href="https://about.gitlab.com/">
              <GitlabIcon className="w-40 h-40" />
            </Link>
            <Link href="https://vuejs.org/">
              <VueIcon className="w-40 h-40" />
            </Link>
            <Link href="https://bitcoin.org/">
              <BitcoinIcon className="w-40 h-40" />
            </Link>
            <Link href="https://discord.com/">
              <DiscordIcon className="w-40 h-40" />
            </Link>
            <Link href="https://html.spec.whatwg.org/">
              <HtmlIcon className="w-40 h-40" />
            </Link>
            <Link href="https://laravel.com/">
              <LaravelIcon className="w-40 h-40" />
            </Link>
            <Link href="https://tailwindui.com/">
              <TailwindIcon className="w-40 h-40" />
            </Link>
            <Link href="https://www.mongodb.com/">
              <MongoIcon className="w-40 h-40" />
            </Link>
            <Link className="md:max-xl:hidden" href="ttps://www.dropbox.com/">
              <DropboxIcon className="w-40 h-40" />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="px-8 py-16 bg-accent/10">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          NFTs that are easy to use and make 10 times more money.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier}></PricingCard>
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href={"/"}>
          <BrandLogo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-8 ">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup 
            title="Help" 
            links={[
              {label: "About", href: "/#about"},
              {label: "Blog", href: "/#blog"},
              {label: "Careers", href: "/#careers"},
              {label: "Press", href: "/#press"},
            ]}
            />
            <FooterLinkGroup 
            title="Solutions"
            links={[
              {label: "Marketplace", href: "/#marketplace"},
              {label: "NFT Marketplace", href: "/#nft-marketplace"},
              {label: "NFT Minting", href: "/#nft-minting"},
              {label: "NFT Auction", href: "/#nft-auction"},
              {label: "NFT Trading", href: "/#nft-trading"},
              {label: "NFT Collectibles", href: "/#nft-collectibles"},
              {label: "NFT Games", href: "/#nft-games"},
              {label: "NFT Art", href: "/#nft-art"},
              {label: "NFT Domains", href: "/#nft-domains"},
              {label: "NFT Identity", href: "/#nft-identity"},
              {label: "NFT Data", href: "/#nft-data"},
              {label: "NFT Storage", href: "/#nft-storage"},
              {label: "NFT Infrastructure", href: "/#nft-infrastructure"},
            ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup 
            title="Help" 
            links={[
              {label: "About", href: "/#about"},
              {label: "Blog", href: "/#blog"},
              {label: "Careers", href: "/#careers"},
              {label: "Press", href: "/#press"},
            ]}
            />
            <FooterLinkGroup 
            title="Solutions"
            links={[
              {label: "Marketplace", href: "/#marketplace"},
              {label: "NFT Marketplace", href: "/#nft-marketplace"},
              {label: "NFT Minting", href: "/#nft-minting"},
              {label: "NFT Auction", href: "/#nft-auction"},
              {label: "NFT Trading", href: "/#nft-trading"},
              {label: "NFT Collectibles", href: "/#nft-collectibles"},
              {label: "NFT Games", href: "/#nft-games"},
              {label: "NFT Art", href: "/#nft-art"},
              {label: "NFT Domains", href: "/#nft-domains"},
              {label: "NFT Identity", href: "/#nft-identity"},
              {label: "NFT Data", href: "/#nft-data"},
              {label: "NFT Storage", href: "/#nft-storage"},
              {label: "NFT Infrastructure", href: "/#nft-infrastructure"},
            ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup 
            title="Help" 
            links={[
              {label: "About", href: "/#about"},
              {label: "Blog", href: "/#blog"},
              {label: "Careers", href: "/#careers"},
              {label: "Press", href: "/#press"},
            ]}
            />
            <FooterLinkGroup 
            title="Solutions"
            links={[
              {label: "Marketplace", href: "/#marketplace"},
              {label: "NFT Marketplace", href: "/#nft-marketplace"},
              {label: "NFT Minting", href: "/#nft-minting"},
              {label: "NFT Auction", href: "/#nft-auction"},
              {label: "NFT Trading", href: "/#nft-trading"},
              {label: "NFT Collectibles", href: "/#nft-collectibles"},
            ]}
            />
            <FooterLinkGroup 
            title="Help" 
            links={[
              {label: "About", href: "/#about"},
              {label: "Blog", href: "/#blog"},
              {label: "Careers", href: "/#careers"},
              {label: "Press", href: "/#press"},
            ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100}/mo
        </CardTitle>
        <CardDescription>
          {FormatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg font-extralight w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP Discounts</Feature>
        {canCustomizeBanner && <Feature>Banner Customisation</Feature>}
        {canRemoveBranding && <Feature>Branding Removal</Feature>}
        {canAccessAnalytics && <Feature>Advanced Analytics</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (<div className="flex flex-col gap-4">
    <h3 className="font-semibold">{title}</h3>
    <ul className="flex flex-col gap-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>{link.label}</li>
      ))}
    </ul>
  </div>)
}
