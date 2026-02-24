import {useState} from "react";
import {Button} from "../components/Button.tsx";
import {ArrowRight, Download, Github, Linkedin, Twitter} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton.tsx";


type icons = {
    icon: typeof Github | typeof Linkedin | typeof Twitter;
    href: string;
}

export default function Hero() {
    const [dots] = useState(() =>
        Array.from({ length: 30 }, () => {
            return {
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: Math.random() * 20 + 15,
                delay: Math.random() * 5
            };
        })
    );

    const socialLinks: icons[] = [
        {icon: Github, href: "https://github.com/SonnyHardy"},
        {icon: Linkedin, href: "https://www.linkedin.com/in/hardy-tambeck/"},
        {icon: Twitter, href: "#"}
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${dot.left}%`,
                            top: `${dot.top}%`,
                            animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
                            animationDelay: `${dot.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Computer Science Student - Fullstack Developer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br/>
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Hardy Tambeck - a computer science student and fullstack developer specializing in Java,
                                Spring Boot, TypeScript, React and Angular. I build scalable and performant web applications.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5 animate-arrow-sway" />
                            </Button>

                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow:</span>
                            {socialLinks.map((social, index) => (
                                <a
                                    href={social.href}
                                    key={index}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                </div>
            </div>
        </section>
    )
}