import { cn } from "@/lib/utils";
import {
  IconMessageCircle,
  IconUser,
  IconLock,
  IconUsers,
  IconCode,
  IconCloud,
  IconHelp,
  IconAdjustments,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Real-time Collaboration",
      description:
        "Experience seamless communication with your team while working on GitHub projects.",
      icon: <IconUsers className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "Secure Access",
      description:
        "Conversations are protected. Only authorized contributors can participate.",
      icon: <IconLock className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "User-friendly Interface",
      description:
        "Intuitive design that makes chatting and coding effortless for everyone.",
      icon: <IconUser className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "Integration with GitHub",
      description: "Easily link discussions with repositories and pull requests.",
      icon: <IconCode className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our team is here to help you with any questions or issues you might have.",
      icon: <IconHelp className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "Custom Notifications",
      description:
        "Stay updated with custom alerts for important discussions and activities.",
      icon: <IconAdjustments className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "Cloud Storage",
      description:
        "Access your chat history and files anytime, anywhere with cloud backup.",
      icon: <IconCloud className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
    {
      title: "Open Source",
      description:
        "Join our community and contribute to making Git Talks better for everyone.",
      icon: <IconMessageCircle className="w-8 h-8 text-purple-500 group-hover:text-white transition duration-200" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-500 to-purple-700 pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500 to-purple-700 pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        {/* Wrap the icon in a div with hover styles */}
        <div className="text-purple-500 group-hover:text-white transition duration-200">
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 text-white">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
