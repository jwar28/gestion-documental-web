import { FileTextIcon, InputIcon } from "@radix-ui/react-icons"
import { AnimatedCard } from "./ui/animated-card"
import { Handshake, Languages, Database, MonitorCheck } from "lucide-react"
import BlurFade from "./magicui/blur-fade"

const features = [
	{
		Icon: FileTextIcon,
		name: "Gestión Documental",
		description: "Gestiona documentos de archivo bajo normativas archivísticas.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
	{
		Icon: InputIcon,
		name: "Investigación",
		description: "Orienta la investigación aplicando referentes técnicos.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
	{
		Icon: Handshake,
		name: "Cultura Emprendedora",
		description: "Apoya la cultura emprendedora en entornos productivos.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute ml-20 h-40 opacity-60" />,
		className: "",
	},
	{
		Icon: Languages,
		name: "Inglés",
		description: "Mejora tu comunicación en inglés en entornos laborales.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute -right-2 -top-8 opacity-60" />,
		className: "",
	},
	{
		Icon: Database,
		name: "Gestión de Bases de Datos",
		description: "Administra bases de datos conforme a procedimientos técnicos.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute ml-20 h-40 opacity-60" />,
		className: "",
	},
	{
		Icon: MonitorCheck,
		name: "Digitalización de Documentos",
		description: "Digitaliza documentos usando tecnologías archivísticas.",
		href: "/",
		cta: "Aprender más",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "",
	},
]

export function Skills() {
	return (
		<BlurFade delay={0.25 * 3}>
			<section
				className="sm:flex sm:min-h-screen sm:flex-col sm:items-center sm:justify-center sm:py-24"
				id="skills"
			>
				<p className="mb-7 text-center text-2xl font-semibold text-neutral-700">
					<span className="text-[#70b22d]">Habilidades</span> y{" "}
					<span className="text-[#70b22d]">Temas</span> que se desarrollaran en el tecnologo
				</p>
				<div className="flex flex-wrap justify-evenly gap-4">
					{features.map((feature, idx) => (
						<AnimatedCard key={idx} {...feature} />
					))}
				</div>
			</section>
		</BlurFade>
	)
}
